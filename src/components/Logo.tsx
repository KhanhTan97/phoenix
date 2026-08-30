/**
 * Assets
 */
import { logoDark, logoLight } from "@/assets/assets";

/**
 * Node modules
 */
import { Link } from "react-router";

const Logo = ({ classes = "" }: { classes: string }) => {
  return (
    <Link to="/" className={`min-w-max max-w-max h-6 ${classes}`}>
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
  );
};

export default Logo;
