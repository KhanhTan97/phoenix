import { account } from "@/lib/appwrite";
import { AppwriteException } from "appwrite";

const logout = async (navigate: (to: string) => void) => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.log(`Error deleting user session: ${error.message}`);
      return {
        ok: false,
        message: error.message,
      };
    }
  }

  return navigate("/login");
};

export default logout;
