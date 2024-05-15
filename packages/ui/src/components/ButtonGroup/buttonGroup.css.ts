import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const group = recipe({
  base: sprinkles({
    display: "flex",
    alignItems: "center",
  }),
  variants: {
    layout: {
      horizontal: sprinkles({
        flexDirection: "row",
      }),
      vertical: sprinkles({
        flexDirection: "column",
      }),
    },
    gap: {
      default: sprinkles({
        gap: "4x",
      }),
      large: sprinkles({
        gap: "5x",
      }),
      xsmall: sprinkles({
        gap: "1x",
      }),
      small: sprinkles({
        gap: "2x",
      }),
    },
  },
});
