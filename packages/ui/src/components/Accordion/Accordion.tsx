import { HtmlHTMLAttributes, PropsWithChildren, forwardRef } from "react";

export interface AccordionProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, ...props }: AccordionProps, ref?) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
