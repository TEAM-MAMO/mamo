import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import * as s from './bottomSheet.css';
import { CloseOutlined } from '../../assets/icons';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';

const { Heading, Caption } = Typography;

export type BottomSheetType = 'default' | 'confirm' | 'list';

export interface BottomSheetBase {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}
export interface BottomSheetProps extends BottomSheetBase {
  type: BottomSheetType;
}

export const BottomSheet = ({
  type = 'default',
  isOpen = false,
  className,
  children,
  onClose,
}: PropsWithChildren<BottomSheetProps>) => {
  return (
    isOpen && (
      <div className={clsx(s.bottomSheet, className)}>
        <div className={s.layerDim} onClick={onClose} aria-hidden="true" />
        <div className={s.layerContent}>
          {type !== 'confirm' && (
            <div className={s.header({ type: 'default' })}>
              <button className={s.closeBtn} aria-label="close" onClick={onClose}>
                <CloseOutlined />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    )
  );
};

export interface BottomSheetConfirmProps extends BottomSheetBase {
  title: string;
  description: string;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  className?: string;
}

const Confirm = ({
  title,
  description,
  isOpen,
  okText,
  cancelText,
  onOk,
  onCancel,
  onClose,
  className,
}: BottomSheetConfirmProps) => {
  return (
    <BottomSheet type="confirm" isOpen={isOpen} onClose={onClose} className={className}>
      <div className={s.header({ type: 'confirm' })}>
        <Heading className={s.title} level={3}>
          {title}
        </Heading>
        <Caption className={s.description} level={2}>
          {description}
        </Caption>
      </div>
      <div className={s.buttons}>
        <Button label={okText} block primary onClick={onOk} />
        <button className={s.cancelBtn} onClick={onCancel}>
          {cancelText}
        </button>
      </div>
    </BottomSheet>
  );
};

export interface BottomSheetMenu {
  id: string;
  title: string;
}
export interface BottomSheetListProps extends BottomSheetBase {
  menu: BottomSheetMenu[];
  className?: string;
  onClickMenu?: (menu: BottomSheetMenu) => void;
}

const List = ({
  menu,
  className,
  isOpen,
  onClose,
  onClickMenu,
}: BottomSheetListProps) => {
  return (
    <BottomSheet type="list" isOpen={isOpen} onClose={onClose} className={className}>
      <div className={s.content}>
        <div className={s.menuList}>
          {menu.map((item) => (
            <button
              key={item.id}
              className={s.menuItem}
              onClick={() => onClickMenu?.(item)}
            >
              <Caption>{item.title}</Caption>
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
};

BottomSheet.Confirm = Confirm;
BottomSheet.List = List;
