import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const reviewButton = recipe({
  base: [
    sprinkles({
      borderRadius: "medium",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }),
    {
      width: 108,
      height: 98,
      border: 0,
    },
  ],
  variants: {
    selected: {
      true: sprinkles({
        color: "white",
        background: "gray900",
      }),
      false: sprinkles({
        color: "gray700",
        background: "disabled",
      }),
    },
  },
});

export const reviewIcon = recipe({
  base: [
    sprinkles({
      fontSize: "36px",
    }),
    {
      marginBottom: "9px",
    },
  ],
  variants: {
    selected: {
      false: sprinkles({
        color: "gray500",
      }),
    },
  },
});
