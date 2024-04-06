import React from 'react';
import clsx from 'clsx';
import * as s from './buttonReview.css';
import {
  HappyOutlined,
  HappySolid,
  SadOutlined,
  SadSolid,
  SmileOutlined,
  SmileSolid,
} from '../../assets/icons';
import { Typography } from '../Typography/Typography';

const { Caption } = Typography;

export type ReviewStateType = 'sad' | 'smile' | 'happy';

export interface ButtonReviewProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: ReviewStateType;
  selected?: boolean;
}

const stateIcon = (state: ReviewStateType, selected: boolean) => {
  switch (state) {
    case 'sad':
      return {
        icon: selected ? <SadSolid /> : <SadOutlined />,
        text: '아쉬웠어요',
      };
    case 'happy':
      return {
        icon: selected ? <HappySolid /> : <HappyOutlined />,
        text: '만족했어요',
      };
    default:
      return {
        icon: selected ? <SmileSolid /> : <SmileOutlined />,
        text: '보통이에요',
      };
  }
};

export const ButtonReview = React.forwardRef<HTMLButtonElement, ButtonReviewProps>(
  ({ state, selected = false, onClick, className, ...props }: ButtonReviewProps, ref) => {
    const review = stateIcon(state, selected);

    return (
      <button
        onClick={onClick}
        className={clsx(s.reviewButton({ selected }), className)}
        ref={ref}
        {...props}
      >
        <div className={s.reviewIcon({ selected })}>{review.icon}</div>
        <Caption level={2}>{review.text}</Caption>
      </button>
    );
  }
);
