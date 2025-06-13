import { AuthContextType } from "@/types/autcontextType";
import React, { createContext, useEffect, useState } from "react";
import { ID, Models } from "react-native-appwrite";
import { account } from "../lib/appwrite";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

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

  const getUser = async () => {
    try {
      const session = await account.get();
      setUser(session);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const signIn = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const session = await account.get();

      setUser(session);

      return null;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }

      return "an error occurred during sign in";
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  const data = {
    user,
    signIn,
    signUp,
    loading,
    signOut,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
