import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const indicator = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    paddingX: "6x",
    paddingY: "7x",
    background: "secondary50",
  }),
]);

/**
 * Stats
 */
export const stats = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
  }),
]);
export const statsAchieve = recipe({
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
export const statsIcon = style([
  sprinkles({
    marginRight: "1x",
  }),
]);
export const statsText = style([
  sprinkles({
    fontSize: "14px",
    fontWeight: "600",
  }),
]);

/**
 * Amount
 */
export const amounts = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
  }),
]);
export const amountValue = style([
  sprinkles({
    color: "gray800",
    fontSize: "14px",
    fontWeight: "600",
  }),
]);
export const amountGoal = style([
  sprinkles({
    color: "gray500",
    fontSize: "12px",
    fontWeight: "500",
    marginLeft: "2x",
  }),
]);

/**
 * Progress
 */
export const progress = style([
  sprinkles({
    width: "full",
    background: "gray300",
    borderRadius: "round",
  }),
  {
    height: "4px",
    marginTop: "14px",
  },
]);

export const progressInner = style([
  sprinkles({
    height: "full",
    borderRadius: "round",
    background: "primary500",
  }),
  {
    width: 0,
    minWidth: "4px",
    maxWidth: "100%",
  },
]);
