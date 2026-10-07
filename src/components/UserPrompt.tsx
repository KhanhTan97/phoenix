/**
 * Types
 */
type UserPromptProps = {
  text: string;
};

import { useLoaderData } from "react-router";
/**
 * Components
 */
import Avatar from "./Avatar";

const UserPrompt = ({ text }: UserPromptProps) => {
  const { user } = useLoaderData();

  return (
    <div className="grid grid-cols-1 items-center gap-1 py-4 md:grid-cols-[max-content_minmax(0,1fr)_max-content] md:gap-5">
      <Avatar name={user?.name} />

      <p className="text-body-large pt-1 whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default UserPrompt;
