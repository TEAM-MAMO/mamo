import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import * as S from "./InputNumber.css";

import { Divider } from "../Divider/Divider";
import { InputStateType } from "../Input/Input";
import { Typography } from "../Typography/Typography";
import { helper } from "../Input/Input.css";

const { Caption } = Typography;

export interface InputNumberProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: InputStateType;
  helperText?: string;
  suffix?: ReactNode;
}

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      label,
      value,
      state = "valid",
      suffix,
      helperText,
      className,
      onChange,
      onFocus,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={className}>
        {label && <Caption className={S.label}>{label}</Caption>}
        <div className={S.inputBox}>
          <input
            ref={ref}
            type="number"
            data-state={state}
            className={S.input({ hasValue: !!value })}
            value={value}
            onChange={onChange}
            {...props}
          />
          <Divider className={S.divider} />
          {value && suffix && (
            <Caption level={3} className={S.suffix}>
              {suffix}
            </Caption>
          )}
        </div>
        {helperText && (
          <Caption className={helper({ state })} level={3}>
            {helperText}
          </Caption>
        )}
      </div>
    );
  },
);
