/**
 * Node modules
 */
import type { ReactNode } from "react";
import { Link } from "react-router";

/**
 * Types
 */
type ButtonProps = {
  classes?: string;
  variant?: string;
  color?: string;
  children?: ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

type IconButtonProps = {
  classes?: string;
  icon?: string;
  size?: string;
  children?: ReactNode;
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
};

/**
 * Common button
 */
const Button = ({
  classes = "",
  variant = "filled",
  color = "primary",
  children,
  type,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`btn ${variant} ${color} ${classes}`}
      {...rest}
    >
      {children}
      <div className="state-layer"></div>
    </button>
  );
};

/**
 * Icon button
 */
const IconButton = ({
  classes = "",
  icon,
  size = "",
  children,
  disabled,
  title,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={`icon-btn ${size} ${classes}`}
      disabled={disabled}
      title={title}
      onClick={onClick}
    >
      {children}

      {!children && (
        <span className="material-symbols-rounded icon">{icon}</span>
      )}

      <div className="state-layer"></div>
    </button>
  );
};

/**
 * Extended fab
 */
const ExtendedFab = ({
  href = "/",
  text,
  classes = "",
}: {
  href?: string;
  text?: string;
  classes?: string;
  disabled?: boolean;
}) => {
  return (
    <Link to={href} className={`extended-fab ${classes}`}>
      <span className="material-symbols-rounded">add</span>

      <span className="truncate">{text}</span>

      <div className="state-layer"></div>
    </Link>
  );
};

export { Button, IconButton, ExtendedFab };
