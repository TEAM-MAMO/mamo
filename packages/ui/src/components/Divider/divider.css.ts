import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "../../styles";

const base = style([
  sprinkles({
    width: "full",
  }),
  {
    height: "1px",
    background: vars.color.divider.default,
  },
]);

export const dividerStyles = recipe({
  base,
  variants: {
    bolder: {
      true: {
        height: "8px",
        background: vars.color.divider.secondary,
      },
    },
  },
});
