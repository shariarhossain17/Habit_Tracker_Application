import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      <Stack.Screen name="login" options={{ title: "Login" }}></Stack.Screen>
    </Stack>
  );
}
