/**
 * Node modules
 */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Assets
 */
import { logoIcon } from "@/assets/assets";

/**
 * Types
 */
import type { ReactNode } from "react";

/**
 * Types
 */
type AiResponseProps = {
  aiResponse?: string;
  children?: ReactNode;
};

const AiResponse = ({ aiResponse, children }: AiResponseProps) => {
  return (
    <div className="grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content_minmax(0,1fr)] md:gap-5">
      <figure className="w-8 h-8 grid place-items-center leading-7">
        <img src={logoIcon} width={32} height={32} alt="Phoenix logo " />
      </figure>

      {children}

      <div className="markdown-content">
        <Markdown remarkPlugins={[remarkGfm]}>{aiResponse}</Markdown>
      </div>
    </div>
  );
};

export default AiResponse;
