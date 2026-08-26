/**
 * Node modules
 */
import { createBrowserRouter } from "react-router";

/**
 * Components
 */
import App from "@/App";

/**
 * Pages
 */
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import ResetLink from "@/pages/ResetLink";

/**
 * Actions
 */
import registerAction from "@/router/actions/registerAction";
import loginAction from "@/router/actions/loginAction";

/**
 * Loaders
 */
import registerLoader from "@/router/loaders/registerLoader";
import loginLoader from "@/router/loaders/loginLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
  },
  {
    path: "/reset-link",
    element: <ResetLink />,
  },
]);

export default router;
