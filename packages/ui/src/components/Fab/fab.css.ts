import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const fabButton = recipe({
  base: [
    sprinkles({
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      borderRadius: "round",
      background: "black",
      boxShadow: "default",
    }),
    {
      border: 0,
    },
  ],
  variants: {
    shape: {
      circle: [
        sprinkles({
          flexDirection: "column",
          width: "64px",
          height: "64px",
          fontSize: "10px",
          letterSpacing: "-2%",
        }),
        {
          lineHeight: 1.5,
          right: "20px",
          bottom: "20px",
        },
      ],
      capsule: [
        sprinkles({
          height: "44px",
          paddingX: "7x",
        }),
        {
          right: "50%",
          bottom: "40px",
          transform: "translateX(50%)",
        },
      ],
    },
  },
});

export const fabIcon = recipe({
  base: [
    sprinkles({
      display: "inline-block",
    }),
  ],
  variants: {
    shape: {
      circle: [
        sprinkles({
          fontSize: "24px",
        }),
        {
          marginBottom: "3px",
        },
      ],
      capsule: sprinkles({
        fontSize: "18px",
        marginRight: "1x",
      }),
    },
  },
});

export const fabText = recipe({
  base: [
    sprinkles({
      display: "inline-block",
    }),
  ],
  variants: {
    shape: {
      circle: [
        sprinkles({
          fontSize: "10px",
        }),
        {
          lineHeight: "15px",
        },
      ],
      capsule: sprinkles({
        fontSize: "14px",
        lineHeight: "20px",
      }),
    },
  },
});
