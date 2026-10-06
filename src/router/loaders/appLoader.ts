import { account, databases } from "@/lib/appwrite";
import { AppwriteException, Query } from "appwrite";
import { redirect, type LoaderFunction } from "react-router";

const appLoader: LoaderFunction = async () => {
  const appData: {
    user?: Awaited<ReturnType<typeof account.get>>;
    conversation?: Awaited<ReturnType<typeof databases.listDocuments>>;
  } = {};

  try {
    appData.user = await account.get();
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.log(`Error getting user session: ${error.message}`);
      return redirect("/login");
    }
  }

  try {
    appData.conversation = await databases.listDocuments(
      import.meta.env.VITE_GEMINI_DB_ID,
      import.meta.env.VITE_GEMINI_CONVERSATIONS_ID,
      [
        Query.select(["$id", "title"]),
        Query.orderAsc("$createdAt"),
        Query.equal("user_id", appData.user?.$id ?? ""),
      ],
    );

    console.log(appData);
  } catch (error) {
    if (error instanceof AppwriteException)
      console.log(`Error getting conversations: ${error.message}`);
  }

  return appData;
};

export default appLoader;
