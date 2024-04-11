import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { pallette } from '../tokens';
import { vars } from './theme.css';

const colorProperties = defineProperties({
  properties: {
    color: {
      ...vars.color.text,
      ...pallette,
    },
    borderColor: { ...vars.color.divider, ...pallette },
    background: {
      ...pallette,
      ...vars.color.background,
    },
    backgroundColor: {
      ...pallette,
      ...vars.color.background,
    },
  },
});

const fontProperties = defineProperties({
  properties: {
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
    letterSpacing: vars.letterSpacing,
  },
});

const responsiveProperties = defineProperties({
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: { ...vars.space, auto: 'auto' },
    marginRight: { ...vars.space, auto: 'auto' },
    gap: { ...vars.space, none: 'none' },
    opacity: [0, 1],
    pointerEvents: ['none', 'auto'],
    overflow: ['hidden'],
    textAlign: ['left', 'center', 'right'],
    minWidth: [0],
    maxWidth: vars.space,
    transition: {
      slow: 'transform .3s ease, opacity .3s ease',
      fast: 'transform .15s ease, opacity .15s ease',
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const unconditionalProperties = defineProperties({
  properties: {
    flexWrap: ['wrap', 'nowrap'],
    flexGrow: [0, 1],
    flexShrink: [0],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    zIndex: [-1, 0, 1],
    width: vars.sizes,
    height: vars.sizes,
    borderRadius: vars.radius,
    boxShadow: vars.shadow,
    cursor: ['pointer'],
    pointerEvents: ['auto', 'none', 'visible'],
    textDecoration: ['none', 'underline', 'line-through'],
    textTransform: ['uppercase', 'lowercase', 'capitalize'],
    textAlign: ['left', 'center', 'right'],
    textOverflow: ['ellipsis'],
    overflow: ['hidden'],
    whiteSpace: ['nowrap'],
  },
  shorthands: {
    inset: ['top', 'bottom', 'left', 'right'],
  },
});

export const sprinkles = createSprinkles(
  colorProperties,
  fontProperties,
  responsiveProperties,
  unconditionalProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
