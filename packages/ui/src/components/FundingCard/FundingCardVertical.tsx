/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";
import * as s from "./fundingCardVertical.css";
import { Typography } from "../Typography/Typography";
import { FundingProgressType } from "../ProgressChip/ProgressChip";
import FundingRate from "../FundingRate/FundingRate";

const { Caption, Foot } = Typography;

export interface FundingCardVerticalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  nickname: string;
  profileImg?: string;
  productImg: string;
  fundingRate: number;
  deadline: number;
  progress: FundingProgressType;
}

export const FundingCardVertical = React.forwardRef<
  HTMLDivElement,
  FundingCardVerticalProps
>(
  (
    {
      nickname,
      profileImg,
      productImg,
      title,
      fundingRate,
      deadline,
      progress,
      className,
      ...props
    },
    ref,
  ) => {
    const progressText = () => {
      if (progress === "doing") return `${deadline}일 남음`;
      if (progress === "end") return "마감";
      return "중단";
    };
    return (
      <div className={clsx(s.cardStyle, className)} ref={ref} {...props}>
        <div className={s.productStyle}>
          <img className={s.productImgStyle} src={productImg} alt={title} />
          <div className={s.overlayStyle({ progress })}>
            <div className={s.progressStyle({ progress })}>
              <Foot>{progressText()}</Foot>
            </div>
          </div>
        </div>

        <div className={s.infoStyle}>
          <div className={s.profileStyle}>
            <div className={s.profileImgStyle}>
              {profileImg && <img src={profileImg} alt={nickname} />}
            </div>
            <Foot level={2}>{`to.${nickname}`}</Foot>
          </div>
          <Caption className={s.titleStyle}>{title}</Caption>
          <FundingRate className={s.rateStyle} rate={fundingRate} />
        </div>
      </div>
    );
  },
);
