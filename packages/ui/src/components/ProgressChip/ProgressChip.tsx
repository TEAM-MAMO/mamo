import React from 'react';
import clsx from 'clsx';
import * as s from './progressChip.css';
import { Typography } from '../Typography/Typography';

const { Foot } = Typography;

export type FundingProgressType = 'pause' | 'end' | 'doing';

export interface ProgressChipProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: FundingProgressType;
  deadline: number;
}

export const ProgressChip = React.forwardRef<HTMLDivElement, ProgressChipProps>(
  ({ progress, deadline, className, ...props }, ref) => {
    const progressText = () => {
      if (progress === 'doing') return `${deadline}일 남음`;
      if (progress === 'end') return '마감';
      return '중단';
    };
    return (
      <div
        ref={ref}
        className={clsx(s.progressStyle({ progress }), className)}
        {...props}
      >
        <Foot>{progressText()}</Foot>
      </div>
    );
  }
);
