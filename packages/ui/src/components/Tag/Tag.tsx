import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import * as S from "./Tag.css";

import { Typography } from "../Typography/Typography";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  variant: "primary" | "secondary" | "default";
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(S.tag({ variant }), className)} {...props}>
        <Typography.Foot>{children}</Typography.Foot>
      </div>
    );
  },
);
