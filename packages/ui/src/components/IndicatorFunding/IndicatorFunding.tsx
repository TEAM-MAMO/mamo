import React from "react";
import clsx from "clsx";
import { Typography } from "../Typography/Typography";
import * as s from "./indicatorFunding.css";
import { numberFormat } from "../../utils";
import FundingRate from "../FundingRate/FundingRate";

const { Foot, Caption } = Typography;

export interface IndicatorFundingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  fundingRate: number;
  goalAmount: number;
}

export const IndicatorFunding = React.forwardRef<
  HTMLDivElement,
  IndicatorFundingProps
>(
  (
    {
      className,
      amount,
      fundingRate,
      goalAmount,
      ...props
    }: IndicatorFundingProps,
    ref,
  ) => {
    return (
      <div ref={ref} className={clsx(s.indicator, className)} {...props}>
        <div className={s.stats}>
          <FundingRate rate={fundingRate} />
          <div className={s.amounts}>
            <Caption className={s.amountValue}>{`${numberFormat(
              amount.toString(),
            )}원`}</Caption>
            <Foot className={s.amountGoal} level={1}>
              {`/ ${numberFormat(goalAmount.toString())}원`}
            </Foot>
          </div>
        </div>
        <div className={s.progress}>
          <div
            className={s.progressInner}
            style={{ width: `${fundingRate}%` }}
          />
        </div>
      </div>
    );
  },
);
