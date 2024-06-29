import { ArrowDownOutlined, ArrowUpOutlined } from "@repo/ui/icons";
import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";

import clsx from "clsx";
import { Typography } from "../Typography/Typography";
import * as S from "./AccordionTrigger.css";
import { sprinkles } from "../../styles";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionTriggerProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {
  top?: ReactNode;
}

export const AccordionTrigger = forwardRef<
  HTMLDivElement,
  AccordionTriggerProps
>(({ children, className, top, ...props }: AccordionTriggerProps, ref?) => {
  const { toggle, handleToggle } = useAccordionContext();

  return (
    <div
      ref={ref}
      className={clsx(S.trigger, className)}
      {...props}
      onClick={handleToggle}
      role="button"
    >
      <div
        className={sprinkles({
          display: "flex",
          flexDirection: "column",
          gapY: "20px",
        })}
      >
        {top && top}
        <Typography.Text level={2}>{children}</Typography.Text>
      </div>
      <div className={S.arrow}>
        {toggle ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      </div>
    </div>
  );
});
