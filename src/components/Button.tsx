/**
 * Node modules
 */
import type { ReactNode } from "react";

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
}: IconButtonProps) => {
  return (
    <button
      className={`icon-btn ${size} ${classes}`}
      disabled={disabled}
      title={title}
    >
      {children}

      {!children && (
        <span className="material-symbols-rounded icon">{icon}</span>
      )}

      <div className="state-layer"></div>
    </button>
  );
};

export { Button, IconButton };
