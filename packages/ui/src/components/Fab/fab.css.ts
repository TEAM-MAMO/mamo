import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const fabButton = recipe({
  base: [
    sprinkles({
      position: 'fixed',
      boxShadow: 'default',
      gap: '1x',
    }),
  ],
  variants: {
    shape: {
      circle: [
        sprinkles({
          flexDirection: 'column',
          fontSize: '24px',
          width: '64px',
          height: '64px',
          letterSpacing: '-2%',
        }),
        {
          lineHeight: 1.5,
          right: '20px',
          bottom: '20px',
          padding: 0,
        },
      ],
      capsule: [
        sprinkles({
          fontSize: '18px',
          paddingX: '7x',
        }),
        {
          right: '50%',
          bottom: '40px',
          transform: 'translateX(50%)',
        },
      ],
    },
  },
});

export const fabText = recipe({
  base: [
    sprinkles({
      display: 'inline-block',
    }),
  ],
  variants: {
    shape: {
      circle: [
        sprinkles({
          fontSize: '10px',
        }),
        {
          lineHeight: '15px',
        },
      ],
      capsule: [
        sprinkles({
          fontSize: '14px',
        }),
      ],
    },
  },
});
