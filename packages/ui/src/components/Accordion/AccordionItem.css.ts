import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const item = recipe({
  base: sprinkles({
    display: "flex",
    flexDirection: "column",
    paddingY: "8x",
    paddingX: "6x",
  }),
  variants: {
    open: {
      true: sprinkles({
        gap: "7x",
      }),
    },
  },
});
