import clsx from 'clsx';
import { buttonStyle, prefixStyle, suffixStyle, textStyle } from './button.css';

export interface ButtonProps {
  label: React.ReactNode;
  size?: 'small' | 'default';
  block?: boolean;
  primary?: boolean;
  disabled?: boolean;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  label,
  size = 'default',
  block = false,
  primary = false,
  disabled = false,
  className,
  prefix,
  suffix,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(buttonStyle({ size, block, primary, disabled }), className)}
      onClick={onClick}
    >
      <span className={prefixStyle({ size })}>{prefix}</span>
      <div className={textStyle({ size })}>{label}</div>
      <span className={suffixStyle({ size })}>{suffix}</span>
    </button>
  );
};
