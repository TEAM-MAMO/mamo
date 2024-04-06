import React from 'react';
import { Typography } from '../Typography/Typography';
import { InputStateType } from '../Input/Input';
import { ArrowDownOutlined, ArrowRightOutlined } from '../../assets/icons';
import {
  helperStyle,
  iconStyle,
  inputBoxStyle,
  inputStyle,
  labelStyle,
} from './inputSelect.css';

const { Caption } = Typography;

export interface InputSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: InputStateType;
  helperText?: string;
  arrowType?: 'right' | 'down';
}
export const InputSelect = React.forwardRef<HTMLInputElement, InputSelectProps>(
  (
    {
      label,
      state = 'valid',
      value,
      arrowType = 'right',
      className,
      helperText,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        <Caption className={labelStyle}>{label}</Caption>
        <div className={inputBoxStyle}>
          <input
            ref={ref}
            readOnly
            value={value}
            className={inputStyle({ state })}
            onClick={onClick}
            {...props}
          />
          <span className={iconStyle}>
            {arrowType === 'right' ? <ArrowRightOutlined /> : <ArrowDownOutlined />}
          </span>
        </div>
        {helperText && (
          <Caption className={helperStyle({ state })} level={3}>
            {helperText}
          </Caption>
        )}
      </div>
    );
  }
);
