import { HtmlHTMLAttributes, PropsWithChildren, forwardRef } from "react";

import clsx from "clsx";
import { sprinkles } from "../../styles";

export interface AccordionProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }: AccordionProps, ref?) => {
    return (
      <div
        ref={ref}
        {...props}
        className={clsx(
          sprinkles({ display: "flex", flexDirection: "column", gapY: "20px" }),
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
