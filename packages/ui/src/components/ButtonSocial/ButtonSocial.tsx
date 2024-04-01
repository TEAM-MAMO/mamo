import clsx from 'clsx';
import * as s from './buttonSocial.css';
import { SocialApple, SocialGoogle, SocialKakao, SocialNaver } from '../../assets/icons';

export type SocialType = 'kakao' | 'naver' | 'google' | 'apple';

export interface ButtonSocialProps {
  social: SocialType;
  className?: string;
  onClick?: (social: SocialType) => void;
}

const socialIcon = {
  kakao: <SocialKakao />,
  naver: <SocialNaver />,
  google: <SocialGoogle />,
  apple: <SocialApple />,
};

export const ButtonSocial = ({ social, className, onClick }: ButtonSocialProps) => {
  return (
    <button
      className={clsx(s.socialButton({ social }), className)}
      onClick={() => onClick?.(social)}
    >
      <span className={clsx(s.socialIcon)}>{socialIcon[social]}</span>
    </button>
  );
};
