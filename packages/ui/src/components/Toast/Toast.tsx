import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import * as S from "./Toast.css";

import { Typography } from "../Typography/Typography";
import { sprinkles } from "../../styles";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ message, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(S.toast, className)} {...props}>
        <Typography.Caption className={sprinkles({ color: "white" })}>
          {message}
        </Typography.Caption>
      </div>
    );
  },
);
