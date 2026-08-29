import { account } from "@/lib/appwrite";
import { AppwriteException } from "appwrite";
import type { ActionFunction } from "react-router";

const resetLinkAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  if (typeof email !== "string") return null;

  try {
    await account.createRecovery(email, `${location.origin}/reset-password`);

    return {
      ok: true,
      message:
        "You will receive a password reset link shortly. Please check your email and follow the instructions to reset your password.",
    };
  } catch (error) {
    if (error instanceof AppwriteException) {

      return {
        ok: false,
        message: error.message,
      };
    }
  }
};

export default resetLinkAction;
