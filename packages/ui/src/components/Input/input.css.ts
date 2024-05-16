import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../styles";

export const inputContainer = style({
  position: "relative",
});

/**
 * Label
 */
export const label = style([
  sprinkles({
    color: "gray700",
    marginBottom: "6px",
  }),
]);

export const inputBox = style([
  sprinkles({
    position: "relative",
    display: "flex",
    alignItems: "center",
  }),
]);

export const input = style([
  sprinkles({
    width: "full",
    color: "gray800",
    fontSize: "20px",
    lineHeight: "28px",
    letterSpacing: "-2%",
    fontWeight: "500",
    height: "48px",
    padding: "8px",
  }),
  {
    border: 0,
    outline: 0,
    caretColor: vars.pallette.primary500,

    "::placeholder": {
      color: vars.pallette.gray400,
    },
  },
]);

/**
 * Divider
 */
export const divider = style([
  sprinkles({
    position: "absolute",
    borderColor: "gray300",
  }),
  {
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
  },
]);
globalStyle(`${input}:focus + ${divider}`, {
  borderColor: vars.pallette.gray900,
});
globalStyle(`${input}[data-state="error"] + ${divider}`, {
  borderColor: vars.pallette.primary500,
});

/**
 * Extra
 */
export const extra = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
  }),
]);

export const count = style([
  sprinkles({
    color: "gray500",
    fontSize: "small",
  }),
]);
export const suffix = style([
  sprinkles({
    color: "gray400",
    fontSize: "24px",
  }),
]);

/**
 * Helper
 */
export const helper = recipe({
  base: sprinkles({
    paddingTop: "12px",
  }),
  variants: {
    state: {
      valid: sprinkles({
        color: "gray500",
      }),
      error: sprinkles({
        color: "primary600",
      }),
    },
  },
});
