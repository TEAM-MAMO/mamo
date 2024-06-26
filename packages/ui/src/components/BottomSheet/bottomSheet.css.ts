import { keyframes, style } from "@vanilla-extract/css";

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkle.css";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 0.6 },
});

const fadeOut = keyframes({
  "0%": { opacity: 0.6 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  "0%": { transform: "translateY(100%)" },
  "100%": { transform: "translateY(0)" },
});

const slideOut = keyframes({
  "0%": { transform: "translateY(0)" },
  "100%": { transform: "translateY(100%)" },
});

/**
 * BottomSheet Content
 */
export const content = style([
  sprinkles({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  }),
  {},
]);

export const overlay = recipe({
  base: [
    sprinkles({
      width: "full",
      height: "full",
      background: "black",
    }),
  ],
  variants: {
    open: {
      true: {
        opacity: 0,
        animationName: fadeIn,
        animationDelay: "100ms",
        animationDuration: "200ms",
        animationTimingFunction: "cubic-bezier(0.37, 0, 0.63, 1)",
        animationFillMode: "forwards",
      },
    },
    close: {
      true: {
        opacity: 0.6,
        animationName: fadeOut,
        animationDelay: "100ms",
        animationDuration: "200ms",
        animationTimingFunction: "cubic-bezier(0.37, 0, 0.63, 1)",
        animationFillMode: "forwards",
      },
    },
  },
});

export const sheet = recipe({
  base: [
    sprinkles({
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "white",
      borderRadius: "large",
      overflow: "hidden",
    }),
    {
      maxHeight: 650,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      paddingBottom: "34px",
    },
  ],
  variants: {
    open: {
      true: {
        transform: "translateY(100%)",
        animationName: slideIn,
        animationDelay: "100ms",
        animationDuration: "400ms",
        animationTimingFunction: "cubic-bezier(0.24, 0.9, 0.5, 1)",
        animationFillMode: "forwards",
      },
    },
    close: {
      true: {
        transform: "translateY(0%)",
        animationName: slideOut,
        animationDelay: "100ms",
        animationDuration: "400ms",
        animationTimingFunction: "cubic-bezier(0.24, 0.9, 0.5, 1)",
        animationFillMode: "forwards",
      },
    },
  },
});

/**
 * BottomSheet Confirm
 */
export const confirm = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "full",
    paddingX: "20px",
    paddingTop: "40px",
    paddingBottom: "24px",
  }),
  {},
]);

export const description = style([
  sprinkles({
    display: "block",
    marginTop: "20px",
    color: "gray600",
  }),
]);

/**
 * Header
 */
export const header = recipe({
  base: [
    sprinkles({
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingX: "20px",
      width: "full",
    }),
    {
      paddingRight: "56px",
    },
  ],
  variants: {
    thin: {
      true: sprinkles({
        height: "56px",
      }),
      false: sprinkles({
        height: "60px",
      }),
    },
  },
});

/**
 * Body
 */
export const body = style([
  sprinkles({
    width: "full",
    height: "full",
    paddingX: "20px",
  }),
  {
    overflow: "auto",
    maxHeight: 560,
    overscrollBehavior: "contain",
  },
]);

/**
 * Footer
 */
export const footer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "16px",
  }),
]);

export const close = style([
  sprinkles({
    position: "absolute",
    fontSize: "24px",
  }),
  {
    top: "50%",
    right: "16px",
    border: 0,
    background: "transparent",
    transform: "translateY(-50%)",
  },
]);

/**
 * Menu & Item
 */
export const menu = style([
  sprinkles({
    paddingBottom: "16px",
  }),
]);

export const item = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "full",
    height: "50px",
    color: "gray800",
    background: "white",
  }),
  {
    border: 0,
  },
]);
