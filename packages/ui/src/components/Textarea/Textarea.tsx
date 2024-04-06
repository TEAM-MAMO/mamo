import React, { useState } from 'react';
import { Typography } from '../Typography/Typography';
import {
  labelStyle,
  textBoxStyle,
  textareaStyle,
  countStyle,
  helperStyle,
} from './textarea.css';

const { Caption } = Typography;

type TextareaStateType = 'valid' | 'error';

export type TextareaValue = string | number | ReadonlyArray<string>;
export type TextareaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  state?: TextareaStateType;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      value = '',
      state = 'valid',
      maxLength = 200,
      helperText,
      className,
      onChange,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState<TextareaValue>(value);

    const changeHandler = (ev: TextareaChangeEvent) => {
      const val = ev.target.value;
      if (val.length <= maxLength) {
        setInputValue(ev.target.value);
        onChange?.(ev);
      }
    };

    return (
      <div className={className}>
        <Caption className={labelStyle}>{label}</Caption>
        <div className={textBoxStyle}>
          <textarea
            rows={1}
            ref={ref}
            value={inputValue}
            className={textareaStyle}
            onChange={changeHandler}
            {...props}
          />
          <div className={countStyle}>
            {`${inputValue.toString().length || 0}/${maxLength}`}
          </div>
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
