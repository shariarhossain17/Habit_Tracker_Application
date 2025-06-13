import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Entypo name="home" size={24} color={color} />
            ) : (
              <Entypo name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Tabs.Screen name="login" options={{ title: "login" }} />
    </Tabs>
  );
}
