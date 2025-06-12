import { Text } from "@react-navigation/elements";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hbe</Text>
      <Link href="/login">Login page</Link>
    </View>
  );
}
