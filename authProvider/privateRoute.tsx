import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import useAuth from "./useAuth";

export default function RouteGUard({
  children,
}: {
  children: React.ReactNode;
}) {
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
