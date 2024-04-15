import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as s from './datePicker.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '../../assets/icons';

export interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(s.datePicker, className)} {...props}>
        <Calendar
          view="month"
          calendarType="US"
          formatDay={(locale, date) => dayjs(date).format('D')}
          prevLabel={<ArrowLeftOutlined />}
          nextLabel={<ArrowRightOutlined />}
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
        />
      </div>
    );
  }
);
