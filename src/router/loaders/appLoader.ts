import { account } from "@/lib/appwrite";
import { AppwriteException } from "appwrite";
import { redirect, type LoaderFunction } from "react-router";

const appLoader: LoaderFunction = async () => {
  const appData: { user?: Awaited<ReturnType<typeof account.get>> } = {};

  try {
    appData.user = await account.get();
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.log(`Error getting user session: ${error.message}`);
      return redirect("/login");
    }
  }

  return appData;
};

export default appLoader;
