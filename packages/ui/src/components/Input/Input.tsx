import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import * as S from "./Input.css";

import { Divider } from "../Divider/Divider";
import { Typography } from "../Typography/Typography";

const { Caption } = Typography;

export type InputStateType = "valid" | "error";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  state?: InputStateType;
  showCount?: boolean;
  helperText?: string;
  suffix?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      value = "",
      state = "valid",
      showCount = false,
      suffix,
      helperText,
      maxLength = 50,
      className,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={clsx(S.inputContainer, className)}>
        {label && <Caption className={S.label}>{label}</Caption>}
        <div className={S.inputBox}>
          <input
            ref={ref}
            value={value}
            data-state={state}
            className={S.input}
            onChange={onChange}
            {...props}
          />
          <Divider className={S.divider} />
          {(showCount || suffix) && (
            <div className={S.extra}>
              {showCount && (
                <div className={S.count}>{`${
                  value.toString().length || 0
                }/${maxLength}`}</div>
              )}
              {suffix && <div className={S.suffix}>{suffix}</div>}
            </div>
          )}
        </div>
        {helperText && (
          <Caption className={S.helper({ state })} level={3}>
            {helperText}
          </Caption>
        )}
      </div>
    );
  },
);
