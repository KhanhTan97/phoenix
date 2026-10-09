/**
 * Node modules
 */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { hopscotch, coy } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * Components
 */
import { IconButton } from "./Button";

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

type CodeProps = {
  children?: ReactNode;
  className?: string;
};

const AiResponse = ({ aiResponse, children }: AiResponseProps) => {
  const code = ({ children, className, ...rest }: CodeProps) => {
    const match = className?.match(/language-(\w+)/);

    return match ? (
      <>
        <div className="code-block">
          <div className="p-4 pb-0 font-sans">{match[0]}</div>

          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            language={match[1]}
            style={hopscotch}
            customStyle={{
              marginBlock: "0",
              padding: "2px",
            }}
            codeTagProps={{
              style: {
                padding: "14px",
                fontWeight: "600",
              },
            }}
          >
            {String(children)}
          </SyntaxHighlighter>
        </div>

        <div className="">
          <p>
            Use code
            <a
              className="link ms-2"
              href="https://support.google.com/gemini"
              target="_blank"
            >
              with caution.
            </a>
          </p>

          <IconButton icon="content_copy" size="small" title="Copy code" />
        </div>
      </>
    ) : (
      <code className={className}>{children}</code>
    );
  };

  return (
    <div className="grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content_minmax(0,1fr)] md:gap-5">
      <figure className="w-8 h-8 grid place-items-center leading-7">
        <img src={logoIcon} width={32} height={32} alt="Phoenix logo " />
      </figure>

      {children}

      <div className="markdown-content">
        <Markdown remarkPlugins={[remarkGfm]} components={{ code }}>
          {aiResponse}
        </Markdown>
      </div>
    </div>
  );
};

export default AiResponse;
