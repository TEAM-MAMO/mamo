import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from "react";

interface ListProps<T> extends HTMLAttributes<HTMLUListElement> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  ref?: React.Ref<HTMLUListElement>;
}

export type ListComponent = <T>(props: ListProps<T>) => ReactNode;

export const List: ListComponent = forwardRef(
  ({ items, renderItem, ...restProps }, ref) => {
    return (
      <ul ref={ref} {...restProps}>
        {items.map(renderItem)}
      </ul>
    );
  },
);
