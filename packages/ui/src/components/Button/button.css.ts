import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '../../styles';

const color = createVar();
const background = createVar();

const base = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'round',
    borderColor: 'default',
    background: 'default',
  }),
  {
    minWidth: '253px',
    borderWidth: '1px',
    borderStyle: 'solid',
    color: vars.color.text.default,
  },
]);

export const buttonStyle = recipe({
  base,
  variants: {
    primary: {
      true: {
        color,
        background,
        borderColor: background,
        vars: {
          [background]: vars.color.background.primary,
          [color]: vars.color.text.inverse,
        },
      },
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
      true: {
        color,
        background,
        borderColor: background,
        vars: {
          [background]: vars.color.background.disabled,
          [color]: vars.color.text.disabled,
        },
      },
    },
  },
});

export const textStyle = recipe({
  variants: {
    size: {
      default: sprinkles({
        fontSize: 'small',
        fontWeight: '600',
        lineHeight: '24px',
      }),
      small: sprinkles({
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
