import { LiHTMLAttributes, PropsWithChildren, forwardRef } from "react";
import * as S from "./TabsTrigger.css";

import { ListItem } from "../List/ListItem";
import { Typography } from "../Typography/Typography";
import { useTabsContext } from "./TabsContext";

export interface TabsTriggerProps
  extends PropsWithChildren<LiHTMLAttributes<HTMLLIElement>> {
  value: string;
}

export const TabsTrigger = forwardRef<HTMLLIElement, TabsTriggerProps>(
  ({ children, value, ...props }, ref?) => {
    const { currentTab, setCurrentTab } = useTabsContext();
    const handleTabClick = () => {
      setCurrentTab(value);
    };

    const isActive = currentTab === value;

    return (
      <ListItem
        className={S.trigger({ isActive })}
        {...props}
        ref={ref}
        onClick={handleTabClick}
      >
        <Typography.Heading level={4} className={S.tab({ isActive })}>
          {children}
        </Typography.Heading>
      </ListItem>
    );
  },
);
