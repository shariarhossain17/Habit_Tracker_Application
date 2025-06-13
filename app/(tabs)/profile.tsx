import useAuth from "@/authProvider/useAuth";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Surface, Text } from "react-native-paper";

export default function Profile() {
  const { user, signOut } = useAuth();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (user?.registration) {
      const date = new Date(user.registration);
      setFormattedDate(date.toDateString());
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Surface style={styles.card} elevation={3}>
        <Avatar.Icon size={80} icon="account-circle" style={styles.avatar} />
        <Text variant="titleMedium" style={styles.email}>
          {user?.email || "No email"}
        </Text>
        <Text style={styles.status}>
          {user?.emailVerification
            ? "✅ Email Verified"
            : "❌ Email Not Verified"}
        </Text>
        <Text style={styles.date}>
          Registered: {formattedDate || "Unknown"}
        </Text>
      </Surface>

      <Button
        icon="logout"
        mode="outlined"
        onPress={signOut}
        style={styles.logoutBtn}
      >
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#fff",
    width: "100%",
  },
  avatar: {
    backgroundColor: "#6200ee",
    marginBottom: 12,
  },
  email: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  status: {
    color: "#666",
    marginBottom: 4,
  },
  date: {
    color: "#999",
    fontSize: 14,
  },
  logoutBtn: {
    marginTop: 32,
    borderColor: "#6200ee",
  },
});
