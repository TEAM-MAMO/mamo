import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles";

export const visualStyle = style([
  sprinkles({
    paddingTop: "6x",
    overflow: "hidden",
  }),
  {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 28,
  },
]);

export const headerStyle = style([
  sprinkles({
    display: "flex",
  }),
]);

export const sloganStyle = style([
  sprinkles({
    color: "gray600",
  }),
  {
    marginTop: 11,
  },
]);

export const headingStyle = style([
  sprinkles({
    marginBottom: "6x",
  }),
]);

export const highlightStyle = style([
  sprinkles({
    color: "gray800",
  }),
]);

export const profileStyle = style([
  sprinkles({
    width: "36px",
    height: "36px",
    borderRadius: "round",
    overflow: "hidden",
    marginTop: "2x",
    marginRight: "4x",
    backgroundColor: "gray100",
  }),
  {
    backgroundImage: "url(../../assets/images/profile-placeholder.png)",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
]);

export const profileImgStyle = style([
  sprinkles({
    width: "full",
    height: "full",
  }),
  {
    objectFit: "cover",
  },
]);

export const moreStyle = style([
  sprinkles({
    width: "48px",
    height: "48px",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  {
    border: 0,
    background: "transparent",
    marginLeft: "auto",
  },
]);

export const statsStyle = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
  }),
]);

/**
 * Swiper
 */
export const swiperStyle = style([
  sprinkles({
    marginY: "8x",
  }),
]);

export const slideStyle = style([
  sprinkles({
    overflow: "hidden",
  }),
  {
    borderRadius: 100,
  },
]);

export const slideImgStyle = style([
  sprinkles({
    width: "full",
    height: "full",
  }),
  {
    objectFit: "cover",
  },
]);

export const paginationStyle = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7x",
  }),
]);

export const bulletStyle = recipe({
  base: [
    sprinkles({
      borderRadius: "round",
    }),
    {
      width: 4,
      height: 4,
      margin: "0 2px",
    },
  ],
  variants: {
    active: {
      true: sprinkles({
        background: "black",
      }),
      false: sprinkles({
        background: "gray300",
      }),
    },
  },
});

globalStyle(".main-visual-swiper.swiper-container", {
  overflow: "visible",
});
