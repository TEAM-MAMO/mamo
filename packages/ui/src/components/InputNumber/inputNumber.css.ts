import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '../../styles';

export const labelStyle = style([
  sprinkles({
    color: 'gray700',
  }),
]);
export const inputBoxStyle = style([
  sprinkles({
    position: 'relative',
    color: 'gray700',
  }),
]);
export const inputStyle = recipe({
  base: [
    sprinkles({
      color: 'gray700',
      width: 'full',
      height: '48px',
      paddingLeft: '3x',
      fontSize: '20px',
    }),
    {
      paddingRight: 37,
      outline: 0,
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      caretColor: vars.pallette.primary500,
      MozAppearance: 'none',
      textAlign: 'left',

      '::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
      },
      '::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
      },
      '::placeholder': {
        color: vars.pallette.gray400,
      },
      ':focus': {
        borderColor: vars.pallette.gray900,
      },
      selectors: {
        '&:not([value=""])': {
          textAlign: 'right',
        },
      },
    },
  ],
  variants: {
    state: {
      valid: sprinkles({
        borderColor: 'gray300',
      }),
      error: [
        sprinkles({
          borderColor: 'primary500',
        }),
        {
          ':focus': {
            borderColor: vars.pallette.primary500,
          },
        },
      ],
    },
  },
});

export const unitStyle = style([
  sprinkles({
    color: 'gray500',
    position: 'absolute',
  }),
  {
    top: '50%',
    right: vars.space['6x'],
    transform: 'translateY(-50%)',
  },
]);

export const helperStyle = recipe({
  base: sprinkles({
    paddingTop: '5x',
  }),
  variants: {
    state: {
      valid: sprinkles({
        color: 'gray500',
      }),
      error: sprinkles({
        color: 'primary600',
      }),
    },
  },
});
