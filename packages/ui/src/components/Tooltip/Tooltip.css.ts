import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const wrapper = style({
  width: "fit-content",
  position: "relative",
});

export const tooltip = recipe({
  base: [
    sprinkles({
      display: "flex",

      alignItems: "center",
      gapX: "4px",
      position: "absolute",
      color: "white",
      borderRadius: "small",
    }),
    {
      zIndex: 9999,
      transitionProperty: "opacity",
      transitionDuration: "200ms",
      transitionDelay: "100ms",
      transitionTimingFunction: "cubic-bezier(0.37, 0, 0.63, 1)",
    },
  ],
  variants: {
    isVisible: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
      },
    },
    variant: {
      primary: sprinkles({ background: "secondary400" }),
      secondary: sprinkles({ background: "black" }),
    },
    size: {
      sm: {
        padding: "13px 11px 13px 11px",
        height: "30px",
      },
      md: {
        padding: "8px 13px 8px 13px",
        height: "36px",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const tooltipArrow = recipe({
  base: [
    sprinkles({
      position: "absolute",
    }),
    {
      zIndex: 9999,
      transitionProperty: "opacity",
      transitionDuration: "200ms",
      transitionDelay: "100ms",
      transitionTimingFunction: "cubic-bezier(0.37, 0, 0.63, 1)",
    },
  ],
  variants: {
    isVisible: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
      },
    },
    variant: {
      primary: sprinkles({ color: "secondary400" }),
      secondary: sprinkles({ color: "black" }),
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export const closeButton = recipe({
  base: [],
  variants: {
    variant: {
      primary: sprinkles({ color: "black" }),
      secondary: sprinkles({ color: "white" }),
    },
  },
});
