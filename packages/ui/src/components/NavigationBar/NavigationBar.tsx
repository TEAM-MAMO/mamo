import {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";

import clsx from "clsx";
import { navbarStyle } from "./NavigationBar.css";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  left?: ReactNode;
  right?: ReactNode;
}

export const NavigationBar = forwardRef<HTMLElement, Props>(
  ({ className, left, right, children }, ref?) => {
    return (
      <nav className={clsx(navbarStyle, className)} ref={ref}>
        {left && left}
        {children}
        {right && right}
      </nav>
    );
  },
);
