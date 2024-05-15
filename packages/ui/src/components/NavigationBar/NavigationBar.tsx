import {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";

import clsx from "clsx";
import * as S from "./NavigationBar.css";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  left?: ReactNode;
  right?: ReactNode;
}

export const NavigationBar = forwardRef<HTMLElement, Props>(
  ({ className, left, right, children, ...props }, ref?) => {
    return (
      <nav className={clsx(S.navbar, className)} ref={ref} {...props}>
        {left && left}
        {children}
        {right && right}
      </nav>
    );
  },
);
