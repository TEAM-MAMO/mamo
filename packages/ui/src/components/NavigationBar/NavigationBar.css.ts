import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const navbarStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      paddingX: "4x",
      paddingY: "2x",
    }),
  ],
  variants: {
    variant: {
      main: sprinkles({
        background: "black",
        color: "white",
      }),
      white: sprinkles({
        background: "white",
      }),
    },
  },
});
