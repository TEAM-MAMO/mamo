import { RefObject, useEffect, useState } from "react";

// FIXME: shared workspace로 이동

export const useContentHeight = <T extends HTMLElement>(
  ref: RefObject<T>,
  isExpanded: boolean,
): number => {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setContentHeight(isExpanded ? ref.current.scrollHeight : 0);
    }
  }, [ref, isExpanded]);

  return contentHeight;
};
