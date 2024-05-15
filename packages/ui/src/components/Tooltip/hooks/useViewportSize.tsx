import { useEffect, useState } from "react";

// TODO: 공통 훅으로 변경

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    viewportSize,
    setViewportSize,
    viewportWidth: viewportSize.width,
    viewportHeight: viewportSize.height,
  };
};
