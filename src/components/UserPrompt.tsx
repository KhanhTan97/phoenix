/**
 * Node modules
 */
import { useEffect, useRef, useState } from "react";

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
import { useToggle } from "@/hooks/useToggle";
import { IconButton } from "./Button";

const UserPrompt = ({ text }: UserPromptProps) => {
  const { user } = useLoaderData();

  const [isExpanded, toggleExpand] = useToggle() as [boolean, () => void];

  const textBoxRef = useRef<HTMLParagraphElement>(null);

  const [hasMoreContent, setMoreContent] = useState(false);

  useEffect(() => {
    const textBox = textBoxRef.current;
    setMoreContent(
      textBox !== null && textBox.scrollHeight > textBox.clientHeight,
    );
  }, [textBoxRef]);

  return (
    <div className="grid grid-cols-1 items-center gap-1 py-4 md:grid-cols-[max-content_minmax(0,1fr)_max-content] md:gap-5">
      <Avatar name={user?.name} />

      <p
        className={`text-body-large pt-1 whitespace-pre-wrap ${!isExpanded ? "line-clamp-4" : ""}`}
        ref={textBoxRef}
      >
        {text}
      </p>

      {hasMoreContent && (
        <IconButton
          icon={isExpanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          onClick={toggleExpand}
          title={isExpanded ? "Collapse text" : "Expand text"}
        />
      )}
    </div>
  );
};

export default UserPrompt;
