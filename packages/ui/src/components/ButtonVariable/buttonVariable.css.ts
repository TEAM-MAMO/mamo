import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const buttonStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "default",
      borderRadius: "round",
      borderColor: "gray300",
      overflow: "hidden",
      textAlign: "center",
      color: "gray800",
    }),
    {
      gap: "2px",
      fontSize: 14,
      borderWidth: "1px",
      borderStyle: "solid",
    },
  ],
  variants: {
    size: {
      default: sprinkles({
        height: "44px",
        paddingX: "7x",
      }),
      small: sprinkles({
        height: "32px",
        paddingX: "6x",
      }),
    },
  },
});

export const textStyle = style([
  sprinkles({
    color: "gray700",
  }),
  {
    marginLeft: 2,
    marginRight: 2,
  },
]);
export const iconStyle = style([
  sprinkles({
    fontSize: "18px",
  }),
]);
