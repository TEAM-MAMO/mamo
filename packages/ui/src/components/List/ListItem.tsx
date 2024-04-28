import {
  LiHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";

import clsx from "clsx";
import { sprinkles } from "../../styles";

interface ListItemProps
  extends PropsWithChildren<Omit<LiHTMLAttributes<HTMLLIElement>, "prefix">> {
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ prefix, suffix, children, className, ...props }, ref?) => {
    return (
      <li
        className={clsx(sprinkles({ display: "flex", gapX: "1x" }), className)}
        ref={ref}
        {...props}
      >
        {prefix}
        {children}
        {suffix}
      </li>
    );
  },
);
