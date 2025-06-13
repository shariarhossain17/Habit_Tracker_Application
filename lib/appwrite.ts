import { Account, Client, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_APPID!)
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!);

export const account = new Account(client);
export const database = new Databases(client);

export const DATABASE_ID = process.env.EXPO_PUBLIC_DB_ID!;
export const COLLECTION_ID = process.env.EXPO_PUBLIC_Habit_COLLECTION_ID!;
export const COMPLETION_ID = process.env.EXPO_PUBLIC_Habit_COMPLETION_ID!;

export interface RealtimeResponse {
  events: string[];
  payload: any;
}
