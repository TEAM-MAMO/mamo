import React from "react";
import clsx from "clsx";
import { divider } from "./Divider.css";

export interface DividerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  bolder?: boolean;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ bolder = false, className, ...props }: DividerProps, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(divider({ bolder }), className)}
        {...props}
      />
    );
  },
);
