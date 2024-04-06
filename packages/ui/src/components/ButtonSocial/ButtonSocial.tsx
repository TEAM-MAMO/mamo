import React, { useRef } from 'react';
import clsx from 'clsx';
import * as s from './buttonSocial.css';
import { SocialApple, SocialGoogle, SocialKakao, SocialNaver } from '../../assets/icons';

export type SocialType = 'kakao' | 'naver' | 'google' | 'apple';

export interface ButtonSocialProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  social: SocialType;
}

const socialIcon = {
  kakao: <SocialKakao />,
  naver: <SocialNaver />,
  google: <SocialGoogle />,
  apple: <SocialApple />,
};

export const ButtonSocial = React.forwardRef<HTMLButtonElement, ButtonSocialProps>(
  ({ social, className, ...props }: ButtonSocialProps, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(s.socialButton({ social }), className)}
        {...props}
      >
        <span className={clsx(s.socialIcon)}>{socialIcon[social]}</span>
      </button>
    );
  }
);
