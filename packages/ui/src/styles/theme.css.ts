import {
  background,
  breakPoints,
  divider,
  fontSize,
  fontWeight,
  pallette,
  radius,
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

const tokens = {
  pallette,
  space,
  color,
  sizes,
  fontSize,
  fontWeight,
  radius,
  breakPoints,
};

export const vars = createGlobalTheme(":root", tokens);
