/**
 * Node modules
 */
import { Link, useNavigation } from "react-router";

/**
 * Assets
 */
import { logoDark, logoLight } from "@/assets/assets";

/**
 * Components
 */
import { IconButton } from "@/components/Button";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { LinearProgress } from "./Progress";
import { AnimatePresence } from "framer-motion";

const TopAppBar = () => {
  const navigation = useNavigation();

  const isNormalLoad = navigation.state === "loading" && !navigation.formData;

  return (
    <header className="relative flex justify-between items-center h-16 px-4">
      <div className="flex items-center justify-center gap-1">
        <IconButton icon="menu" title="Menu" classes="lg:hidden" />

        <Link to="/" className="min-w-max max-w-max h-6 lg:hidden">
          <img
            src={logoLight}
            width={133}
            height={24}
            alt="phoenix logo"
            className="dark:hidden"
          />

          <img
            src={logoDark}
            width={133}
            height={24}
            alt="phoenix logo"
            className="hidden dark:block"
          />
        </Link>
      </div>
      <div className="menu-wrapper">
        <IconButton>
          <Avatar name="Freikishou" />
        </IconButton>

        <Menu>
          <MenuItem labelText="Log out" />
        </Menu>
      </div>

      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

export default TopAppBar;
