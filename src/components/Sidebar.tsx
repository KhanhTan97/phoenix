/**
 * Node modules
 */
import { motion } from "framer-motion";

/**
 * Components
 */
import { NavLink } from "react-router";
import { ExtendedFab, IconButton } from "./Button";
import Logo from "./Logo";

/**
 * Types
 */
type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`sidebar ${isSidebarOpen ? "active" : ""}`}
      >
        <div className="sidebar-inner">
          <div className="h-16 grid items-center px-4 mb-4">
            <Logo />
          </div>
          <ExtendedFab text="New chat" classes="" onClick={toggleSidebar} />
          <div className="overflow-y-auto -me-2 pe-1">
            <p className="text-title-small h-9 grid items-center px-4">
              Recent
            </p>
            <nav>
              <div className="relative group">
                <NavLink to="" className="nav-link" onClick={toggleSidebar}>
                  <span className="material-symbols-rounded icon-small">
                    chat_bubble
                  </span>
                  <span className="truncate">New conversation</span>
                  <div className="state-layer"></div>
                </NavLink>
                <IconButton
                  icon="delete"
                  size="small"
                  classes="absolute top-1/2 right-1.5 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100"
                  title=""
                />
              </div>
            </nav>
          </div>
          <div className="mt-4 h-14 px-4 grid items-center text-label-large text-on-surface-variant border-t border-surface-container-high truncate">
            &copy; 2026 codewithsadee
          </div>
        </div>
      </motion.div>
      <div
        className={`overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
