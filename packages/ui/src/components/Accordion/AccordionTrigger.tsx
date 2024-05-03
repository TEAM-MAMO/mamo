import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";
import clsx from "clsx";
import * as S from "./AccordionTrigger.css";

import { ArrowDownOutlined, ArrowUpOutlined } from "../../assets/icons";

import { Typography } from "../Typography/Typography";
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
  const { open, setOpen } = useAccordionContext();
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

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
          gapY: "7x",
        })}
      >
        {top && top}
        <Typography.Text level={2}>{children}</Typography.Text>
      </div>
      <div className={S.arrow}>
        {open ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      </div>
    </div>
  );
});
