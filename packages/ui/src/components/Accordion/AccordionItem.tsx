import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useMemo,
  useState,
} from "react";
import * as S from "./AccordionItem.css";

import { AccoridonContext } from "./AccordionContext";
import { Divider } from "../Divider/Divider";

export interface AccordionItemProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, ...props }: AccordionItemProps, ref?) => {
    const [open, setOpen] = useState(false);

    const value = useMemo(() => ({ open, setOpen }), [open]);
    return (
      <AccoridonContext.Provider value={value}>
        <div ref={ref} className={S.item({ open })} {...props}>
          {children}
        </div>
        <Divider />
      </AccoridonContext.Provider>
    );
  },
);
