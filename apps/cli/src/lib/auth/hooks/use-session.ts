import { useAuthStore } from '../store';
import { useAuth } from './use-auth';

/**
 * Hook to get auth state and actions
 * @returns Object containing auth state and actions
 */
export function useSession() {
  const { isAuthenticated, isLoading, userId, token, firstName, lastName } =
    useAuth();
  const setAuth = useAuthStore.use.setAuth();
  const clearAuth = useAuthStore.use.clearAuth();

  return {
    isAuthenticated,
    isLoading,
    userId,
    token,
    firstName,
    lastName,
    status: isAuthenticated ? 'authenticated' : 'unauthenticated',
    session: isAuthenticated
      ? {
          user: { id: userId },
          token,
        }
      : null,
    signIn: setAuth,
    signOut: clearAuth,
  };
}
