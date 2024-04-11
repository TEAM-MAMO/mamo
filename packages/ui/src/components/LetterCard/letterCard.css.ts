import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles';

/**
 * Letter Card
 */
export const cardStyle = style([
  sprinkles({
    overflow: 'hidden',
    borderColor: 'gray400',
  }),
  {
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'solid',
  },
]);
export const coverStyle = style([
  sprinkles({
    position: 'relative',
    width: 'full',
  }),
  {
    paddingBottom: '94%',
  },
]);
export const coverImgStyle = style([
  sprinkles({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'full',
    height: 'full',
  }),
  {
    objectFit: 'cover',
  },
]);

/**
 * Content Card
 */
export const headerStyle = style([
  sprinkles({
    paddingX: '7x',
    paddingTop: '6x',
    paddingBottom: '5x',
    display: 'flex',
    alignItems: 'center',
  }),
  { paddingRight: 22 },
]);
export const dateStyle = style([
  sprinkles({
    color: 'gray500',
  }),
  { marginLeft: 'auto' },
]);
export const profileStyle = style([
  sprinkles({
    borderRadius: 'round',
    overflow: 'hidden',
    marginRight: '2x',
  }),
]);
export const userStyle = style([
  sprinkles({
    display: 'flex',
  }),
]);
export const nicknameStyle = style({
  marginLeft: 2,
});
export const letterStyle = style([
  sprinkles({
    paddingTop: '3x',
    paddingX: '7x',
    paddingBottom: '8x',
  }),
]);
