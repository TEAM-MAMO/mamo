import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '../../styles';

const color = createVar();
const background = createVar();

const base = style([
  sprinkles({
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
    type: {
      normal: sprinkles({}),
      action: sprinkles({}),
    },
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
      small: sprinkles({ height: '44px', fontSize: 'small', fontWeight: '600' }),
      default: sprinkles({ height: '50px', fontSize: 'medium', fontWeight: '700' }),
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
