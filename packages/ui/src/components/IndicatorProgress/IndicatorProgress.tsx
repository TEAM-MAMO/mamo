import clsx from 'clsx';
import React from 'react';
import * as s from './indicatorProgress.css';

export interface IndicatorProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  maxStep: number;
  className?: string;
}

/**
 * Indicator Progress
 * @param {number} step - 현재 단계
 * @param {number} max - 최대 단계 (default: 5)
 */
export const IndicatorProgress = React.forwardRef<HTMLDivElement, IndicatorProgressProps>(
  ({ step, maxStep = 5, className, ...props }: IndicatorProgressProps, ref) => {
    const percent = Math.floor((100 / maxStep) * step);

    return (
      <div ref={ref} className={clsx(s.progressTrack, className)} {...props}>
        <div className={s.progressBar} style={{ width: `${percent}%` }} />
      </div>
    );
  }
);
