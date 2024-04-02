import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

const dissolveIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.6 },
});

const dissolveOut = keyframes({
  '0%': { opacity: 0.6 },
  '100%': { opacity: 0 },
});

const slideOut = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(100%)' },
});

const slideIn = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0)' },
});

export const bottomSheet = style([
  sprinkles({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  {},
]);

export const layerDim = style([
  sprinkles({
    background: 'black',
    width: 'full',
    height: 'full',
  }),
  {
    opacity: 0.6,
    animationDuration: '200ms',
    animationFillMode: 'forwards',
    animationName: dissolveIn,
    animationTimingFunction: 'cubic-bezier(0.37, 0, 0.63, 1)',
  },
]);

export const layerContent = style([
  sprinkles({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'white',
    borderRadius: 'large',
    width: 'full',
    overflow: 'hidden',
  }),
  {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: 34,
    animationName: slideIn,
    animationDuration: '100ms',
    animationTimingFunction: 'cubic-bezier(0.24, 0.9, 0.5, 1)',
  },
]);

export const header = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'full',
      paddingLeft: '7x',
      paddingRight: '6x',
    }),
    {
      minHeight: '60px',
    },
  ],
  variants: {
    type: {
      default: {
        padding: 0,
      },
      confirm: sprinkles({
        paddingTop: '10x',
        paddingBottom: '8x',
      }),
    },
  },
});

export const title = style([sprinkles({})]);
export const description = style([
  sprinkles({
    display: 'block',
    marginTop: '7x',
    color: 'gray600',
  }),
]);

export const closeBtn = style([
  sprinkles({
    position: 'absolute',
    fontSize: '24px',
  }),
  {
    right: '16px',
    top: '50%',
    border: 0,
    padding: 0,
    background: 'transparent',
    transform: 'translateY(-50%)',
  },
]);

export const buttons = style([
  sprinkles({
    padding: '6x',
  }),
]);

export const cancelBtn = style([
  sprinkles({
    width: 'full',
    height: '50px',
    marginTop: '1x',
    color: 'gray600',
    background: 'white',
    borderRadius: 'round',
  }),
  {
    border: 0,
    fontWeight: '500',
  },
]);

export const content = style({});

export const menuList = style({
  paddingBottom: 20,
});
export const menuItem = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'full',
    height: '50px',
    color: 'gray800',
    background: 'white',
  }),
  { border: 0 },
]);
