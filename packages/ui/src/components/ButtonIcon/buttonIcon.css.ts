import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const buttonStyle = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'default',
      borderRadius: 'round',
      borderColor: 'gray300',
      overflow: 'hidden',
      textAlign: 'center',
      color: 'gray800',
    }),
    {
      borderWidth: '1px',
      borderStyle: 'solid',
    },
  ],
  variants: {
    size: {
      default: sprinkles({
        width: '64px',
        height: '50px',
        fontSize: '24px',
      }),
      large: [
        sprinkles({
          height: '50px',
          fontSize: '24px',
        }),
        {
          width: '79px',
        },
      ],
      small: sprinkles({
        height: '44px',
        width: '44px',
        fontSize: '18px',
      }),
    },
  },
});
