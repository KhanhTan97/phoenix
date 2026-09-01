/**
 * Node modules
 */
import { useLoaderData, useNavigate, useNavigation } from "react-router";
import { AnimatePresence } from "framer-motion";

/**
 * Custom hooks
 */
import { useToggle } from "@/hooks/useToggle";

/**
 * Assets
 */

/**
 * Components
 */
import { IconButton } from "@/components/Button";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { LinearProgress } from "./Progress";
import Logo from "./Logo";

/**
 * Utils
 */
import logout from "@/utils/logout";

const TopAppBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const navigation = useNavigation();

  const navigate = useNavigate();

  const { user } = useLoaderData();
  console.log(user);

  const [showMenu, setShowMenu] = useToggle();

  const isNormalLoad = navigation.state === "loading" && !navigation.formData;

  const handleLogout = () => {
    if (typeof navigate === "function") {
      return logout(navigate);
    }
  };

  const handleToggleMenu = () => {
    if (typeof setShowMenu === "function") {
      setShowMenu();
    }
  };

  return (
    <header className="relative flex justify-between items-center h-16 px-4">
      <div className="flex items-center justify-center gap-1">
        <IconButton
          icon="menu"
          title="Menu"
          classes="lg:hidden"
          onClick={toggleSidebar}
        />

        <Logo classes="lg:hidden" />
      </div>
      <div className="menu-wrapper">
        <IconButton onClick={handleToggleMenu}>
          <Avatar name={user.name} />
        </IconButton>

        <Menu classes={showMenu ? "active" : ""}>
          <MenuItem labelText="Log out" onClick={handleLogout} />
        </Menu>
      </div>

      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

export default TopAppBar;
