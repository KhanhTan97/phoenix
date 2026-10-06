/**
 * Node modules
 */
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

/**
 * Types
 */
import type { Snackbar } from "@/context/SnackbarContext";

type SnackbarProps = {
  snackbar: Snackbar;
};

export const SnackbarComp = ({ snackbar }: SnackbarProps) => {
  const snackbarVariant: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.05, 0.7, 0.1, 1],
      },
    },
  };

  const snackbarChildVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {snackbar.open && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={snackbarVariant}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          }}
          className={`snackbar ${snackbar.type}`}
        >
          <motion.span
            variants={snackbarChildVariant}
            transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
          >
            {snackbar.message}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
