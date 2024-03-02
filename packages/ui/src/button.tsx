"use client";

import { ReactNode } from "react";
import stylex from "@stylexjs/stylex";

interface ButtonProps {
  children: ReactNode;
}

const s = stylex.create({
  base: {
    fontSize: 20,
    lineHeight: 2,
    color: "orange",
  },
  highlighted: {
    color: "rebeccapurple",
  },
});

export const Button = ({ children }: ButtonProps) => {
  return <button className={stylex(s.base)}>{children}</button>;
};
