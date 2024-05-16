import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";
import * as S from "./TabsContent.css";

import { useTabsContext } from "./TabsContext";

export interface TabsContentProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  value: string;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, value, ...props }, ref?) => {
    const { currentTab } = useTabsContext();

    const isActive = currentTab === value;

    return (
      <div ref={ref} {...props} className={S.content({ isActive })}>
        {children}
      </div>
    );
  },
);
