import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '../../styles';

export const card = recipe({
  base: sprinkles({
    position: 'relative',
    width: 'full',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }),
  variants: {
    divider: {
      true: {
        paddingTop: 8,
      },
    },
    borderless: {
      false: [
        sprinkles({
          borderColor: 'gray400',
        }),
        {
          borderStyle: 'solid',
          borderWidth: 1,
        },
      ],
    },
    rounded: {
      true: sprinkles({
        borderRadius: 'large',
      }),
    },
  },
});

export const divider = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    top: 0,
    left: 0,
    right: 0,
  },
]);

export const extra = sprinkles({
  fontSize: '18px',
  color: 'gray400',
  flexShrink: 0,
});

/**
 * Grid
 */
export const grid = recipe({
  base: sprinkles({
    display: 'flex',
    flexDirection: 'column',
    gap: '5x',
  }),
});

/**
 * Content
 */
export const content = recipe({
  base: [
    sprinkles({
      width: 'full',
      display: 'flex',
      alignItems: 'center',
      gap: '6x',
      paddingX: '6x',
      wordBreak: 'break-all',
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        paddingY: '6x',
      }),
      default: {
        paddingTop: '18px',
        paddingBottom: '18px',
      },
      large: sprinkles({
        paddingX: '7x',
        paddingTop: '6x',
        paddingBottom: '8x',
      }),
    },
  },
});

/**
 * Header
 */
export const header = style([
  sprinkles({
    width: 'full',
    height: '44px',
    paddingX: '6x',
  }),
]);
export const headerInner = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'full',
    borderColor: 'gray200',
    paddingY: '5x',
  }),
  {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
]);

/**
 * Image Box
 */
export const image = recipe({
  base: [
    sprinkles({
      overflow: 'hidden',
      flexShrink: 0,
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        width: '60px',
      }),
      default: sprinkles({
        width: '80px',
      }),
      full: sprinkles({
        width: 'full',
      }),
    },
    rounded: {
      false: {
        borderRadius: 0,
      },
      true: sprinkles({
        borderRadius: 'medium',
      }),
    },
  },
});
globalStyle(`${image} > img`, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

/**
 * Information
 */
export const information = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
  }),
]);

/**
 * Footer
 */
export const footer = style([
  sprinkles({
    width: 'full',
    paddingX: '6x',
    paddingBottom: '8x',
  }),
]);
