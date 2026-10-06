/**
 * Node modules
 */
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

/**
 * Components
 */
import { IconButton } from "./Button";

/**
 * Types
 */
import { type Variants } from "framer-motion";
import { useNavigation, useSubmit } from "react-router";

const PromptField = () => {
  const inputField = useRef<HTMLDivElement>(null);
  const inputFieldContainer = useRef<HTMLDivElement>(null);

  const [placeholderShown, setPlaceholderShown] = useState(true);
  const [isMultiline, setMultiline] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigation = useNavigation();
  const submit = useSubmit();

  const handleInputChange = useCallback(() => {
    if (inputField.current?.innerText === "\n")
      inputField.current.innerText = "";

    setPlaceholderShown(!inputField.current?.innerText);
    setMultiline((inputFieldContainer.current?.clientHeight ?? 0) > 64);
    setInputValue((inputField.current?.innerText ?? "").trim());
  }, []);

  const moveCursorToEnd = useCallback(() => {
    const editableElem = inputField.current;
    if (!editableElem) return;

    const range = document.createRange();
    const selection = window.getSelection();

    // Set the range to the last child of the editable element
    range.selectNodeContents(editableElem);
    range.collapse(false);

    selection?.removeAllRanges();
    selection?.addRange(range);
  }, []);

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (inputField.current) {
        inputField.current.innerText += e.clipboardData.getData("text");
      }

      handleInputChange();
      moveCursorToEnd();
    },
    [handleInputChange, moveCursorToEnd],
  );

  const handleSubmit = useCallback(() => {
    if (!inputValue || navigation.state === "submitting") return;

    submit(
      {
        user_prompt: inputValue,
        request_type: "user_prompt",
      },
      {
        method: "POST",
        encType: "application/x-www-form-urlencoded",
        action: "/",
      },
    );

    const editableElem = inputField.current;
    if (!editableElem) return;

    editableElem.innerHTML = "";

    handleInputChange();
  }, [handleInputChange, navigation.state, inputValue, submit]);

  const promptFieldVariant: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.4,
        delay: 0.4,
        ease: [0.05, 0.7, 0.1, 1],
      },
    },
  };

  const promptFieldChildrenVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={`prompt-field-container ${isMultiline ? "rounded-large" : ""}`}
      variants={promptFieldVariant}
      initial="hidden"
      animate="visible"
      ref={inputFieldContainer}
    >
      <motion.div
        className={`prompt-field ${placeholderShown ? "" : "after:hidden"}`}
        contentEditable={true}
        role="textbox"
        aria-multiline={true}
        aria-label="Enter a prompt here"
        data-placeholder="Enter a prompt here"
        variants={promptFieldChildrenVariant}
        ref={inputField}
        onInput={handleInputChange}
        onPaste={handlePaste}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />

      <IconButton
        title="Submit"
        icon="send"
        size="large"
        classes="ms-auto"
        variants={promptFieldChildrenVariant}
        onClick={handleSubmit}
      />

      <div className="state-layer"></div>
    </motion.div>
  );
};

export default PromptField;
