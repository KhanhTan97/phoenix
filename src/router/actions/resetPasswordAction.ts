import { account } from "@/lib/appwrite";
import { AppwriteException } from "appwrite";
import type { ActionFunction } from "react-router";

const resetPasswordAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  const secret = url.searchParams.get("secret");
  const password = formData.get("password");

  try {
    if (!userId || !secret || typeof password !== "string") {
      throw new Error("Missing or invalid recovery data");
    }

    await account.updateRecovery(userId, secret, password);
  } catch (error) {
    if (error instanceof AppwriteException) {
      return {
        ok: false,
        message: error.message,
      };
    }
  }
};

export default resetPasswordAction;
