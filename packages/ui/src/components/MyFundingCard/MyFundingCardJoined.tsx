/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';
import { ArrowRightOutlined, HeartSolid2 } from '../../assets/icons';
import { FundingProgressType, ProgressChip } from '../ProgressChip/ProgressChip';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { numberFormat } from '../../utils';
import * as s from './myFundingCard.css';

const { Text, Caption, Foot } = Typography;

export interface MyFundingCardJoinedProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  nickname: string;
  profileImg: string;
  productImg: string;
  startDate: string;
  endDate: string;
  deadline: number;
  progress: FundingProgressType;
  fundingAmount: number;
  goalAmount: number;
  letterCount: number;
  onClickArrow?: () => void;
  onClickButton?: () => void;
}

export const MyFundingCardJoined = React.forwardRef<
  HTMLDivElement,
  MyFundingCardJoinedProps
>(
  (
    {
      title,
      nickname,
      startDate,
      endDate,
      profileImg,
      productImg,
      fundingAmount,
      letterCount,
      progress,
      deadline,
      className,
      onClickArrow,
      onClickButton,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={clsx(s.cardStyle, className)} {...props}>
        <div className={s.headerStyle}>
          <div className={s.periodInfoStyle}>
            <ProgressChip progress={progress} deadline={deadline} />
            <Foot level={2} className={s.periodStyle}>
              {`${startDate} ~ ${endDate}`}
            </Foot>
          </div>
          <button className={s.arrowStyle} aria-label="arrow" onClick={onClickArrow}>
            <ArrowRightOutlined />
          </button>
        </div>
        <div className={s.bodyStyle}>
          <div className={s.productStyle}>
            <img className={s.productImgStyle} src={productImg} alt={title} />
            <div className={s.infoStyle}>
              <Text>{title}</Text>
              <div className={s.profileStyle}>
                <div className={s.profileImgStyle}>
                  {profileImg && <img src={profileImg} alt={nickname} />}
                </div>
                <Foot level={2}>{`to. ${nickname}`}</Foot>
              </div>
              <div className={s.joinAmountStyle}>
                <HeartSolid2 className={s.heartStyle} />
                <Caption>{`${numberFormat(fundingAmount.toString())}원`}</Caption>
              </div>
            </div>
          </div>
        </div>
        <Button block label={<Caption>보낸 편지 확인</Caption>} onClick={onClickButton} />
      </div>
    );
  }
);
