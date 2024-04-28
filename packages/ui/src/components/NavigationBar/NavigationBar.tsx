import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import { navbarStyle } from "./NavigationBar.css";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  left?: ReactNode;
  right?: ReactNode;
  variant?: "main" | "white";
}

export const NavigationBar = ({
  left,
  right,
  variant = "white",
  children,
}: Props) => {
  return (
    <nav className={navbarStyle({ variant })}>
      {left && left}
      {children}
      {right && right}
    </nav>
  );
};
