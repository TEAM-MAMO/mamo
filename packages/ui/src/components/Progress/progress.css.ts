import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const track = recipe({
  base: [
    sprinkles({
      background: "gray300",
      width: "full",
    }),
  ],
  variants: {
    primary: {
      true: [
        sprinkles({
          borderRadius: "round",
        }),
        {
          height: 4,
        },
      ],
      false: [
        sprinkles({
          background: "gray300",
        }),
        {
          height: 2,
        },
      ],
    },
  },
});

export const thumb = recipe({
  base: [
    sprinkles({
      height: "full",
    }),
    {
      maxWidth: "100%",
    },
  ],
  variants: {
    primary: {
      true: [
        sprinkles({
          background: "primary500",
          borderRadius: "round",
        }),
        {
          minWidth: 4,
        },
      ],
      false: sprinkles({
        background: "black",
      }),
    },
  },
});
