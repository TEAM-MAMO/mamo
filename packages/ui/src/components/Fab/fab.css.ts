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
          width: '64px',
          height: '64px',
          fontSize: '10px',
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

export const fabIcon = recipe({
  base: [
    sprinkles({
      display: 'inline-block',
    }),
  ],
  variants: {
    shape: {
      circle: [
        sprinkles({
          fontSize: '24px',
        }),
      ],
      capsule: sprinkles({
        fontSize: '18px',
      }),
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
    circle: {
      true: [
        sprinkles({
          fontSize: '10px',
        }),
        {
          lineHeight: '15px',
        },
      ],
    },
  },
});
