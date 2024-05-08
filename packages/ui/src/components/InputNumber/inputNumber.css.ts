import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '../../styles';

export const label = style([
  sprinkles({
    color: 'gray700',
  }),
]);

export const inputBox = style([
  sprinkles({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }),
]);

export const input = recipe({
  base: [
    sprinkles({
      color: 'gray700',
      width: 'full',
      height: '48px',
      paddingLeft: '3x',
      paddingRight: '3x',
      fontSize: '20px',
    }),
    {
      border: 0,
      outline: 0,
      caretColor: vars.pallette.primary500,
      MozAppearance: 'none',

      '::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
      },
      '::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
      },
      '::placeholder': {
        color: vars.pallette.gray400,
      },
    },
  ],
  variants: {
    hasValue: {
      true: sprinkles({
        textAlign: 'right',
      }),
      false: sprinkles({
        textAlign: 'left',
      }),
    },
  },
});

/**
 * Divider
 */
export const divider = style([
  sprinkles({
    position: 'absolute',
    borderColor: 'gray300',
  }),
  {
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
]);
globalStyle(`${input}:focus + ${divider}`, {
  borderColor: vars.pallette.gray900,
});
globalStyle(`${input}[data-state="error"] + ${divider}`, {
  borderColor: vars.pallette.primary500,
});

/**
 * Suffix
 */
export const suffix = style([
  sprinkles({
    color: 'gray500',
    paddingRight: '6x',
  }),
]);
