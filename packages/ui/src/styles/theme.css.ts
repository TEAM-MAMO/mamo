import {
  background,
  breakPoints,
  divider,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  pallette,
  radius,
  sizes,
  space,
  text,
} from '../tokens';

import { createGlobalTheme } from '@vanilla-extract/css';

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
  lineHeight,
  letterSpacing,
  radius,
  breakPoints,
};

export const vars = createGlobalTheme(':root', tokens);
