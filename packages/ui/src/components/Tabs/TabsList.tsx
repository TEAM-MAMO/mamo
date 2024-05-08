import {
  Children,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  isValidElement,
  useEffect,
} from "react";

import clsx from "clsx";
import { sprinkles } from "../../styles";
import { useTabsContext } from "./TabsContext";

export interface TabsListProps
  extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {}

export const TabsList = forwardRef<HTMLUListElement, TabsListProps>(
  ({ children, className, ...props }, ref?) => {
    const { currentTab, setCurrentTab } = useTabsContext();

    useEffect(() => {
      if (currentTab === undefined) {
        const firstChild = Children.toArray(children)[0];
        if (isValidElement(firstChild) && firstChild.props.value) {
          setCurrentTab(firstChild.props.value);
        }
      }
    }, [currentTab, children, setCurrentTab]);

    return (
      <ul
        className={clsx(
          sprinkles({ display: "flex", alignItems: "center" }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </ul>
    );
  },
);
