import { Models } from "react-native-appwrite";

export type AuthContextType = {
  user: Models.User<Models.Preferences> | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<string | null>;
};
