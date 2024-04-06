import React from 'react';
import clsx from 'clsx';
import { buttonStyle, prefixStyle, suffixStyle, textStyle } from './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  size?: 'small' | 'default';
  block?: boolean;
  primary?: boolean;
  borderless?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      size = 'default',
      block = false,
      primary = false,
      disabled = false,
      borderless = false,
      className,
      prefixIcon,
      suffixIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          buttonStyle({ size, block, primary, disabled, borderless }),
          className
        )}
        {...props}
      >
        <span className={prefixStyle({ size })}>{prefixIcon}</span>
        <div className={textStyle({ size })}>{label}</div>
        <span className={suffixStyle({ size })}>{suffixIcon}</span>
      </button>
    );
  }
);
