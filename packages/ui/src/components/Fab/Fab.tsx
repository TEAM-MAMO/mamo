import React from "react";
import clsx from "clsx";
import * as s from "./fab.css";
import { PlusOutlined } from "../../assets/icons";

export type FabType = "circle" | "capsule";

export interface FabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: FabType;
  label: string;
  icon?: React.ReactNode;
}

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ shape = "circle", label, icon, className, ...props }: FabProps, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(s.fabButton({ shape }), className)}
        {...props}
      >
        <span className={s.fabIcon({ shape })}>{icon || <PlusOutlined />}</span>
        <span className={s.fabText({ shape })}>{label}</span>
      </button>
    );
  },
);
