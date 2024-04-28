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
    {
      minWidth: "375px",
    },
  ],
  variants: {
    variant: {
      primary: sprinkles({
        background: "black",
        color: "white",
      }),
      secondary: sprinkles({
        background: "white",
      }),
    },
  },
});

// TODO: scrolled 추가
