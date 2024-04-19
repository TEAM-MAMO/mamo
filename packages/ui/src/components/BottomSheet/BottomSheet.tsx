import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import * as s from './bottomSheet.css';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { CloseOutlined } from '../../assets/icons';

const { Text, Heading, Caption } = Typography;

export interface BottomSheetProps {}

/**
 * BottomSheet Provider
 */
const BottomSheetContext = React.createContext<{
  open: boolean;
  isTransition: boolean;
  toggle: () => void;
} | null>(null);

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error(`cannot be rendererd outside the BottomSheet component`);
  }
  return context;
};

/**
 * BottomSheet
 */
export const BottomSheet = ({ children }: React.PropsWithChildren<BottomSheetProps>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isTransition, setIsTransition] = useState<boolean>(false);

  const toggle = useCallback(() => {
    if (open) {
      setIsTransition(true);
      setTimeout(() => {
        setIsTransition(false);
        setOpen(false);
      }, 500);
    } else {
      setOpen(true);
    }
  }, [open]);

  const value = useMemo(
    () => ({ open, toggle, isTransition }),
    [isTransition, open, toggle]
  );

  return (
    <BottomSheetContext.Provider value={value}>{children}</BottomSheetContext.Provider>
  );
};

/**
 * Trigger
 */
export interface TriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}
export const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  ({ label = 'Open', className }, ref) => {
    const { toggle } = useBottomSheetContext();

    return <Button ref={ref} className={className} onClick={toggle} label={label} />;
  }
);

/**
 * Content
 */
interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Content = React.forwardRef<HTMLDivElement, PropsWithChildren<ContentProps>>(
  ({ className, children, ...props }, ref) => {
    const { open, isTransition, toggle } = useBottomSheetContext();
    return (
      open && (
        <div ref={ref} className={clsx(s.contentStyle, className)} {...props}>
          <div
            className={s.overlayStyle({ open, close: isTransition })}
            onClick={toggle}
            aria-hidden="true"
          />
          <div className={s.sheetStyle({ open, close: isTransition })}>{children}</div>
        </div>
      )
    );
  }
);

/**
 * Confirm
 */
interface ConfirmProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}
const Confirm = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ConfirmProps>>(
  ({ title, description, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(s.confirmStyle, className)} {...props}>
        <Heading level={3} strong>
          {title}
        </Heading>
        {description && (
          <Caption level={2} className={s.descriptionStyle}>
            {description}
          </Caption>
        )}
      </div>
    );
  }
);

/**
 * Header
 */
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}
const Header = React.forwardRef<HTMLDivElement, React.PropsWithChildren<HeaderProps>>(
  ({ title, className, ...props }, ref) => {
    const { toggle } = useBottomSheetContext();

    return (
      <div
        ref={ref}
        className={clsx(s.headerStyle({ thin: !!title }), className)}
        {...props}
      >
        <Heading level={3}>{title}</Heading>
        <button
          className={s.closeStyle}
          type="button"
          aria-label="close"
          onClick={toggle}
        >
          <CloseOutlined />
        </button>
      </div>
    );
  }
);

/**
 * Body
 */
interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {}
const Body = React.forwardRef<HTMLDivElement, React.PropsWithChildren<BodyProps>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={s.bodyStyle} {...props}>
        {children}
      </div>
    );
  }
);

/**
 * Footer
 */
interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
const Footer = React.forwardRef<HTMLDivElement, React.PropsWithChildren<FooterProps>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(s.footerStyle, className)} {...props}>
        {children}
      </div>
    );
  }
);

/**
 * Menu
 */

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {}
const Menu = React.forwardRef<HTMLUListElement, React.PropsWithChildren<MenuProps>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} className={clsx(s.menuStyle, className)} {...props}>
        {children}
      </ul>
    );
  }
);

/**
 * Menu Item
 */
interface ItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}
const Item = React.forwardRef<HTMLLIElement, React.PropsWithChildren<ItemProps>>(
  ({ children, className, ...props }, ref) => {
    return (
      <li ref={ref} className={className} {...props}>
        <button className={s.itemStyle}>
          <Text>{children}</Text>
        </button>
      </li>
    );
  }
);

BottomSheet.Trigger = Trigger;
BottomSheet.Content = Content;
BottomSheet.Confirm = Confirm;
BottomSheet.Header = Header;
BottomSheet.Body = Body;
BottomSheet.Footer = Footer;
BottomSheet.Menu = Menu;
BottomSheet.Item = Item;

export default BottomSheet;
