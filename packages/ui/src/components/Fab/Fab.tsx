import clsx from 'clsx';
import * as s from './fab.css';
import { PlusOutlined } from '../../assets/icons';

export type FabType = 'circle' | 'capsule';

export interface FabProps {
  type?: FabType;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Fab = ({ type = 'circle', label, icon, className, onClick }: FabProps) => {
  return (
    <button className={clsx(s.fabButton({ type }), className)} onClick={onClick}>
      <span className={s.fabIcon({ type })}>{icon || <PlusOutlined />}</span>
      <span className={s.fabText({ type })}>{label}</span>
    </button>
  );
};
