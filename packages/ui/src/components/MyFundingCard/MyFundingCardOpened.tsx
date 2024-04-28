/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";
import FundingRate from "../FundingRate/FundingRate";
import {
  FundingProgressType,
  ProgressChip,
} from "../ProgressChip/ProgressChip";
import { ArrowRightOutlined } from "../../assets/icons";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";
import { numberFormat } from "../../utils";
import * as s from "./myFundingCard.css";

const { Text, Caption, Foot } = Typography;

export interface MyFundingCardOpenedProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  productImg: string;
  startDate: string;
  endDate: string;
  fundingRate: number;
  deadline: number;
  progress: FundingProgressType;
  fundingAmount: number;
  goalAmount: number;
  letterCount: number;
  onClickArrow?: () => void;
  onClickButton?: () => void;
}

export const MyFundingCardOpened = React.forwardRef<
  HTMLDivElement,
  MyFundingCardOpenedProps
>(
  (
    {
      title,
      productImg,
      startDate,
      endDate,
      fundingRate,
      fundingAmount,
      deadline,
      progress,
      goalAmount,
      letterCount,
      className,
      onClickArrow,
      onClickButton,
      ...props
    },
    ref,
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
          <button
            className={s.arrowStyle}
            aria-label="arrow"
            onClick={onClickArrow}
          >
            <ArrowRightOutlined />
          </button>
        </div>
        <div className={s.bodyStyle}>
          <div className={s.productStyle}>
            <img className={s.productImgStyle} src={productImg} alt={title} />
            <div className={s.infoStyle}>
              <Text>{title}</Text>
              <FundingRate className={s.rateStyle} rate={fundingRate} />
              <div className={s.amountStyle}>
                <Caption className={s.fundingAmountStyle}>{`${numberFormat(
                  fundingAmount.toString(),
                )}원`}</Caption>
                /
                <Foot className={s.goalAmountStyle} level={2}>{`${numberFormat(
                  goalAmount.toString(),
                )}원`}</Foot>
              </div>
            </div>
          </div>
        </div>
        <Button
          block
          onClick={onClickButton}
          label={
            <div className={s.buttonLabelStyle}>
              <Caption>편지함&nbsp;</Caption>
              <Caption level={2}>{`(${letterCount})`}</Caption>
            </div>
          }
        />
      </div>
    );
  },
);
