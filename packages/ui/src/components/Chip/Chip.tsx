import React from "react";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { chip } from "./Chip.css";

const { Caption } = Typography;

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  icon?: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ label, primary, icon, className, ...props }: ChipProps, ref) => {
    return (
      <Button
        ref={ref}
        borderless
        size="xsmall"
        primary={primary}
        className={clsx(chip({ primary }), className)}
        prefix={icon}
        {...props}
      >
        <Caption level={1}>{label}</Caption>
      </Button>
    );
  },
);
