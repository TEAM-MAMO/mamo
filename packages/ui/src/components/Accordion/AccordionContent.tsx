import {
  Children,
  Fragment,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { Divider } from "../Divider/Divider";
import * as S from "./AccordionContent.css";
import { useAccordionContext } from "./AccordionContext";

interface HTMLDivElementWithHidden
  extends React.HTMLAttributes<HTMLDivElement> {
  HIDDEN?: string;
}

export interface AccordionContentProps
  extends PropsWithChildren<HTMLDivElementWithHidden> {}

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }: AccordionContentProps, ref?) => {
  const { open, setOpen } = useAccordionContext();

  const contentRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState(0);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  useEffect(() => {
    const currentElement = contentRef.current;
    if (currentElement) {
      contentRef.current.addEventListener("beforematch", handleToggle);
    }
    return () => {
      if (currentElement)
        currentElement.removeEventListener("beforematch", handleToggle);
    };
  }, [handleToggle]);

  useEffect(() => {
    const currentElement = contentRef.current;
    if (currentElement) {
      requestAnimationFrame(() => {
        if (open) {
          setContentHeight(currentElement.scrollHeight);
        } else {
          setContentHeight(0);
        }
      });
    }
  }, [open]);

  return (
    <div
      ref={contentRef || ref}
      style={assignInlineVars({
        [S.contentHeightVar]: `${contentHeight + 24}px`,
      })}
      className={clsx(S.content, className)}
      // eslint-disable-next-line react/no-unknown-property
      HIDDEN={open ? undefined : "until-found"}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <Fragment key={index}>
          {child}
          {index < Children.count(children) - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
});
