import React from "react";
import clsx from "clsx";
import {
  headingStyles,
  CaptionStyles,
  TextStyles,
  FootStyles,
} from "./typography.css";

/**
 * Typography Article
 */
export const Typography = ({ children }: React.PropsWithChildren) => {
  return <article>{children}</article>;
};

/**
 * Typography Heading
 * @param {number} level - Heading level value
 * - level `1`: Display 1
 * - level `2`: Heading 1, Heading 2
 * - level `3`: SubHeading 1, SubHeading 2
 * - level `4`: Title 1
 */
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  strong?: boolean;
}

const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.PropsWithChildren<HeadingProps>
>(({ level = 1, strong = true, className, children, ...props }, ref) => {
  const HeadingLevel = `h${level}` as React.ElementType;

  return (
    <HeadingLevel
      ref={ref}
      className={clsx(headingStyles({ level, strong }), className)}
      {...props}
    >
      {children}
    </HeadingLevel>
  );
});

/**
 * Typography Body Text
 * @param {number} level - Body text level value
 * - level `1`: Body text 1
 * - level `2`: Body text 2
 * - level `3`: Body text 3
 */
export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: 1 | 2 | 3;
  inline?: boolean;
}

const Text = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<TextProps>
>(({ level = 1, inline = false, className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(TextStyles({ level, inline }), className)}
      {...props}
    >
      {children}
    </div>
  );
});

/**
 * Typography Caption
 * @param {number} caption - Caption level value
 * - level `1`: Caption 1
 * - level `2`: Caption 2
 * - level `3`: Caption 3
 * - level `4`: Caption 4
 */
export interface CaptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  level?: 1 | 2 | 3 | 4;
  inline?: boolean;
}

const Caption = React.forwardRef<
  HTMLParagraphElement,
  React.PropsWithChildren<CaptionProps>
>(({ level = 1, inline = false, className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={clsx(CaptionStyles({ level, inline }), className)}
      {...props}
    >
      {children}
    </p>
  );
});

/**
 * Typography Foot Note
 * @param {number} Foot - Foot note level value
 * - level `1`: Foot 1
 * - level `2`: Foot 2
 * - level `3`: Foot 3
 */
export interface FootProps extends React.HTMLAttributes<HTMLParagraphElement> {
  level?: 1 | 2 | 3;
  className?: string;
}

const Foot = React.forwardRef<
  HTMLParagraphElement,
  React.PropsWithChildren<FootProps>
>(({ level = 1, children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={clsx(FootStyles({ level }), className)} {...props}>
      {children}
    </p>
  );
});

Typography.Heading = Heading;
Typography.Text = Text;
Typography.Caption = Caption;
Typography.Foot = Foot;
