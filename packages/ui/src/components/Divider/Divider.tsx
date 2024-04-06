import React from 'react';
import { dividerStyles } from './divider.css';

export interface DividerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  bolder?: boolean;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ bolder = false, ...props }: DividerProps, ref) => {
    return <div ref={ref} className={dividerStyles({ bolder })} {...props} />;
  }
);
