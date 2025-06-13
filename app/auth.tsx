import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const theme = useTheme();

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleAuth = async () => {
    if (!email || !password) {
      setError("Please fill the field");

      return;
    }

    if (password.length < 6) {
      setError("password must be atleast 6 character");
      return;
    }
    setError("");
  };
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.contain}>
          <Text style={styles.title} variant="headlineMedium">
            {!isSignUp ? "Welcome Back" : "Create account"}
          </Text>
          <TextInput
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="example@gmail.com"
            mode="outlined"
            style={styles.input}
            onChangeText={setEmail}
            ddsfe
          />
          <TextInput
            label="Password"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Your Password"
            mode="outlined"
            style={styles.input}
            onChangeText={setPassword}
          />
          {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
          <Button onPress={handleAuth} style={styles.button} mode="contained">
            {isSignUp ? "Sign up" : "Sign In"}
          </Button>
          <Button
            style={styles.switchModeButton}
            mode="text"
            onPress={handleSwitchMode}
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contain: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    textAlign: "left",
    marginBottom: 16,
  },
  button: {
    textAlign: "center",
    marginTop: 8,
  },
  switchModeButton: {},
});
