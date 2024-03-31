import clsx from 'clsx';
import * as s from './indicatorProgress.css';

export interface IndicatorProgressProps {
  step: number;
  maxStep: number;
  className?: string;
}

/**
 * Indicator Progress
 * @param {number} step - 현재 단계
 * @param {number} max - 최대 단계 (default: 5)
 */
export const IndicatorProgress = ({
  step,
  maxStep = 5,
  className,
}: IndicatorProgressProps) => {
  const percent = Math.floor((100 / maxStep) * step);

  return (
    <div className={clsx(s.progressTrack, className)}>
      <div className={s.progressBar} style={{ width: `${percent}%` }} />
    </div>
  );
};
