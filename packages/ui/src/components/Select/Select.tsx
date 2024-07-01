"use client";

import {
  ButtonHTMLAttributes,
  Children,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import clsx from "clsx";
import * as S from "./Select.css";

import { BottomSheet, useBottomSheetContext } from "../BottomSheet/BottomSheet";

/**
 * Context
 */

type SelectState = {
  selected: string | null;
  setSelected: (select: string) => void;
};

const initialState = {
  selected: null,
  setSelected: () => {},
};

export const SelectContext = createContext<SelectState>(initialState);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(`cannot be renderered outside the DatePicker component`);
  }
  return context;
};

/**
 * Select
 */
export interface SelectProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}
export const SelectRoot = forwardRef<HTMLDivElement, SelectProps>(
  ({ children, ...props }, ref) => {
    const [selected, setSelected] = useState<string>("");

    const value = useMemo(
      () => ({ selected, setSelected }),
      [selected, setSelected],
    );

    return (
      <SelectContext.Provider value={value}>
        <BottomSheet ref={ref} {...props}>
          {children}
        </BottomSheet>
      </SelectContext.Provider>
    );
  },
);

/**
 * Trigger
 */
export interface TriggerProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}
export const Trigger = forwardRef<HTMLDivElement, TriggerProps>(
  ({ children, ...props }, ref) => {
    return (
      <BottomSheet.Trigger ref={ref} {...props}>
        {children}
      </BottomSheet.Trigger>
    );
  },
);

/**
 * Option List
 */
export interface OptionListProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title: string;
  closeIcon?: ReactNode;
  onChangeSelected?: (value: string) => void;
}
export const OptionList = forwardRef<HTMLDivElement, OptionListProps>(
  ({ title, closeIcon, onChangeSelected, children, ...props }, ref) => {
    const { selected } = useSelectContext();

    useEffect(() => {
      if (selected) {
        onChangeSelected?.(selected);
      }
    }, [selected, onChangeSelected]);

    return (
      <BottomSheet.Content ref={ref} {...props}>
        <BottomSheet.Header title={title} closeIcon={closeIcon} />
        <BottomSheet.Body className={S.optionList}>
          {Children.map(children, (child, index) => (
            <div key={index}>{child}</div>
          ))}
        </BottomSheet.Body>
      </BottomSheet.Content>
    );
  },
);

/**
 * Option
 */
export interface OptionProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  value: string;
}
export const Option = forwardRef<HTMLButtonElement, OptionProps>(
  ({ value, children, className, ...props }, ref) => {
    const { setSelected } = useSelectContext();
    const { toggle } = useBottomSheetContext();

    const handleOptionClick = useCallback(() => {
      setSelected(value);
      toggle();
    }, [toggle, setSelected, value]);

    return (
      <button
        ref={ref}
        {...props}
        className={clsx(S.option, className)}
        onClick={handleOptionClick}
      >
        {children}
      </button>
    );
  },
);

const CompoundSelect = Object.assign(SelectRoot, {
  Trigger,
  OptionList,
  Option,
});

export { CompoundSelect as Select };
