import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";
import { navbarStyle } from "./NavigationBar.css";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  left?: ReactNode;
  right?: ReactNode;
  variant?: "primary" | "secondary";
}

export const NavigationBar = ({
  className,
  left,
  right,
  variant = "primary",
  children,
}: Props) => {
  return (
    <nav className={clsx(navbarStyle({ variant }), className)}>
      {left && left}
      {children}
      {right && right}
    </nav>
  );
};
