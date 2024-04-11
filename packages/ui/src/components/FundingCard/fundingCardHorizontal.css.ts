import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles';

export const cardStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    padding: '6x',
  }),
]);

export const productStyle = style([
  sprinkles({
    width: '60px',
    height: '60px',
    position: 'relative',
    borderRadius: 'medium',
    overflow: 'hidden',
  }),
  { marginRight: 18 },
]);

export const productImgStyle = style([
  sprinkles({
    position: 'absolute',
    left: 0,
    top: 0,
    width: 'full',
    height: 'full',
  }),
  {
    objectFit: 'cover',
  },
]);

export const infoStyle = style([
  sprinkles({
    flexGrow: 1,
  }),
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

export const arrowStyle = style([
  sprinkles({
    position: 'relative',
    color: 'gray400',
    fontSize: '18px',
  }),
]);
