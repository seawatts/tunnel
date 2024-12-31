import type { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

import { db } from "@acme/db/client";
import { Users } from "@acme/db/schema";

import { env } from "~/env";

export const runtime = "edge";

export async function POST(request: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload = await request.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent;

  // Verify the payload with the headers
  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-signature": svix_signature,
      "svix-timestamp": svix_timestamp,
    }) as WebhookEvent;
  } catch (error) {
    console.error("Error verifying webhook:", error);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = event.data;
  const eventType = event.type;
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  // console.log("Webhook body:", body);

  if (event.type === "user.created") {
    await db.insert(Users).values({
      avatarUrl: event.data.image_url,
      email:
        event.data.email_addresses.find(
          (email) => email.id === event.data.primary_email_address_id,
        )?.email_address ?? "",
      firstName: event.data.first_name,
      id: event.data.id,
      lastName: event.data.last_name,
    });
  }

  return new Response("", { status: 200 });
}
