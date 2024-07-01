import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkle.css";
import { vars } from "../../styles/theme.css";

const base = style([
  sprinkles({
    width: "full",
  }),
  {
    height: "1px",
    background: vars.color.divider.default,
  },
]);

export const divider = recipe({
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
