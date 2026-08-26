/**
 * Node modules
 */
import { SnackbarComp } from "@/components/SnackbarComp";
import {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Types
 */
type SnackbarProvider = {
  children: ReactNode;
};

export type Snackbar = {
  open: boolean;
  message: string;
  type: string;
};

type SnackbarContextValue = {
  snackbar: Snackbar;
  showSnackbar: (options: {
    message: string;
    type?: string;
    timeout?: number;
  }) => void;
  hideSnackbar: () => void;
};

const initialCtxValue: SnackbarContextValue = {
  snackbar: {
    open: false,
    message: "",
    type: "info",
  },
  showSnackbar: () => {},
  hideSnackbar: () => {},
};

export const SnackbarContext =
  createContext<SnackbarContextValue>(initialCtxValue);

const SnackbarProvider = ({ children }: SnackbarProvider) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "info",
  });

  const timeoutRef = useRef<number | undefined>(undefined);

  const showSnackbar = useCallback(
    ({
      message,
      type = "info",
      timeout = 5000,
    }: {
      message: string;
      type?: string;
      timeout?: number;
    }) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      setSnackbar({ open: true, message, type });

      timeoutRef.current = setTimeout(() => {
        setSnackbar((prev) => {
          return { ...prev, open: false };
        });
      }, timeout);
    },
    [],
  );

  const hideSnackbar = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setSnackbar({ open: false, message: "", type: "info" });
  }, []);

  const contextValue = useMemo(() => {
    return { snackbar, showSnackbar, hideSnackbar };
  }, [snackbar, showSnackbar, hideSnackbar]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}

      <SnackbarComp snackbar={snackbar} />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
