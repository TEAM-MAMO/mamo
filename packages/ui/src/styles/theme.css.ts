import {
  background,
  breakPoints,
  divider,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  pallette,
  radius,
  shadow,
  sizes,
  space,
  text,
} from "../tokens";

import { createGlobalTheme } from "@vanilla-extract/css";

export const color = {
  text,
  background,
  divider,
};

export const contentWidth = {
  ...sizes,
  ...breakPoints,
};

const tokens = {
  contentWidth,
  pallette,
  space,
  color,
  sizes,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  radius,
  breakPoints,
  shadow,
};

export const vars = createGlobalTheme(":root", tokens);
