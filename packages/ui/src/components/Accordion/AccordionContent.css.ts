import { createVar, globalStyle, style } from "@vanilla-extract/css";

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const contentHeightVar = createVar();

export const content = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gapY: "16px",

    overflow: "hidden",
  }),
  {
    height: contentHeightVar,
    transitionProperty: "height",
    transitionDuration: "200ms",
    transitionDelay: "100ms",
    transitionTimingFunction: "cubic-bezier(0.37, 0, 0.63, 1)",
  },
]);

export const contentChild = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gapY: "16px",
  }),
]);

globalStyle(`${contentChild}:first-child`, {
  paddingTop: "16px",
});

globalStyle(`${contentChild}:not(:last-child)`, {
  paddingBottom: "16px",
  borderBottom: "0.5px solid #EFEFEF",
});
