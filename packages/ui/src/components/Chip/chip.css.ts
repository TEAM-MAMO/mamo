import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '../../styles';

export const chipStyles = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      color: 'gray700',
      fontSize: 'small',
      borderRadius: 'round',
      paddingY: '2x',
      paddingX: '5x',
      height: '30px',
    }),
    {
      border: 0,
      columnGap: '3px',
    },
  ],
  variants: {
    primary: {
      true: {
        color: vars.color.text.inverse,
        background: vars.color.background.primary,
      },
    },
  },
});

export const chipIconStyles = recipe({
  base: [
    sprinkles({
      fontSize: '18px',
    }),
    {
      lineHeight: 0,
    },
  ],
  variants: {
    primary: {
      false: sprinkles({
        color: 'gray800',
      }),
      true: sprinkles({
        color: 'white',
      }),
    },
  },
});
