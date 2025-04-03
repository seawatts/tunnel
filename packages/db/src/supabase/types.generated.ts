// !!!GENERATED FILE, DO NOT EDIT!!!
// This file is auto-generated by supabase in scripts/generate-types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      connections: {
        Row: {
          clientHostname: string | null
          clientId: string
          clientOs: string | null
          clientVersion: string | null
          connectedAt: string
          disconnectedAt: string | null
          id: string
          ipAddress: string
          lastPingAt: string
          orgId: string
          tunnelId: string
          userId: string
        }
        Insert: {
          clientHostname?: string | null
          clientId: string
          clientOs?: string | null
          clientVersion?: string | null
          connectedAt?: string
          disconnectedAt?: string | null
          id: string
          ipAddress: string
          lastPingAt?: string
          orgId: string
          tunnelId: string
          userId: string
        }
        Update: {
          clientHostname?: string | null
          clientId?: string
          clientOs?: string | null
          clientVersion?: string | null
          connectedAt?: string
          disconnectedAt?: string | null
          id?: string
          ipAddress?: string
          lastPingAt?: string
          orgId?: string
          tunnelId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "connections_orgId_orgs_id_fk"
            columns: ["orgId"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connections_tunnelId_tunnels_id_fk"
            columns: ["tunnelId"]
            isOneToOne: false
            referencedRelation: "tunnels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connections_userId_user_id_fk"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      orgMembers: {
        Row: {
          createdAt: string | null
          createdByUserId: string
          id: string
          orgId: string
          role: Database["public"]["Enums"]["userRole"]
          updatedAt: string | null
          userId: string
        }
        Insert: {
          createdAt?: string | null
          createdByUserId: string
          id: string
          orgId: string
          role?: Database["public"]["Enums"]["userRole"]
          updatedAt?: string | null
          userId: string
        }
        Update: {
          createdAt?: string | null
          createdByUserId?: string
          id?: string
          orgId?: string
          role?: Database["public"]["Enums"]["userRole"]
          updatedAt?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "orgMembers_createdByUserId_user_id_fk"
            columns: ["createdByUserId"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orgMembers_orgId_orgs_id_fk"
            columns: ["orgId"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orgMembers_userId_user_id_fk"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      orgs: {
        Row: {
          clerkOrgId: string | null
          createdAt: string | null
          createdByUserId: string
          id: string
          updatedAt: string | null
        }
        Insert: {
          clerkOrgId?: string | null
          createdAt?: string | null
          createdByUserId: string
          id: string
          updatedAt?: string | null
        }
        Update: {
          clerkOrgId?: string | null
          createdAt?: string | null
          createdByUserId?: string
          id?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orgs_createdByUserId_user_id_fk"
            columns: ["createdByUserId"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      requests: {
        Row: {
          apiKey: string
          completedAt: string | null
          connectionId: string | null
          createdAt: string
          id: string
          orgId: string
          request: Json
          response: Json | null
          responseTimeMs: number
          status: string
          tunnelId: string
          userId: string
        }
        Insert: {
          apiKey: string
          completedAt?: string | null
          connectionId?: string | null
          createdAt?: string
          id: string
          orgId: string
          request: Json
          response?: Json | null
          responseTimeMs?: number
          status: string
          tunnelId: string
          userId: string
        }
        Update: {
          apiKey?: string
          completedAt?: string | null
          connectionId?: string | null
          createdAt?: string
          id?: string
          orgId?: string
          request?: Json
          response?: Json | null
          responseTimeMs?: number
          status?: string
          tunnelId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "requests_connectionId_connections_id_fk"
            columns: ["connectionId"]
            isOneToOne: false
            referencedRelation: "connections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requests_orgId_orgs_id_fk"
            columns: ["orgId"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requests_tunnelId_tunnels_id_fk"
            columns: ["tunnelId"]
            isOneToOne: false
            referencedRelation: "tunnels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requests_userId_user_id_fk"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      tunnels: {
        Row: {
          apiKey: string
          clientCount: number
          clientId: string
          config: Json
          createdAt: string | null
          id: string
          lastConnectionAt: string | null
          lastRequestAt: string | null
          orgId: string
          port: number
          requestCount: number
          status: Database["public"]["Enums"]["tunnelStatus"]
          updatedAt: string | null
          userId: string
        }
        Insert: {
          apiKey: string
          clientCount?: number
          clientId: string
          config?: Json
          createdAt?: string | null
          id: string
          lastConnectionAt?: string | null
          lastRequestAt?: string | null
          orgId: string
          port: number
          requestCount?: number
          status?: Database["public"]["Enums"]["tunnelStatus"]
          updatedAt?: string | null
          userId: string
        }
        Update: {
          apiKey?: string
          clientCount?: number
          clientId?: string
          config?: Json
          createdAt?: string | null
          id?: string
          lastConnectionAt?: string | null
          lastRequestAt?: string | null
          orgId?: string
          port?: number
          requestCount?: number
          status?: Database["public"]["Enums"]["tunnelStatus"]
          updatedAt?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "tunnels_orgId_orgs_id_fk"
            columns: ["orgId"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tunnels_userId_user_id_fk"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          avatarUrl: string | null
          clerkId: string | null
          createdAt: string
          email: string
          firstName: string | null
          id: string
          lastLoggedInAt: string | null
          lastName: string | null
          online: boolean
          updatedAt: string | null
        }
        Insert: {
          avatarUrl?: string | null
          clerkId?: string | null
          createdAt?: string
          email: string
          firstName?: string | null
          id: string
          lastLoggedInAt?: string | null
          lastName?: string | null
          online?: boolean
          updatedAt?: string | null
        }
        Update: {
          avatarUrl?: string | null
          clerkId?: string | null
          createdAt?: string
          email?: string
          firstName?: string | null
          id?: string
          lastLoggedInAt?: string | null
          lastName?: string | null
          online?: boolean
          updatedAt?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      tunnelStatus: "active" | "inactive"
      userRole: "admin" | "superAdmin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
