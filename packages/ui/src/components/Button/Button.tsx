import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import * as S from './button.css';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  size?: 'xxsmall' | 'xsmall' | 'small' | 'default';
  block?: boolean;
  primary?: boolean;
  disabled?: boolean;
  borderless?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      size = 'default',
      block = false,
      primary = false,
      disabled = false,
      borderless = false,
      className,
      prefix,
      suffix,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          S.button({ size, block, primary, disabled, borderless }),
          className
        )}
        {...props}
      >
        {prefix && <span>{prefix}</span>}
        {children}
        {suffix && <span>{suffix}</span>}
      </button>
    );
  }
);
