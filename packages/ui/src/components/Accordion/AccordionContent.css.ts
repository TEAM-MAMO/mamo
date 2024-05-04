import { createVar, style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles";

export const contentHeightVar = createVar();

export const content = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gapY: "6x",
    paddingTop: "7x",
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
