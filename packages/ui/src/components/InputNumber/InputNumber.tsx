import React, { useState } from "react";
import { Typography } from "../Typography/Typography";
import {
  inputBoxStyle,
  inputStyle,
  labelStyle,
  unitStyle,
} from "./inputNumber.css";
import { helperStyle } from "../Input/input.css";
import { InputStateType, InputChangeEvent } from "../Input/Input";
import { numberFormat } from "../../utils";

const { Caption } = Typography;

export interface InputNumberProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  label: string;
  value?: string;
  state?: InputStateType;
  helperText?: string;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      label,
      value = "",
      state = "valid",
      helperText,
      className,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const changeHandler = (ev: InputChangeEvent) => {
      const regex = /^$|^[0-9]+$/;
      const val = ev.target.value.replaceAll(",", "");

      if (regex.test(val) || "") {
        setInputValue(numberFormat(val));
        onChange?.(ev);
      }
    };

    return (
      <div className={className}>
        <Caption className={labelStyle}>{label}</Caption>
        <div className={inputBoxStyle}>
          <input
            className={inputStyle({ state })}
            ref={ref}
            value={inputValue}
            onChange={changeHandler}
            {...props}
          />
          {inputValue !== "" && (
            <Caption level={3} className={unitStyle}>
              원
            </Caption>
          )}
        </div>
        {helperText && (
          <Caption className={helperStyle({ state })} level={3}>
            {helperText}
          </Caption>
        )}
      </div>
    );
  },
);
