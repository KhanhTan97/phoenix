import { account, databases } from "@/lib/appwrite";
import { Query } from "appwrite";
import { redirect, type LoaderFunction } from "react-router";

/**
 * Types
 */

const conversationLoader: LoaderFunction = async ({ params }) => {
  const { conversationId } = params;
  if (!conversationId) {
    throw new Response("Conversation ID is required", { status: 400 });
  }

  const data: {
    user?: Awaited<ReturnType<typeof account.get>>;
    conversation?: Awaited<ReturnType<typeof databases.getDocument>>;
  } = {};

  try {
    data.user = await account.get();
  } catch (error) {
    console.log("Error getting user account: ", error);

    return redirect("/login");
  }

  try {
    data.conversation = await databases.getDocument(
      import.meta.env.VITE_GEMINI_DB_ID,
      import.meta.env.VITE_GEMINI_CONVERSATIONS_ID,
      conversationId,
      [Query.select(["chats.*"])],
    );
  } catch (error) {
    console.log("Error getting conversation: ", error);
    throw error;
  }

  return data;
};

export default conversationLoader;
