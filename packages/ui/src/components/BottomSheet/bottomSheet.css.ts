import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

/**
 * BottomSheet Content
 */
export const contentStyle = style([
  sprinkles({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  {},
]);

export const overlayStyle = style([
  sprinkles({
    width: 'full',
    height: 'full',
    background: 'black',
  }),
  {
    opacity: 0.6,
  },
]);

export const sheetStyle = style([
  sprinkles({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'white',
    borderRadius: 'large',
    overflow: 'hidden',
  }),
  {
    maxHeight: 650,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: '34px',
  },
]);

/**
 * BottomSheet Confirm
 */
export const confirmStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'full',
    paddingX: '7x',
    paddingTop: '10x',
    paddingBottom: '8x',
  }),
  {},
]);

export const descriptionStyle = style([
  sprinkles({
    display: 'block',
    marginTop: '3x',
    color: 'gray600',
  }),
]);

/**
 * Header
 */
export const headerStyle = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingX: '7x',
      width: 'full',
    }),
    {
      paddingRight: '56px',
    },
  ],
  variants: {
    thin: {
      true: sprinkles({
        height: '56px',
      }),
      false: sprinkles({
        height: '60px',
      }),
    },
  },
});

/**
 * Body
 */
export const bodyStyle = style([
  sprinkles({
    width: 'full',
    height: 'full',
    paddingX: '7x',
  }),
  {
    overflow: 'auto',
    maxHeight: 560,
    overscrollBehavior: 'contain',
  },
]);

/**
 * Footer
 */
export const footerStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    gap: '2x',
    padding: '6x',
  }),
]);

export const closeStyle = style([
  sprinkles({
    position: 'absolute',
    fontSize: '24px',
  }),
  {
    top: '50%',
    right: '16px',
    border: 0,
    background: 'transparent',
    transform: 'translateY(-50%)',
  },
]);

/**
 * Menu & Item
 */
export const menuStyle = style([
  sprinkles({
    paddingBottom: '6x',
  }),
]);

export const itemStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'full',
    height: '50px',
    color: 'gray800',
    background: 'white',
  }),
  {
    border: 0,
  },
]);
