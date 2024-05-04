import {
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useMemo,
  useState,
} from "react";

import { TabsContext } from "./TabsContext";

export interface TabsProps
  extends PropsWithChildren<
    Omit<HTMLAttributes<HTMLDivElement>, "defaultValue">
  > {
  defaultValue?: string | number;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, defaultValue, ...props }, ref?) => {
    const [currentTab, setCurrentTab] = useState(defaultValue);
    const contextValue = useMemo(
      () => ({
        currentTab,
        setCurrentTab,
      }),
      [currentTab],
    );

    return (
      <TabsContext.Provider value={contextValue}>
        <div ref={ref} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);
