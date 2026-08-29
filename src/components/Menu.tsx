import type { ReactNode } from "react";

const Menu = ({
  classes = "",
  children,
}: {
  classes?: string;
  children?: ReactNode;
}) => {
  return <div className={`menu ${classes}`}>{children}</div>;
};

export default Menu;
