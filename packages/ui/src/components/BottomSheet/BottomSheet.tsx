import {
  ReactNode,
  forwardRef,
  useState,
  useCallback,
  useContext,
  useMemo,
  HTMLAttributes,
  PropsWithChildren,
  LiHTMLAttributes,
  createContext,
} from 'react';
import clsx from 'clsx';
import * as s from './bottomSheet.css';
import { Typography } from '../Typography/Typography';

const { Text, Heading, Caption } = Typography;

/**
 * BottomSheet Provider
 */
const BottomSheetContext = createContext<{
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
export const BottomSheet = ({ children }: PropsWithChildren) => {
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
interface TriggerProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export const Trigger = forwardRef<HTMLDivElement, TriggerProps>(
  ({ children, ...props }, ref) => {
    const { toggle } = useBottomSheetContext();

    return (
      <div ref={ref} {...props} onClick={toggle} role="presentation">
        {children}
      </div>
    );
  }
);

/**
 * Content
 */
interface ContentProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open, isTransition, toggle } = useBottomSheetContext();
    return (
      open && (
        <div ref={ref} className={clsx(s.content, className)} {...props}>
          <div
            className={s.overlay({ open, close: isTransition })}
            onClick={toggle}
            aria-hidden="true"
          />
          <div className={s.sheet({ open, close: isTransition })}>{children}</div>
        </div>
      )
    );
  }
);

/**
 * Confirm
 */
interface ConfirmProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title: string;
  description?: string;
}

const Confirm = forwardRef<HTMLDivElement, ConfirmProps>(
  ({ title, description, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(s.confirm, className)} {...props}>
        <Heading level={3} strong>
          {title}
        </Heading>
        {description && (
          <Caption level={2} className={s.description}>
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
interface HeaderProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title?: string;
  closeIcon?: ReactNode;
}
const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ title, closeIcon, className, ...props }, ref) => {
    const { toggle } = useBottomSheetContext();

    return (
      <div ref={ref} className={clsx(s.header({ thin: !!title }), className)} {...props}>
        <Heading level={3}>{title}</Heading>
        {closeIcon && (
          <button className={s.close} type="button" aria-label="close" onClick={toggle}>
            {closeIcon}
          </button>
        )}
      </div>
    );
  }
);

/**
 * Body
 */
interface BodyProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

const Body = forwardRef<HTMLDivElement, BodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={s.body} {...props}>
        {children}
      </div>
    );
  }
);

/**
 * Footer
 */
interface FooterProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(s.footer, className)} {...props}>
        {children}
      </div>
    );
  }
);

/**
 * Menu
 */
interface MenuProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {}

const Menu = forwardRef<HTMLUListElement, MenuProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} className={clsx(s.menu, className)} {...props}>
        {children}
      </ul>
    );
  }
);

/**
 * Menu Item
 */
interface ItemProps extends PropsWithChildren<LiHTMLAttributes<HTMLLIElement>> {}

const Item = forwardRef<HTMLLIElement, ItemProps>(({ children, ...props }, ref) => {
  return (
    <li ref={ref} {...props}>
      <button className={s.item}>
        <Text>{children}</Text>
      </button>
    </li>
  );
});

BottomSheet.Trigger = Trigger;
BottomSheet.Content = Content;
BottomSheet.Confirm = Confirm;
BottomSheet.Header = Header;
BottomSheet.Body = Body;
BottomSheet.Footer = Footer;
BottomSheet.Menu = Menu;
BottomSheet.Item = Item;

export default BottomSheet;
