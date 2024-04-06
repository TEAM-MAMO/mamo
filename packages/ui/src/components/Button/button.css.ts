import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

const base = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'round',
  }),
  {
    minWidth: '253px',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
]);

export const buttonStyle = recipe({
  base,
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
      small: sprinkles({
        height: '44px',
      }),
      default: sprinkles({
        height: '50px',
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
      true: { border: 'transparent' },
    },
  },
});

export const textStyle = recipe({
  variants: {
    size: {
      small: sprinkles({
        fontSize: 'small',
        fontWeight: '600',
        lineHeight: '20px',
      }),
      default: sprinkles({
        fontSize: 'medium',
        fontWeight: '700',
        lineHeight: '24px',
      }),
    },
  },
});

export const prefixStyle = recipe({
  variants: {
    size: {
      default: sprinkles({
        marginRight: '3x',
      }),
      small: sprinkles({
        marginRight: '1x',
      }),
    },
  },
});

export const suffixStyle = recipe({
  variants: {
    size: {
      default: sprinkles({
        marginLeft: '3x',
      }),
      small: sprinkles({
        marginLeft: '1x',
      }),
    },
  },
});
