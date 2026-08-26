/**
 * Context
 */
import { SnackbarContext } from "@/context/SnackbarContext";

/**
 * Node modules
 */
import { useContext } from "react";

export const useSnackbar = () => useContext(SnackbarContext);
