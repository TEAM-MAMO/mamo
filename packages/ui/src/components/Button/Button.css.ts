import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

const textSM = sprinkles({
  fontSize: "small",
  fontWeight: "600",
  lineHeight: "20px",
});

export const button = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "round",
    }),
    {
      borderWidth: "1px",
      borderStyle: "solid",
    },
  ],
  variants: {
    primary: {
      true: [
        sprinkles({
          color: "white",
          background: "black",
          borderColor: "black",
        }),
      ],
      false: [
        sprinkles({
          color: "gray600",
          background: "white",
          borderColor: "gray300",
        }),
      ],
    },
    size: {
      large: sprinkles({
        gap: "8px",
        height: "50px",
        paddingX: "20px",

        fontSize: "medium",
        fontWeight: "700",
        lineHeight: "24px",
      }),
      default: [
        textSM,
        sprinkles({
          gap: "4px",
          height: "44px",
          paddingX: "12px",
        }),
      ],
      small: [
        textSM,
        sprinkles({
          gap: "4px",
          height: "32px",
          paddingX: "12px",
        }),
      ],
      xsmall: [
        textSM,
        sprinkles({
          gap: "4px",
          height: "30px",
          paddingX: "12px",
        }),
      ],
    },
    align: {
      horizontal: sprinkles({
        flexDirection: "row",
      }),
      vertical: sprinkles({
        flexDirection: "column",
      }),
    },
    block: {
      true: sprinkles({ width: "full" }),
    },
    disabled: {
      true: sprinkles({
        color: "gray400",
        background: "gray100",
        borderColor: "gray100",
        cursor: "not-allowed",
      }),
    },
    borderless: {
      true: {
        border: "transparent",
      },
    },
  },
});
