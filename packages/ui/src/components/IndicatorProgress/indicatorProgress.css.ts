import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const progressTrack = style([
  sprinkles({
    width: "full",
    background: "gray300",
  }),
  {
    height: "2px",
  },
]);

export const progressBar = style([
  sprinkles({
    height: "full",
    background: "black",
  }),
  {
    maxWidth: "100%",
  },
]);
