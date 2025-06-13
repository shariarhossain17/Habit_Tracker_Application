import {
  COLLECTION_ID,
  COMPLETION_ID,
  database,
  DATABASE_ID,
} from "@/lib/appwrite";
import { HabitCompletion } from "@/types/habitTypes";
import { Query } from "react-native-appwrite";

export const fetchHabits = async (user: any) => {
  try {
    const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("user_id", user?.$id ?? ""),
    ]);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTodayCompletions = async (user: any) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const response = await database.listDocuments(DATABASE_ID, COMPLETION_ID, [
      Query.equal("user_id", user?.$id ?? ""),
      Query.greaterThanEqual("completed_at", today.toISOString()),
    ]);
    const completions = response.documents as HabitCompletion[];

    return completions;
  } catch (error) {
    console.error(error);
  }
};

export const handleDeleteHabit = async (id: string) => {
  try {
    await database.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
  } catch (error) {
    console.error(error);
  }
};
