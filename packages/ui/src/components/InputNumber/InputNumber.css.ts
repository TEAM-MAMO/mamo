import { globalStyle, style } from "@vanilla-extract/css";

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkle.css";
import { vars } from "../../styles/theme.css";

export const label = style([
  sprinkles({
    color: "gray700",
  }),
]);

export const inputBox = style([
  sprinkles({
    position: "relative",
    display: "flex",
    alignItems: "center",
  }),
]);

export const inputBase = style([
  sprinkles({
    color: "gray700",
    width: "full",
    height: "48px",
    paddingLeft: "8px",
    paddingRight: "8px",
    fontSize: "20px",
  }),
  {
    border: 0,
    outline: 0,
    caretColor: vars.pallette.primary500,
    MozAppearance: "none",
    "::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
    },
    "::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
    },
    "::placeholder": {
      color: vars.pallette.gray400,
    },
  },
]);

export const input = recipe({
  base: inputBase,
  variants: {
    hasValue: {
      true: sprinkles({
        textAlign: "right",
      }),
      false: sprinkles({
        textAlign: "left",
      }),
    },
  },
});

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

globalStyle(`${inputBase}:focus + ${divider}`, {
  borderColor: vars.pallette.gray900,
});
globalStyle(`${inputBase}[data-state="error"] + ${divider}`, {
  borderColor: vars.pallette.primary500,
});

/**
 * Suffix
 */
export const suffix = style([
  sprinkles({
    color: "gray500",
    paddingRight: "16px",
  }),
]);
