import { HTMLAttributes, ReactNode, Ref, forwardRef } from "react";

interface ListProps<T> extends HTMLAttributes<HTMLUListElement> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const List = <T,>() =>
  forwardRef<HTMLUListElement, ListProps<T>>(
    ({ items, renderItem, ...restProps }, ref?) => {
      return (
        <ul ref={ref} {...restProps}>
          {items.map(renderItem)}
        </ul>
      );
    },
  );
