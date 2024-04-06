import React from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography/Typography';
import { HeartSolidPrimary } from '../../assets/icons';
import * as s from './indicatorFunding.css';

const { Foot, Caption } = Typography;

const regex = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
const numberToWon = (value: number) => `${value.toString().replace(regex, ',')}원`;

export interface IndicatorFundingProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  goalAmount: number;
}

export const IndicatorFunding = React.forwardRef<HTMLDivElement, IndicatorFundingProps>(
  ({ className, amount, goalAmount, ...props }: IndicatorFundingProps, ref) => {
    const percent = Math.floor((amount * 100) / goalAmount);

    return (
      <div ref={ref} className={clsx(s.indicator, className)} {...props}>
        <div className={s.stats}>
          <div className={s.statsAchieve({ disabled: percent === 0 })}>
            <HeartSolidPrimary className={s.statsIcon} />
            <span className={s.statsText}>{`${percent}% 달성`}</span>
          </div>
          <div className={s.amounts}>
            <Caption className={s.amountValue}>{`${numberToWon(amount)}`}</Caption>
            <Foot className={s.amountGoal} level={1}>
              {`/ ${numberToWon(goalAmount)}`}
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
