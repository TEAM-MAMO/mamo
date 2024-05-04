import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

const textSM = sprinkles({
  fontSize: 'small',
  fontWeight: '600',
  lineHeight: '20px',
});

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

        fontSize: 'medium',
        fontWeight: '700',
        lineHeight: '24px',
      }),
      small: [
        textSM,
        sprinkles({
          gap: '1x',
          height: '44px',
          paddingX: '5x',
        }),
      ],
      xsmall: [
        textSM,
        sprinkles({
          gap: '1x',
          height: '32px',
          paddingX: '5x',
        }),
      ],
      xxsmall: [
        textSM,
        sprinkles({
          gap: '1x',
          height: '30px',
          paddingX: '5x',
        }),
      ],
    },
    block: {
      true: sprinkles({ width: 'full' }),
    },
    disabled: {
      true: sprinkles({
        color: 'gray400',
        background: 'gray100',
        borderColor: 'gray100',
        cursor: 'not-allowed',
      }),
    },
    borderless: {
      true: {
        border: 'transparent',
      },
    },
  },
});
