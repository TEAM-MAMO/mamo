const margin = 8;

export const calculateTranslateX = (
  wrapperRect: DOMRect,
  tooltipRect: DOMRect,
  position?: "left" | "center" | "right",
) => {
  let translateX;

  switch (position) {
    case "left":
      translateX = wrapperRect.left - tooltipRect.left;
      break;
    case "right":
      translateX = wrapperRect.right - tooltipRect.right;
      break;
    case "center":
      translateX = (wrapperRect.width - tooltipRect.width) / 2;
      break;
    default:
      // Handle the default case if needed
      translateX = (wrapperRect.width - tooltipRect.width) / 2;
      break;
  }

  return translateX;
};

export const calculateArrowX = (
  translateX: number,
  tooltipRect: DOMRect,
  arrowRect: DOMRect,
  position?: "left" | "center" | "right",
) => {
  let arrowX;

  if (position === "center") {
    arrowX = translateX + tooltipRect.width / 2 - arrowRect.width / 2;
  } else if (position === "left") {
    arrowX = translateX + arrowRect.width / 2;
  } else if (position === "right") {
    arrowX =
      translateX + tooltipRect.width - arrowRect.width - arrowRect.width / 4;
  }

  return arrowX;
};

export const calculateTranslateY = (
  wrapperRect: DOMRect,
  tooltipRect: DOMRect,
  viewportHeight: number,
): number => {
  const isFitBelow = wrapperRect.bottom + tooltipRect.height < viewportHeight;
  return isFitBelow
    ? margin
    : -wrapperRect.height - tooltipRect.height - margin;
};
