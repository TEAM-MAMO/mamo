import { chipIconStyles, chipStyles } from './chip.css';
import { Typography } from '../Typography/Typography';
import { PlusOutlined } from '../../assets/icons';

const { Caption } = Typography;

export interface ChipProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export const Chip = ({ label, primary, onClick }: ChipProps) => {
  return (
    <button type="button" className={chipStyles({ primary })} onClick={onClick}>
      <PlusOutlined className={chipIconStyles({ primary })} />
      <Caption level={1}>{label}</Caption>
    </button>
  );
};
