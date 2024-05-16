import "react-calendar/dist/Calendar.css";

import Calendar, { OnClickFunc } from "react-calendar";
import {
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import clsx from "clsx";
import dayjs from "dayjs";
import { ArrowLeftOutlined, ArrowRightOutlined } from "../../assets/icons";
import * as s from "./DatePicker.css";
import { sprinkles } from "../../styles";

/**
 * Context
 */
type DatePickerState = {
  isOpen: boolean;
  toggle: () => void;
};

const initialState = {
  isOpen: false,
  toggle: () => {},
};

export const DatePickerContext = createContext<DatePickerState>(initialState);

export const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);
  if (!context) {
    throw new Error(`cannot be renderered outside the DatePicker component`);
  }
  return context;
};

/**
 * Provider
 */
export interface DatePickerProps extends PropsWithChildren {}
export const DatePickerRoot = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = useCallback(() => {
      setIsOpen((state) => !state);
    }, []);

    const value = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

    return (
      <DatePickerContext.Provider value={value}>
        <div
          ref={ref}
          {...props}
          className={clsx(sprinkles({ position: "relative" }))}
        >
          {children}
        </div>
      </DatePickerContext.Provider>
    );
  },
);

/**
 * Trigger
 */
export interface TriggerProps extends PropsWithChildren {}
export const Trigger = forwardRef<HTMLDivElement, TriggerProps>(
  ({ children, ...props }, ref) => {
    const { toggle } = useDatePickerContext();
    return (
      <div
        ref={ref}
        {...props}
        className={clsx(sprinkles({ display: "inline-block" }))}
        onClick={toggle}
        role="presentation"
      >
        {children}
      </div>
    );
  },
);

/**
 * DatePicker.Panel
 */
export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  onClickDay?: OnClickFunc;
}
export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ className, onClickDay, ...props }, ref) => {
    const { isOpen, toggle } = useDatePickerContext();

    const handleTabClick: OnClickFunc = (value, e) => {
      onClickDay?.(value, e);
      toggle();
    };

    return (
      <div
        ref={ref}
        className={clsx(s.panel({ isOpen }), className)}
        {...props}
      >
        <Calendar
          view="month"
          calendarType="gregory"
          formatDay={(locale, date) => dayjs(date).format("D")}
          prevLabel={<ArrowLeftOutlined />}
          nextLabel={<ArrowRightOutlined />}
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
          onClickDay={handleTabClick}
        />
      </div>
    );
  },
);

const CompoundDatePicker = Object.assign(DatePickerRoot, {
  Trigger,
  Panel,
});

export { CompoundDatePicker as DatePicker };
