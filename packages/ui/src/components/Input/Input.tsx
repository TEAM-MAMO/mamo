import React, { useState } from "react";
import clsx from "clsx";
import {
  inputBoxStyle,
  inputContainerStyle,
  inputStyle,
  toolsStyle,
  clearStyle,
  countStyle,
  helperStyle,
  labelStyle,
} from "./input.css";
import { Typography } from "../Typography/Typography";
import { DeleteSolid } from "../../assets/icons";

const { Caption } = Typography;

export type InputStateType = "valid" | "error";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: InputStateType;
  showCount?: boolean;
  helperText?: string;
  allowClear: boolean;
}

export type InputValue = string | number | ReadonlyArray<string>;
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      value = "",
      state = "valid",
      showCount = false,
      helperText,
      maxLength = 50,
      allowClear = false,
      className,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState<InputValue>(value);

    const changeHandler = (ev: InputChangeEvent) => {
      const val = ev.target.value;
      if (val.length <= maxLength) {
        setInputValue(ev.target.value);
        onChange?.(ev);
      }
    };

    const onClear = () => setInputValue("");

    return (
      <div className={clsx(inputContainerStyle, className)}>
        <Caption className={labelStyle}>{label}</Caption>
        <div className={inputBoxStyle}>
          <input
            ref={ref}
            value={inputValue}
            className={inputStyle({
              state,
              hasCount: showCount,
              hasClear: allowClear,
            })}
            onChange={changeHandler}
            {...props}
          />
          {(showCount || allowClear) && (
            <div className={toolsStyle}>
              {showCount && (
                <div className={countStyle}>{`${
                  inputValue.toString().length || 0
                }/${maxLength}`}</div>
              )}
              {allowClear && (
                <button
                  aria-label="clear"
                  className={clearStyle}
                  onClick={onClear}
                >
                  <DeleteSolid />
                </button>
              )}
            </div>
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
