import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const progressStyle = recipe({
  base: sprinkles({
    paddingX: "6px",
    borderRadius: "small",
  }),
  variants: {
    progress: {
      doing: sprinkles({
        color: "gray800",
        background: "secondary300",
      }),
      pause: sprinkles({
        color: "gray600",
        background: "gray100",
      }),
      end: sprinkles({
        color: "gray600",
        background: "gray100",
      }),
    },
  },
});
