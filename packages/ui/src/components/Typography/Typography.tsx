import React from 'react';
import clsx from 'clsx';
import { headingStyles, CaptionStyles, TextStyles, FootStyles } from './typography.css';

/**
 * Typography Article
 */
export const Typography = ({ children }: React.PropsWithChildren) => {
  return <article>{children}</article>;
};

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  strong?: boolean;
  className?: string;
}

export interface TextProps {
  level?: 1 | 2 | 3;
  inline?: boolean;
  className?: string;
}

export interface CaptionProps {
  level?: 1 | 2 | 3 | 4;
  inline?: boolean;
  className?: string;
}

export interface FootProps {
  level?: 1 | 2 | 3;
  className?: string;
}

/**
 * Typography Heading
 * @param {number} level - Heading level value
 * - level `1`: Display 1
 * - level `2`: Heading 1, Heading 2
 * - level `3`: SubHeading 1, SubHeading 2
 * - level `4`: Title 1
 */
const Heading = ({
  level = 1,
  strong = true,
  className,
  children,
}: React.PropsWithChildren<HeadingProps>) => {
  const HeadingLevel = `h${level}` as React.ElementType;

  return (
    <HeadingLevel className={clsx(headingStyles({ level, strong }), className)}>
      {children}
    </HeadingLevel>
  );
};

/**
 * Typography Body Text
 * @param {number} level - Body text level value
 * - level `1`: Body text 1
 * - level `2`: Body text 2
 * - level `3`: Body text 3
 * @returns
 */
const Text = ({
  level = 1,
  inline = false,
  className,
  children,
}: React.PropsWithChildren<TextProps>) => {
  return <div className={clsx(TextStyles({ level, inline }), className)}>{children}</div>;
};

/**
 * Typography Caption
 * @param {number} caption - Caption level value
 * - level `1`: Caption 1
 * - level `2`: Caption 2
 * - level `3`: Caption 3
 * - level `4`: Caption 4
 */
const Caption = ({
  level = 1,
  inline = false,
  className,
  children,
}: React.PropsWithChildren<CaptionProps>) => {
  return <p className={clsx(CaptionStyles({ level, inline }), className)}>{children}</p>;
};

/**
 * Typography Foot Note
 * @param {number} Foot - Foot note level value
 * - level `1`: Foot 1
 * - level `2`: Foot 2
 * - level `3`: Foot 3
 */
const Foot = ({ className, level = 1, children }: React.PropsWithChildren<FootProps>) => {
  return <p className={(FootStyles({ level }), className)}>{children}</p>;
};

Typography.Heading = Heading;
Typography.Text = Text;
Typography.Caption = Caption;
Typography.Foot = Foot;
