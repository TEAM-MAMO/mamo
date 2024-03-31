import { Typography } from '../Typography/Typography';
import { buttonStyle, prefixStyle, suffixStyle, textStyle } from './button.css';

export interface ButtonProps {
  label: React.ReactNode;
  size?: 'small' | 'default';
  block?: boolean;
  primary?: boolean;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({
  label,
  size = 'default',
  block = false,
  primary = false,
  disabled = false,
  prefix,
  suffix,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyle({ size, block, primary, disabled })}
      onClick={onClick}
    >
      <span className={prefixStyle({ size })}>{prefix}</span>
      <div className={textStyle({ size })}>{label}</div>
      <span className={suffixStyle({ size })}>{suffix}</span>
    </button>
  );
};
