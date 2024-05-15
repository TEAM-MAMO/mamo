import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useMemo,
} from "react";
import * as S from "./AccordionItem.css";

import { AccoridonContext } from "./AccordionContext";
import { useToggle } from "./hooks/useToggle";

export interface AccordionItemProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, ...props }: AccordionItemProps, ref?) => {
    const { toggle, setToggle, handleToggle } = useToggle();

    const value = useMemo(
      () => ({ toggle, setToggle, handleToggle }),
      [handleToggle, setToggle, toggle],
    );
    return (
      <AccoridonContext.Provider value={value}>
        <div ref={ref} className={S.item} {...props}>
          {children}
        </div>
      </AccoridonContext.Provider>
    );
  },
);
