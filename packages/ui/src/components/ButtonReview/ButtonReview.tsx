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

export interface ButtonReviewProps {
  state: ReviewStateType;
  selected?: boolean;
  className?: string;
  onClick?: (state: ReviewStateType, selected: boolean) => void;
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

export const ButtonReview = ({
  state,
  selected = false,
  className,
  onClick,
}: ButtonReviewProps) => {
  const review = stateIcon(state, selected);

  return (
    <button
      onClick={() => onClick?.(state, selected)}
      className={clsx(s.reviewButton({ selected }), className)}
    >
      <div className={s.reviewIcon({ selected })}>{review.icon}</div>
      <Caption level={2}>{review.text}</Caption>
    </button>
  );
};
