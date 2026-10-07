/**
 * Node modules
 */
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

/**
 * Components
 */
import PageTitle from "@/components/PageTitle";
import UserPrompt from "@/components/UserPrompt";

/**
 * Types
 */
type ChatProps = {
  user_prompt: string;
  ai_response: string;
  $id: string;
};

const Conversation = () => {
  const { conversation } = useLoaderData();

  return (
    <>
      <PageTitle title={`${conversation.title} | Phoenix`} />

      <motion.div>
        {conversation.chats?.map((chat: ChatProps) => (
          <div key={chat.$id}>
            {/* UserPrompt */}
            <UserPrompt text={chat.user_prompt} />

            <p>{chat.ai_response}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Conversation;
