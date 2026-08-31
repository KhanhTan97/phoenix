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

const App = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  const sidebarOpen =
    typeof isSidebarOpen === "boolean" ? isSidebarOpen : false;
  const handleSidebarToggle =
    typeof toggleSidebar === "function" ? toggleSidebar : () => undefined;

  return (
    <>
      <PageTitle title="Phoenix - chat to supercharge your ideas" />

      <div className="">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={sidebarOpen}
          toggleSidebar={handleSidebarToggle}
        />

        <div className="">
          {/* Top app bar */}
          <TopAppBar />

          {/* Main content */}
          <div className="">
            <div className=""></div>
          </div>

          {/* Prompt field */}
          <div className="">
            <p className="">
              Phoenix may display inaccurate info, including about people, so
              double-check its response.
              <a href="https://policies.google.com/privacy">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
