import React from 'react';
import { headingStyles, CaptionStyles, TextStyles, FootStyles } from './typography.css';

/**
 * Typography Article
 */
export const Typography = ({ children }: React.PropsWithChildren) => {
  return <article>{children}</article>;
};

export interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  strong?: boolean;
}

export interface TextProps {
  level: 1 | 2 | 3;
  inline?: boolean;
}

export interface CaptionProps {
  level: 1 | 2 | 3 | 4;
  inline?: boolean;
}

export interface FootProps {
  level: 1 | 2 | 3;
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
  children,
}: React.PropsWithChildren<HeadingProps>) => {
  const HeadingLevel = `h${level}` as React.ElementType;

  return (
    <HeadingLevel className={headingStyles({ level, strong })}>{children}</HeadingLevel>
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
  children,
}: React.PropsWithChildren<TextProps>) => {
  return <p className={TextStyles({ level, inline })}>{children}</p>;
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
  children,
}: React.PropsWithChildren<CaptionProps>) => {
  return <p className={CaptionStyles({ level, inline })}>{children}</p>;
};

/**
 * Typography Foot Note
 * @param {number} Foot - Foot note level value
 * - level `1`: Foot 1
 * - level `2`: Foot 2
 * - level `3`: Foot 3
 */
const Foot = ({ level = 1, children }: React.PropsWithChildren<FootProps>) => {
  return <p className={FootStyles({ level })}>{children}</p>;
};

Typography.Heading = Heading;
Typography.Text = Text;
Typography.Caption = Caption;
Typography.Foot = Foot;
