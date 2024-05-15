import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import * as S from "./buttonGroup.css";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "horizontal" | "vertical";
  gap?: "xsmall" | "small" | "default" | "large";
}

export const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<ButtonGroupProps>
>(
  (
    { layout = "horizontal", gap = "default", className, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(S.group({ layout, gap }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
