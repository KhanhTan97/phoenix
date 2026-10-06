import { getAiResponse, getConversationTitle } from "@/api/googleAi";
import { account, databases } from "@/lib/appwrite";

import { generateID } from "@/utils/generateID";
import { redirect } from "react-router";

const userPromptAction = async (formData: FormData) => {
  const userPrompt = formData.get("user_prompt");

  const user = await account.get();

  if (typeof userPrompt === "string") {
    const conversationTitle = await getConversationTitle(userPrompt);
    let conversation = null;

    try {
      conversation = await databases.createDocument(
        import.meta.env.VITE_GEMINI_DB_ID,
        import.meta.env.VITE_GEMINI_CONVERSATIONS_ID,
        generateID(),
        {
          title: conversationTitle,
          user_id: user.$id,
        },
      );
    } catch (error) {
      console.log("Error creating conversation: ", error);
    }

    const aiResponse = await getAiResponse(userPrompt);

    try {
      await databases.createDocument(
        import.meta.env.VITE_GEMINI_DB_ID,
        import.meta.env.VITE_GEMINI_CHATS_ID,
        generateID(),
        {
          user_prompt: userPrompt,
          ai_response: aiResponse,
          conversation: conversation?.$id,
        },
      );
    } catch (error) {
      console.log("Error creating conversation: ", error);
    }

    return redirect(`/${conversation?.$id}`);
  }
};

const appAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const requestType = formData.get("request_type");

  if (requestType === "user_prompt") {
    return await userPromptAction(formData);
  }
};

export default appAction;
