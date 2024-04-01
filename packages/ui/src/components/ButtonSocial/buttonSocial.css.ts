import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const socialButton = recipe({
  base: [
    sprinkles({
      borderRadius: 'round',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '56px',
      height: '56px',
    }),
    {
      border: 0,
    },
  ],
  variants: {
    social: {
      kakao: {
        background: '#FEE500',
      },
      naver: {
        background: '#03C75A',
      },
      google: {
        background: '#EFEFEF',
      },
      apple: {
        background: '#000000',
      },
    },
  },
});

export const socialIcon = style([
  sprinkles({
    display: 'inline-block',
    fontSize: '40px',
  }),
]);
