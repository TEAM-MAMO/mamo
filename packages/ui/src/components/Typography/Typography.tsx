import {
  ElementType,
  HTMLAttributes,
  ParamHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from 'react';
import clsx from 'clsx';
import * as S from './typography.css';

/**
 * Typography Article
 */
export type TypographyProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const TypographyRoot = forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <article ref={ref} className={className} {...props}>
        {children}
      </article>
    );
  }
);

/**
 * Typography Heading
 * @param {number} level - Heading level value
 * - level `1`: Display 1
 * - level `2`: Heading 1, Heading 2
 * - level `3`: SubHeading 1, SubHeading 2
 * - level `4`: Title 1
 */
export interface HeadingProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  level?: 1 | 2 | 3 | 4;
  strong?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, strong = true, className, children, ...props }, ref) => {
    const HeadingLevel = `h${level}` as ElementType;

    return (
      <HeadingLevel
        ref={ref}
        className={clsx(S.heading({ level, strong }), className)}
        {...props}
      >
        {children}
      </HeadingLevel>
    );
  }
);

/**
 * Typography Body Text
 * @param {number} level - Body text level value
 * - level `1`: Body text 1
 * - level `2`: Body text 2
 * - level `3`: Body text 3
 */
export interface TextProps
  extends PropsWithChildren<ParamHTMLAttributes<HTMLParagraphElement>> {
  level?: 1 | 2 | 3;
  inline?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ level = 1, inline = false, className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={clsx(S.Text({ level, inline }), className)} {...props}>
        {children}
      </p>
    );
  }
);

/**
 * Typography Caption
 * @param {number} caption - Caption level value
 * - level `1`: Caption 1
 * - level `2`: Caption 2
 * - level `3`: Caption 3
 * - level `4`: Caption 4
 */
export interface CaptionProps
  extends PropsWithChildren<HTMLAttributes<HTMLParagraphElement>> {
  level?: 1 | 2 | 3 | 4;
  inline?: boolean;
}

const Caption = forwardRef<HTMLParagraphElement, CaptionProps>(
  ({ level = 1, inline = false, className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={clsx(S.Caption({ level, inline }), className)} {...props}>
        {children}
      </p>
    );
  }
);

/**
 * Typography Foot Note
 * @param {number} Foot - Foot note level value
 * - level `1`: Foot 1
 * - level `2`: Foot 2
 * - level `3`: Foot 3
 */
export interface FootProps
  extends PropsWithChildren<HTMLAttributes<HTMLParagraphElement>> {
  level?: 1 | 2 | 3;
  className?: string;
}

const Foot = forwardRef<HTMLParagraphElement, FootProps>(
  ({ level = 1, children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={clsx(S.Foot({ level }), className)} {...props}>
        {children}
      </p>
    );
  }
);

const Compound = Object.assign(TypographyRoot, {
  Heading,
  Text,
  Caption,
  Foot,
});

export { Compound as Typography };
