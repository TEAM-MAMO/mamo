import { useCallback } from "react";
import { useToastContext } from "../ToastContext";

export const useToast = () => {
  const { setToastList } = useToastContext();
  const showToast = useCallback(
    (message: string, duration: number = 1300) => {
      const id = new Date().getTime();
      const newToast = { id, message, duration };
      setToastList((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToastList((toasts) => toasts.filter((toast) => toast.id !== id));
      }, duration);
    },
    [setToastList],
  );

  return showToast;
};
