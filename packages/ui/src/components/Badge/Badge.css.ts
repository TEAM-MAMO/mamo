import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const badge = recipe({
  base: sprinkles({
    paddingX: "2x",
    borderRadius: "small",
  }),
  variants: {
    variant: {
      primary: sprinkles({
        background: "primary500",
        color: "white",
      }),
      secondary: sprinkles({
        background: "secondary300",
        color: "gray800",
      }),
      default: {
        background: "gray100",
        color: "gray600",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
