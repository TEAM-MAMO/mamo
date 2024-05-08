import { Children, PropsWithChildren, forwardRef, useRef } from "react";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import * as S from "./AccordionContent.css";
import { useAccordionContext } from "./AccordionContext";
import { useBeforeMatch } from "./hooks/useBeforeMatch";
import { useContentHeight } from "./hooks/useContentHeight";

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
  const { toggle, handleToggle } = useAccordionContext();
  const contentRef = useRef<HTMLDivElement>(null);
  useBeforeMatch<HTMLDivElement>(contentRef, handleToggle);
  const contentHeight = useContentHeight<HTMLDivElement>(contentRef, toggle);

  return (
    <div
      ref={contentRef || ref}
      style={assignInlineVars({
        [S.contentHeightVar]: `${contentHeight + 1}px`,
      })}
      className={clsx(S.content, className)}
      // eslint-disable-next-line react/no-unknown-property
      HIDDEN={toggle ? undefined : "until-found"}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <div key={index} className={S.contentChild}>
          {child}
        </div>
      ))}
    </div>
  );
});
