/**
 * Custom modules
 */
import { account } from "@/lib/appwrite";
import { AppwriteException } from "appwrite";

/**
 * Node modules
 */
import { redirect, type ActionFunction } from "react-router";

const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  try {
    await account.createEmailPasswordSession({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    return redirect("/");
  } catch (error) {
    if (error instanceof AppwriteException)
      return {
        error: error.message,
      };
  }
};

export default loginAction;
