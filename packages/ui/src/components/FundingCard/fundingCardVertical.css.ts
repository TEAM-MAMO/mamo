import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const cardStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
  }),
]);

export const productStyle = style([
  sprinkles({
    width: 'full',
    height: 'full',
    position: 'relative',
    borderRadius: 'medium',
    overflow: 'hidden',
  }),
  { paddingBottom: '100%' },
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

export const overlayStyle = recipe({
  base: [
    sprinkles({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    {},
  ],
  variants: {
    progress: {
      doing: {
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 30.37%)',
      },
      pause: {
        background: '#0000004D',
        backdropFilter: 'blur(4px)',
      },
      end: {
        background: '#0000004D',
        backdropFilter: 'blur(4px)',
      },
    },
  },
});
export const progressStyle = recipe({
  base: [
    sprinkles({
      position: 'absolute',
      paddingX: '2x',
      borderRadius: 'small',
      zIndex: 1,
    }),
    {
      bottom: 18,
      right: 14,
    },
  ],
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

export const infoStyle = style([
  sprinkles({
    flexGrow: 1,
    marginTop: '5x',
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

export const titleStyle = style([
  sprinkles({
    marginTop: '3x',
  }),
]);

export const rateStyle = style([
  sprinkles({
    marginTop: '2x',
  }),
]);
