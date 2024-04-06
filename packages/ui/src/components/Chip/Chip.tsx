import clsx from 'clsx';
import React from 'react';
import { chipIconStyles, chipStyles } from './chip.css';
import { Typography } from '../Typography/Typography';
import { PlusOutlined } from '../../assets/icons';

const { Caption } = Typography;

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ label, primary, className, ...props }: ChipProps, ref) => {
    return (
      <button ref={ref} className={clsx(chipStyles({ primary }), className)} {...props}>
        <PlusOutlined className={chipIconStyles({ primary })} />
        <Caption level={1}>{label}</Caption>
      </button>
    );
  }
);
