import { HTMLAttributes, forwardRef } from "react";

import clsx from "clsx";
import * as S from "./Progress.css";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  primary?: boolean;
  percent: number;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ primary = false, percent, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(S.track({ primary }), className)}
        {...props}
      >
        <div
          className={S.thumb({ primary })}
          style={{ width: `${percent}%` }}
        />
      </div>
    );
  },
);
