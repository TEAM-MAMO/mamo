import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const trigger = recipe({
  base: style([
    sprinkles({
      padding: "4px",

      width: "full",
      cursor: "pointer",
    }),
  ]),
  variants: {
    isActive: {
      true: {
        borderBottom: "2px solid",
      },
      false: {
        borderBottom: "0.5px solid #C9C9C9",
      },
    },
  },
});

export const tab = recipe({
  base: sprinkles({
    marginBottom: "4px",
    marginX: "auto",
    fontWeight: "600",
  }),
  variants: {
    isActive: {
      true: sprinkles({
        color: "black",
      }),
      false: sprinkles({
        color: "gray400",
      }),
    },
  },
});
