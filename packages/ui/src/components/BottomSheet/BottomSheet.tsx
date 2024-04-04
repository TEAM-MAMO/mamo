import React, { PropsWithChildren, useContext, useMemo, useState } from 'react';
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
  toggle: () => void;
} | null>(null);

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error(`cannot be rendererd outside the BottomSheet component`);
  }
  return context;
};

export const BottomSheet = ({ children }: React.PropsWithChildren<BottomSheetProps>) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen((state) => !state);

  const value = useMemo(() => ({ open, toggle }), [open]);

  return (
    <BottomSheetContext.Provider value={value}>{children}</BottomSheetContext.Provider>
  );
};

/**
 * Trigger
 */
export const Trigger = () => {
  const { open, toggle } = useBottomSheetContext();

  return <Button onClick={toggle} label="Open" />;
};

/**
 * Content
 */
export const Content = ({ children }: PropsWithChildren) => {
  const { open, toggle } = useBottomSheetContext();
  return (
    open && (
      <div className={s.contentStyle}>
        <div className={s.overlayStyle} onClick={toggle} aria-hidden="true" />
        <div className={s.sheetStyle}>{children}</div>
      </div>
    )
  );
};

/**
 * Confirm
 */
interface ConfirmProps {
  title: string;
  description?: string;
}
const Confirm = ({ title, description }: React.PropsWithChildren<ConfirmProps>) => {
  return (
    <div className={s.confirmStyle}>
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
};

/**
 * Header
 */
interface HeaderProps {
  title?: string;
}
const Header = ({ title }: React.PropsWithChildren<HeaderProps>) => {
  const { toggle } = useBottomSheetContext();

  return (
    <div className={s.headerStyle({ thin: !!title })}>
      <Heading level={3}>{title}</Heading>
      <button className={s.closeStyle} type="button" aria-label="close" onClick={toggle}>
        <CloseOutlined />
      </button>
    </div>
  );
};

/**
 * Body
 */
const Body = ({ children }: React.PropsWithChildren) => {
  return <div className={s.bodyStyle}>{children}</div>;
};

/**
 * Footer
 */
const Footer = ({ children }: React.PropsWithChildren) => {
  return <div className={s.footerStyle}>{children}</div>;
};

/**
 * Menu
 */
const Menu = ({ children }: React.PropsWithChildren) => {
  return <ul className={s.menuStyle}>{children}</ul>;
};

/**
 * Menu Item
 */
const Item = ({ children }: React.PropsWithChildren) => {
  return (
    <li>
      <button className={s.itemStyle}>
        <Text>{children}</Text>
      </button>
    </li>
  );
};

BottomSheet.Trigger = Trigger;
BottomSheet.Content = Content;
BottomSheet.Confirm = Confirm;
BottomSheet.Header = Header;
BottomSheet.Body = Body;
BottomSheet.Footer = Footer;
BottomSheet.Menu = Menu;
BottomSheet.Item = Item;

export default BottomSheet;
