import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const chip = recipe({
  base: {
    columnGap: '3px',
  },
  variants: {
    primary: {
      false: sprinkles({
        background: 'gray100',
      }),
    },
  },
});

export const chipIcon = recipe({
  base: [
    sprinkles({
      fontSize: '18px',
    }),
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
