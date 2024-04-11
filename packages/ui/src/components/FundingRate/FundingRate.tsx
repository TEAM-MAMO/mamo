import React from 'react';
import clsx from 'clsx';
import * as s from './fundingRate.css';
import { HeartSolid } from '../../assets/icons';
import { Typography } from '../Typography/Typography';

const { Caption } = Typography;

export interface FundingRateProps extends React.HTMLAttributes<HTMLDivElement> {
  rate: number;
}

const FundingRate = React.forwardRef<HTMLDivElement, FundingRateProps>(
  ({ rate, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(s.fundingRateStyle({ disabled: rate === 0 }), className)}
        {...props}
      >
        <HeartSolid className={s.statsIconStyle} />
        <Caption className={s.rateTextStyle}>{`${rate}% 달성`}</Caption>
        <div />
      </div>
    );
  }
);

export default FundingRate;
