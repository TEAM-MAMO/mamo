import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import * as S from './button.css';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  size?: 'xsmall' | 'small' | 'default';
  block?: boolean;
  primary?: boolean;
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
        className={clsx(
          S.button({ size, block, primary, disabled, borderless }),
          className
        )}
        {...props}
      >
        {prefix && <span>{prefix}</span>}
        <div className={S.text({ size })}>{children}</div>
        {suffix && <span>{suffix}</span>}
      </button>
    );
  }
);
