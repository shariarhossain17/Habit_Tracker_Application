import { AuthContextType } from "@/types/autcontextType";
import React, { createContext, useState } from "react";
import { ID, Models } from "react-native-appwrite";
import { account } from "../lib/appwrite";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const signUp = async (email: string, password: string) => {
    try {
      await account.create(ID.unique(), email, password);
      await signIn(email, password);
      return null;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }

      return "an error occurred during signup";
    }
  };
  const signIn = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      return null;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }

      return "an error occurred during sign in";
    }
  };
  const data = {
    user,
    signIn,
    signUp,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
