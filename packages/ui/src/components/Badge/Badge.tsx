import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import * as S from "./Badge.css";

import { Typography } from "../Typography/Typography";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant: "primary" | "secondary" | "default";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(S.badge({ variant }), className)}
        {...props}
      >
        <Typography.Foot>{children}</Typography.Foot>
      </div>
    );
  },
);
