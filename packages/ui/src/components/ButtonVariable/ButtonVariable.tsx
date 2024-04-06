import React from 'react';
import clsx from 'clsx';
import { buttonStyle, textStyle, iconStyle } from './buttonVariable.css';
import { Typography } from '../Typography/Typography';

const { Caption } = Typography;

export interface ButtonVariableProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'default';
  label: React.ReactNode;
  icon?: React.ReactNode;
  iconType?: 'prefix' | 'suffix';
}

export const ButtonVariable = React.forwardRef<HTMLButtonElement, ButtonVariableProps>(
  ({ label, size = 'default', className, icon, iconType = 'prefix', ...props }, ref) => {
    return (
      <button ref={ref} className={clsx(buttonStyle({ size }), className)} {...props}>
        {iconType === 'prefix' && <span className={iconStyle}>{icon}</span>}
        <Caption className={textStyle}>{label}</Caption>
        {iconType === 'suffix' && <span className={iconStyle}>{icon}</span>}
      </button>
    );
  }
);
