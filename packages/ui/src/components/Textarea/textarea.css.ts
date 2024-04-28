import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../styles";

export const labelStyle = style([
  sprinkles({
    color: "gray700",
    marginBottom: "5x",
  }),
]);

export const textBoxStyle = style({
  position: "relative",
});

export const textareaStyle = style([
  sprinkles({
    width: "full",
    padding: "6x",
    fontSize: "16px",
    fontWeight: "500",
    letterSpacing: "-1%",
    borderRadius: "small",
  }),
  {
    minHeight: 26,
    paddingBottom: 42,
    border: 0,
    outline: 0,
    resize: "none",
    background: "#FAFAFA",
    caretColor: vars.pallette.primary500,

    "::placeholder": {
      color: vars.pallette.gray400,
    },
  },
]);

export const countStyle = style([
  sprinkles({
    position: "absolute",
    color: "gray500",
    fontSize: "small",
  }),
  {
    right: vars.space["6x"],
    bottom: vars.space["6x"],
  },
]);

export const helperStyle = recipe({
  base: sprinkles({
    paddingTop: "5x",
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
