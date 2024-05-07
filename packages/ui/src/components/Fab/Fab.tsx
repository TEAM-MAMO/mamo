import React from 'react';
import clsx from 'clsx';
import * as s from './fab.css';
import { Button } from '../Button/Button';

export type FabType = 'circle' | 'capsule';

export interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: FabType;
  label: string;
  icon?: React.ReactNode;
}

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ shape = 'circle', label, icon, className, ...props }: FabProps, ref) => {
    return (
      <Button
        primary
        size="default"
        ref={ref}
        align={shape === 'circle' ? 'vertical' : 'horizontal'}
        className={clsx(s.fabButton({ shape }), className)}
        prefix={icon}
        {...props}
      >
        <span className={s.fabText({ shape })}>{label}</span>
      </Button>
    );
  }
);
