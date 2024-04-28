import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../styles";

export const labelStyle = style([
  sprinkles({
    color: "gray700",
  }),
]);

export const inputBoxStyle = style([
  sprinkles({
    position: "relative",
  }),
]);

export const inputStyle = recipe({
  base: [
    sprinkles({
      width: "full",
      color: "gray800",
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "-2%",
      fontWeight: "500",
      height: "48px",
      padding: "3x",
      paddingRight: "4x",
      cursor: "pointer",
    }),
    {
      outline: 0,
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      caretColor: vars.pallette.primary500,

      "::placeholder": {
        color: vars.pallette.gray400,
      },
    },
  ],
  variants: {
    state: {
      valid: sprinkles({
        borderColor: "gray300",
      }),
      error: [
        sprinkles({
          borderColor: "primary500",
        }),
      ],
    },
  },
});

export const iconStyle = style([
  sprinkles({
    position: "absolute",
    color: "gray400",
    fontSize: "18px",
  }),
  {
    top: "50%",
    right: vars.space["6x"],
    transform: "translateY(-50%)",
    pointerEvents: "none",
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
