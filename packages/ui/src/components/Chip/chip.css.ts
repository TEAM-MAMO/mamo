import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkle.css";

export const chip = recipe({
  base: [
    sprinkles({
      fontSize: "18px",
    }),
    {
      columnGap: "3px",
    },
  ],
  variants: {
    primary: {
      false: sprinkles({
        background: "gray100",
      }),
    },
  },
});
