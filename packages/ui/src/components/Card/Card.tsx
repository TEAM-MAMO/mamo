import { HTMLAttributes, PropsWithChildren, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';
import * as S from './card.css';
import { sprinkles } from '../../styles';
import { Divider } from '../Divider/Divider';

/**
 * Card Root
 */
export interface CardRootProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  divider?: boolean;
  borderless?: boolean;
  rounded?: boolean;
}

export const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(
  (
    {
      divider = false,
      borderless = true,
      rounded = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={clsx(S.card({ divider, borderless, rounded }), className)}
      >
        {divider && <Divider bolder className={S.divider} />}
        {children}
      </div>
    );
  }
);

/**
 * Header
 */
export interface HeaderProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  extra?: ReactNode;
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, children, extra, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={clsx(S.header, className)}>
        <div className={S.headerInner}>
          {children}
          {extra && <span className={S.extra}>{extra}</span>}
        </div>
      </div>
    );
  }
);

/**
 * Content
 */
export interface ContentProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  size?: 'small' | 'default' | 'large';
  extra?: ReactNode;
}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, size = 'default', extra, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={clsx(S.content({ size }), className)}>
        {children}

        {extra && <span className={S.extra}>{extra}</span>}
      </div>
    );
  }
);

/**
 * Grid
 */
export interface GridProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  column?: number;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={clsx(S.grid(), className)}>
        {children}
      </div>
    );
  }
);

/**
 * Image
 */
export interface ImageProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  size?: 'small' | 'default' | 'full';
  rounded?: boolean;
}

export const ImageBox = forwardRef<HTMLDivElement, ImageProps>(
  ({ size = 'default', rounded = true, className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={clsx(S.image({ size, rounded }), className)}>
        {children}
      </div>
    );
  }
);
/**
 * Information
 */
export type InformationProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Information = forwardRef<HTMLDivElement, InformationProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={clsx(S.information, className)}>
        {children}
      </div>
    );
  }
);

/**
 * Footer
 */

export type FooterProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ title, className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={clsx(S.footer, className)}>
        {children}
      </div>
    );
  }
);

const Compound = Object.assign(CardRoot, {
  Header,
  Content,
  Grid,
  ImageBox,
  Information,
  Footer,
});

export { Compound as Card };
