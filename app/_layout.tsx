import { AuthProvider } from "@/authProvider/authContext";
import useAuth from "@/authProvider/useAuth";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
function RouteGUard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { user, loading } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const isAuthGroup = segments[0] === "auth";
    if (!user && !isAuthGroup && !loading) {
      router.replace("/auth");
    } else if (user && isAuthGroup && loading) {
      router.replace("/");
    }
  }, [user, segments, loading]);

  return <>{children}</>;
}
export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGUard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGUard>
    </AuthProvider>
  );
}
