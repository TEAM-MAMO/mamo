"use client";

import { HTMLAttributes, PropsWithChildren, forwardRef, useRef } from "react";

import clsx from "clsx";
import { Typography } from "../Typography/Typography";
import { sprinkles } from "../../styles";

export interface AccordionPanelProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title?: string;
}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ children, title, ...props }: AccordionPanelProps, ref?) => {
    const panelRef = useRef<HTMLDivElement>(null);

    return (
      <div ref={panelRef}>
        {title && (
          <Typography.Caption
            className={clsx(sprinkles({ marginBottom: "16px" }))}
          >
            {title}
          </Typography.Caption>
        )}
        <Typography.Caption level={4} ref={ref} {...props}>
          {children}
        </Typography.Caption>
      </div>
    );
  },
);
