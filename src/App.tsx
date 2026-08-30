/**
 * Components
 */
import PageTitle from "@/components/PageTitle";
import TopAppBar from "@/components/TopAppBar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <PageTitle title="Phoenix - chat to supercharge your ideas" />

      <div className="">
        {/* Sidebar */}
        <Sidebar />

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
