/**
 * Node modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * Router
 */
import { RouterProvider } from "react-router/dom";
import router from "./router/routes.tsx";

/**
 * Components
 */
import SnackbarProvider from "./context/SnackbarContext.tsx";

/**
 * Css global
 */
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>,
);
