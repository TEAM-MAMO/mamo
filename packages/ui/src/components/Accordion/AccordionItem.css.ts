import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const item = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    paddingY: "8x",
    paddingX: "6x",
  }),
  {
    borderBottom: "1px solid #EFEFEF",
  },
]);
