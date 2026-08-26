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

/**
 * Common button
 */
export const Button = ({
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
