/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as s from './fundingCardHorizontal.css';
import { ArrowRightOutlined } from '../../assets/icons';
import { Typography } from '../Typography/Typography';

const { Text, Foot } = Typography;

export type FundingProgressType = 'pause' | 'end' | 'doing';

export interface FundingCardHorizontalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  nickname: string;
  profileImg?: string;
  productImg: string;
}

export const FundingCardHorizontal = React.forwardRef<
  HTMLDivElement,
  FundingCardHorizontalProps
>(({ nickname, profileImg, productImg, title, ...props }, ref) => {
  return (
    <div className={s.cardStyle} ref={ref} {...props}>
      <div className={s.productStyle}>
        <img className={s.productImgStyle} src={productImg} alt={title} />
      </div>

      <div className={s.infoStyle}>
        <Text>{title}</Text>
        <div className={s.profileStyle}>
          <div className={s.profileImgStyle}>
            {profileImg && <img src={profileImg} alt={nickname} />}
          </div>

          <Foot level={2}>{`to.${nickname}`}</Foot>
        </div>
      </div>
      <div className={s.arrowStyle}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
});
