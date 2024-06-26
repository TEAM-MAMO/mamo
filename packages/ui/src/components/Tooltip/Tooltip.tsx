"use client";

import {
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { useViewportSize } from "@mamo/shared/hooks";
import * as S from "./Tooltip.css";

import { CloseOutlined, PollygonDown, PollygonUp } from "../../assets/icons";

import { Typography } from "../Typography/Typography";
import { useTooltip } from "./hooks/useTooltip";
import { useTooltipPosition } from "./hooks/useTooltipPostion";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  placement?: "left" | "center" | "right";
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  close?: boolean;
  left?: ReactNode;
  content: ReactNode;
  tooltipId: string;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      tooltipId,
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

    const wrapperRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const { isVisible, handleClose } = useTooltip(tooltipId);

    const { isInViewport } = useTooltipPosition(
      isVisible,
      placement,
      viewportHeight,
      wrapperRef,
      tooltipRef,
      arrowRef,
    );
    const tooltipAreaId = useId();

    return (
      <div
        {...props}
        ref={wrapperRef || ref}
        aria-describedby={tooltipAreaId}
        className={clsx(S.wrapper, className)}
      >
        {children}
        <div ref={arrowRef} className={S.tooltipArrow({ variant, isVisible })}>
          {isInViewport ? <PollygonDown /> : <PollygonUp />}
        </div>
        <div
          ref={tooltipRef}
          className={S.tooltip({ variant, size, isVisible })}
          id={tooltipAreaId}
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
              onClick={handleClose}
            >
              <CloseOutlined />
            </button>
          )}
        </div>
      </div>
    );
  },
);
