import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const optionList = style([
  sprinkles({
    display: "grid",
  }),
  {
    padding: "15px 28px",
    gridTemplateColumns: "repeat(4, 1fr)",
    rowGap: "28px",
    columnGap: "26px",
    maxHeight: "368px",
  },
]);

export const option = style([
  sprinkles({}),
  {
    background: "transparent",
    appearance: "none",
    border: 0,
  },
]);
