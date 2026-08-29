/**
 * Custom modules
 */
import { account } from "@/lib/appwrite";

/**
 * Node modules
 */
import { AppwriteException } from "appwrite";
import { redirect, type LoaderFunction } from "react-router";

const resetLinkLoader: LoaderFunction = async () => {
  try {
    await account.get();
  } catch (error) {
    if (error instanceof AppwriteException)
      return {
        error: error.message,
      };
  }

  return redirect("/");
};

export default resetLinkLoader;
