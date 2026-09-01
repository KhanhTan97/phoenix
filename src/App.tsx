/**
 * Node modules
 */
import { motion } from "framer-motion";

/**
 * Components
 */
import PageTitle from "@/components/PageTitle";
import TopAppBar from "@/components/TopAppBar";
import Sidebar from "./components/Sidebar";

/**
 * Hooks
 */
import { useToggle } from "./hooks/useToggle";
import Greetings from "./pages/Greetings";
import PromptField from "./components/PromptField";

const App = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  const sidebarOpen =
    typeof isSidebarOpen === "boolean" ? isSidebarOpen : false;
  const handleSidebarToggle =
    typeof toggleSidebar === "function" ? toggleSidebar : () => undefined;

  const handleToggleSidebar = () => {
    if (typeof toggleSidebar === "function") {
      toggleSidebar();
    }
  };

  return (
    <>
      <PageTitle title="Phoenix - chat to supercharge your ideas" />

      <div className="lg:grid lg:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={sidebarOpen}
          toggleSidebar={handleSidebarToggle}
        />

        <div className="h-dvh grid grid-rows-[max-content_minmax(0,1fr)_max-content]">
          {/* Top app bar */}
          <TopAppBar toggleSidebar={handleToggleSidebar} />

          {/* Main content */}
          <div className="px-5 pb-5 flex flex-col overflow-y-auto">
            <Greetings />
          </div>

          {/* Prompt field */}
          <div className="bg-background">
            <div className="max-w-217.5 px-5 w-full mx-auto">
              <PromptField />

              <motion.p
                initial={{ opacity: 0, translateY: "-4px" }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.8, ease: "easeOut" }}
                className="text-body-small text-center text-on-surface-variant"
              >
                Phoenix may display inaccurate info, including about people, so
                double-check its response.
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="inline underline ms-1"
                >
                  Your privacy & Gemini Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
