import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkle.css";

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
        gap: "10px",
      }),
      large: sprinkles({
        gap: "12px",
      }),
      xsmall: sprinkles({
        gap: "4px",
      }),
      small: sprinkles({
        gap: "6px",
      }),
    },
  },
});
