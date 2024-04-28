import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const fundingRateStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
    }),
  ],
  variants: {
    disabled: {
      true: sprinkles({
        color: "gray500",
      }),
      false: sprinkles({
        color: "primary",
      }),
    },
  },
});

export const statsIconStyle = style([
  sprinkles({
    marginRight: "1x",
  }),
]);
export const rateTextStyle = style([
  sprinkles({
    fontSize: "14px",
    fontWeight: "600",
  }),
]);
