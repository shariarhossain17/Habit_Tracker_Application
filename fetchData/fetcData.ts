import { COLLECTION_ID, database, DATABASE_ID } from "@/lib/appwrite";
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

export const handleDeleteHabit = async (id: string) => {
  try {
    await database.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
  } catch (error) {
    console.error(error);
  }
};
