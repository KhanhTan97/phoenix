/**
 * Node modules
 */
import { motion } from "framer-motion";

/**
 * Components
 */
import { IconButton } from "./Button";

const PromptField = () => {
  return (
    <motion.div className="prompt-field-container">
      <motion.div
        className="prompt-field"
        contentEditable={true}
        role="textbox"
        aria-multiline={true}
        aria-label="Enter a prompt here"
        data-placeholder="Enter a prompt here"
      />

      <IconButton title="Submit" icon="send" size="large" classes="ms-auto" />

      <div className="state-layer"></div>
    </motion.div>
  );
};

export default PromptField;
