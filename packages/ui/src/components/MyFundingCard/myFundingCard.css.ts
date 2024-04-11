import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const cardStyle = style([
  sprinkles({
    paddingX: '6x',
    borderColor: 'gray100',
    paddingBottom: '8x',
  }),
  {
    borderTopWidth: 8,
    borderTopStyle: 'solid',
  },
]);

/**
 * Header
 */
export const headerStyle = style([
  sprinkles({
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
]);
export const periodInfoStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
]);
export const progressStyle = recipe({
  base: sprinkles({
    paddingX: '2x',
    borderRadius: 'small',
  }),
  variants: {
    progress: {
      doing: sprinkles({
        color: 'gray800',
        background: 'secondary300',
      }),
      pause: sprinkles({
        color: 'gray600',
        background: 'gray100',
      }),
      end: sprinkles({
        color: 'gray600',
        background: 'gray100',
      }),
    },
  },
});
export const periodStyle = style([
  sprinkles({
    color: 'gray500',
    marginLeft: '4x',
  }),
]);
export const arrowStyle = style([
  sprinkles({
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    color: 'gray400',
  }),
  {
    border: 0,
    padding: 0,
    margin: 0,
    background: 'transparent',
  },
]);

/**
 * Body
 */
export const bodyStyle = style([
  sprinkles({
    paddingTop: '6x',
    borderColor: 'gray200',
  }),
  {
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    paddingBottom: 18,
  },
]);
export const productStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
  }),
]);
export const productImgStyle = style([
  sprinkles({
    borderRadius: 'medium',
  }),
  {
    width: 80,
    height: 80,
  },
]);
export const infoStyle = style([
  sprinkles({
    marginLeft: '6x',
  }),
]);
export const rateStyle = style([
  sprinkles({
    marginTop: '2x',
  }),
]);

export const amountStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    marginTop: '2x',
    color: 'gray500',
  }),
]);
export const fundingAmountStyle = style([
  sprinkles({
    display: 'flex',
    marginRight: '2x',
    color: 'gray800',
  }),
]);
export const goalAmountStyle = style([
  sprinkles({
    display: 'flex',
  }),
  {
    marginLeft: 3,
  },
]);
export const profileStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    color: 'gray700',
    marginTop: '2x',
  }),
]);
export const profileImgStyle = style([
  sprinkles({
    marginRight: '2x',
    width: '24px',
    height: '24px',
    borderRadius: 'round',
    backgroundColor: 'gray100',
    overflow: 'hidden',
  }),
  {
    backgroundImage: 'url(../../assets/images/profile-placeholder.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
]);
export const joinAmountStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    marginTop: '2x',
    color: 'gray800',
  }),
]);
export const heartStyle = style([
  sprinkles({
    color: 'primary500',
    marginRight: '2x',
    flexShrink: 0,
  }),
  {
    lineHeight: 0,
    fontSize: 13,
  },
]);

/**
 * Footer
 */
export const buttonLabelStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
  }),
]);
