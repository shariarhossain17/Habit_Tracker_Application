import useAuth from "@/authProvider/useAuth";
import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello from khulna</Text>
      <Button onPress={signOut} mode="text" icon={"logout"}>
        sign out
      </Button>
    </View>
  );
}
