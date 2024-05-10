import {
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import * as S from "./Tooltip.css";

import { CloseOutlined, PollygonDown, PollygonUp } from "../../assets/icons";

import { Typography } from "../Typography/Typography";
import { useTooltipPosition } from "./hooks/useTooltipPostion";
import { useViewportSize } from "./hooks/useViewportSize";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  placement?: "left" | "center" | "right";
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  close?: boolean;
  left?: ReactNode;
  content: ReactNode;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      placement = "center",
      close,
      content,
      left,
      ...props
    },
    ref?,
  ) => {
    const { viewportHeight } = useViewportSize();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    const { isInViewport } = useTooltipPosition(
      isVisible,
      placement,
      viewportHeight,
      wrapperRef,
      tooltipRef,
      arrowRef,
    );
    const tooltipId = useId();

    return (
      <div
        {...props}
        ref={wrapperRef || ref}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        aria-describedby={tooltipId}
        className={clsx(S.wrapper, className)}
      >
        {children}

        <div ref={arrowRef} className={S.tooltipArrow({ variant, isVisible })}>
          {isInViewport ? <PollygonDown /> : <PollygonUp />}
        </div>
        <div
          ref={tooltipRef}
          className={S.tooltip({ variant, size, isVisible })}
          id={tooltipId}
          role="tooltip"
          aria-hidden={isVisible}
          onClick={(e) => e.stopPropagation()}
        >
          {left && left}
          <Typography.Caption level={1}>{content}</Typography.Caption>
          {close && (
            <button
              aria-label="close"
              className={S.closeButton({ variant })}
              onClick={() => setIsVisible(false)}
            >
              <CloseOutlined />
            </button>
          )}
        </div>
      </div>
    );
  },
);
