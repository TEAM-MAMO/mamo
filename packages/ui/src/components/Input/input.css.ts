import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '../../styles';

export const inputContainerStyle = style({
  position: 'relative',
});

export const inputBoxStyle = style([
  sprinkles({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }),
]);

export const inputStyle = recipe({
  base: [
    sprinkles({
      width: 'full',
      color: 'gray800',
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '-2%',
      fontWeight: '500',
      height: '48px',
      padding: '3x',
      paddingRight: '4x',
    }),
    {
      outline: 0,
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      caretColor: vars.pallette.primary500,

      '::placeholder': {
        color: vars.pallette.gray400,
      },

      ':focus': {
        borderColor: vars.pallette.gray900,
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
    hasCount: {
      true: {
        paddingRight: 48,
      },
    },
    hasClear: {
      true: {
        paddingRight: 42,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        hasCount: true,
        hasClear: true,
      },
      style: {
        paddingRight: 79,
      },
    },
  ],
});

export const labelStyle = style([
  sprinkles({
    color: 'gray700',
    marginBottom: '2x',
  }),
]);

export const toolsStyle = style([
  sprinkles({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  }),
  {
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
  },
]);

export const clearStyle = style([
  sprinkles({
    color: 'gray400',
    fontSize: '24px',
    marginLeft: '3x',
  }),
  {
    border: 0,
    background: 'transparent',
  },
]);

export const countStyle = style([
  sprinkles({
    color: 'gray500',
    fontSize: 'small',
  }),
]);

export const heplerStyle = recipe({
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
