import React from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography/Typography';
import { HeartSolidPrimary } from '../../assets/icons';
import * as s from './indicatorFunding.css';
import { numberFormat } from '../../utils';

const { Foot, Caption } = Typography;

export interface IndicatorFundingProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  percent: number;
  goalAmount: number;
}

export const IndicatorFunding = React.forwardRef<HTMLDivElement, IndicatorFundingProps>(
  ({ className, amount, percent, goalAmount, ...props }: IndicatorFundingProps, ref) => {
    return (
      <div ref={ref} className={clsx(s.indicator, className)} {...props}>
        <div className={s.stats}>
          <div className={s.statsAchieve({ disabled: percent === 0 })}>
            <HeartSolidPrimary className={s.statsIcon} />
            <span className={s.statsText}>{`${percent}% 달성`}</span>
          </div>
          <div className={s.amounts}>
            <Caption className={s.amountValue}>{`${numberFormat(
              amount.toString()
            )}원`}</Caption>
            <Foot className={s.amountGoal} level={1}>
              {`/ ${numberFormat(goalAmount.toString())}원`}
            </Foot>
          </div>
        </div>
        <div className={s.progress}>
          <div className={s.progressInner} style={{ width: `${percent}%` }} />
        </div>
      </div>
    );
  }
);
