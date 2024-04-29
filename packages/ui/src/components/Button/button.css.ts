import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const button = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'round',
    }),
    {
      borderWidth: '1px',
      borderStyle: 'solid',
    },
  ],
  variants: {
    primary: {
      true: [
        sprinkles({
          color: 'white',
          background: 'black',
          borderColor: 'black',
        }),
      ],
      false: [
        sprinkles({
          color: 'gray600',
          background: 'white',
          borderColor: 'gray300',
        }),
      ],
    },
    size: {
      default: sprinkles({
        gap: '3x',
        height: '50px',
        paddingX: '7x',
      }),
      small: sprinkles({
        gap: '1x',
        height: '44px',
        paddingX: '5x',
      }),
      xsmall: sprinkles({
        gap: '1x',
        height: '32px',
        paddingX: '5x',
      }),
    },
    block: {
      true: sprinkles({ width: 'full' }),
    },
    disabled: {
      true: sprinkles({
        color: 'gray400',
        background: 'gray100',
        borderColor: 'gray100',
      }),
    },
    borderless: {
      true: {
        border: 'transparent',
      },
    },
  },
});

export const text = recipe({
  variants: {
    size: {
      default: sprinkles({
        fontSize: 'medium',
        fontWeight: '700',
        lineHeight: '24px',
      }),
      small: sprinkles({
        fontSize: 'small',
        fontWeight: '600',
        lineHeight: '20px',
      }),
      xsmall: sprinkles({
        fontSize: 'small',
        fontWeight: '600',
        lineHeight: '20px',
      }),
    },
  },
});
