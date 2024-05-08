import { useCallback, useState } from "react";

// FIXME: 범용적인 Hook이므로 shared workspace에 추가해서 다른 워크 스페이스에서도 사용할 수 있도록 공유

export const useToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return { toggle, setToggle, handleToggle };
};
