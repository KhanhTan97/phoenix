/**
 * Node modules
 */
import { account } from "@/lib/appwrite";
import { generateID } from "@/utils/generateID";
import { AppwriteException } from "appwrite";

/**
 * Types
 */
import { redirect, type ActionFunction } from "react-router";

/**
 * Handler user registration.
 */
const registerAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  try {
    await account.create({
      userId: generateID(),
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
    });
  } catch (error) {
    if (error instanceof AppwriteException)
      return {
        error: error.message,
      };
  }

  try {
    await account.createEmailPasswordSession({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
  } catch (error) {
    console.log(`Error creating email session: ${error}`);
    return redirect("/login");
  }

  return redirect("/");
};

export default registerAction;
