import { InputHTMLAttributes, forwardRef } from 'react';
import { Typography } from '../Typography/Typography';
import { InputStateType } from '../Input/Input';
import { ArrowDownOutlined, ArrowRightOutlined } from '../../assets/icons';
import * as S from './select.css';
import { helper } from '../Input/input.css';

const { Caption } = Typography;

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  state?: InputStateType;
  helperText?: string;
  arrowType?: 'right' | 'down';
}
export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      label,
      value,
      state = 'valid',
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
        {label && <Caption className={S.label}>{label}</Caption>}
        <div className={S.inputBox}>
          <input
            ref={ref}
            readOnly
            value={value}
            className={S.input({ state })}
            onClick={onClick}
            {...props}
          />
          <span className={S.icon}>
            {arrowType === 'right' ? <ArrowRightOutlined /> : <ArrowDownOutlined />}
          </span>
        </div>
        {helperText && (
          <Caption className={helper({ state })} level={3}>
            {helperText}
          </Caption>
        )}
      </div>
    );
  }
);
