import { buttonStyle } from './button.css';

export interface ButtonProps {
  label: React.ReactNode;
  size?: 'small' | 'default';
  block?: boolean;
  primary?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({
  label,
  size = 'default',
  block = false,
  primary = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyle({ size, block, primary, disabled })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
