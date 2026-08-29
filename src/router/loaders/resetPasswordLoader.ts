/**
 * Custom modules
 */
import { account } from "@/lib/appwrite";

/**
 * Node modules
 */
import { AppwriteException } from "appwrite";
import { redirect, type LoaderFunction } from "react-router";

const resetPasswordLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  try {
    await account.get();
  } catch (error) {
    if (error instanceof AppwriteException)
      return {
        error: error.message,
      };
  }

  if (!url.searchParams.get("userId") && !url.searchParams.get("secret"))
    return redirect("/reset-link");

  return redirect("/");
};

export default resetPasswordLoader;
