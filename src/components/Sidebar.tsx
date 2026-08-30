/**
 * Components
 */
import { NavLink } from "react-router";
import { ExtendedFab, IconButton } from "./Button";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar active">
        <div className="sidebar-inner">
          <div className="h-16 grid items-center px-4 mb-4">
            <Logo />
          </div>
          <ExtendedFab text="New chat" />
          <div className="">
            <p className="">Recent</p>
            <nav>
              <div className="">
                <NavLink to="" className="nav-link">
                  <span className="material-symbols-rounded icon-small">
                    chat_bubble
                  </span>
                  <span className="truncate">New conversation</span>
                  <div className="state-layer"></div>
                </NavLink>
                <IconButton
                  icon="delete"
                  size="small"
                  classes=""
                  title="Delete"
                />
              </div>
            </nav>
          </div>
          <div className="">&copy; 2026 codewithsadee</div>
        </div>
      </div>
      <div className={`overlay active`}></div>
    </>
  );
};

export default Sidebar;
