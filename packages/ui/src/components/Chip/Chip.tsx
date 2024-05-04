import clsx from 'clsx';
import React from 'react';
import { chipIcon, chip } from './chip.css';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';

const { Caption } = Typography;

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  icon?: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ label, primary, icon, className, ...props }: ChipProps, ref) => {
    return (
      <Button
        ref={ref}
        borderless
        size="xxsmall"
        primary={primary}
        className={clsx(chip({ primary }), className)}
        {...props}
      >
        {icon && <span className={chipIcon({ primary })}>{icon}</span>}
        <Caption level={1}>{label}</Caption>
      </Button>
    );
  }
);
