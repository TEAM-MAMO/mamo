import React from "react";
import clsx from "clsx";
import { buttonStyle } from "./buttonIcon.css";

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  size?: "small" | "default" | "large";
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, size = "default", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonStyle({ size }), className)}
        {...props}
      >
        <span>{icon}</span>
      </button>
    );
  },
);
