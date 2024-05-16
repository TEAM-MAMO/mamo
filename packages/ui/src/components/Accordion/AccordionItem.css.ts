import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const item = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    paddingY: "24px",
    paddingX: "16px",
  }),
  {
    borderBottom: "1px solid #EFEFEF",
  },
]);
