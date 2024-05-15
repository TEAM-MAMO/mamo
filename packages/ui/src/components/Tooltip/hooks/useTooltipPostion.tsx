import { useLayoutEffect, useState } from "react";
import {
  calculateArrowX,
  calculateTranslateX,
  calculateTranslateY,
} from "../utils/calculatePosition";

export const useTooltipPosition = (
  isVisible: boolean,
  placement: "left" | "center" | "right",
  viewportHeight: number,
  wrapperRef: React.MutableRefObject<HTMLDivElement | null>,
  tooltipRef: React.MutableRefObject<HTMLDivElement | null>,
  arrowRef: React.MutableRefObject<HTMLDivElement | null>,
) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !tooltipRef.current || !arrowRef.current) {
      return;
    }

    if (!isVisible) {
      tooltipRef.current.style.transform = "";
      arrowRef.current.style.transform = "";
      return;
    }

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const arrowRect = arrowRef.current.getBoundingClientRect();

    const translateX = calculateTranslateX(wrapperRect, tooltipRect, placement);
    const translateY = calculateTranslateY(
      wrapperRect,
      tooltipRect,
      viewportHeight,
    );

    const arrowX = calculateArrowX(
      translateX,
      tooltipRect,
      arrowRect,
      placement,
    );

    const isArrowDown =
      wrapperRect.bottom + tooltipRect.height >= viewportHeight;
    setIsInViewport(isArrowDown);

    const arrowY = isArrowDown
      ? translateY + tooltipRect.height
      : translateY - 8;

    tooltipRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    arrowRef.current.style.transform = `translate(${arrowX}px, ${arrowY}px)`;
  }, [arrowRef, isVisible, placement, tooltipRef, viewportHeight, wrapperRef]);

  return { isInViewport };
};
