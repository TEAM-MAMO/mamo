import ReactDOM from "react-dom";
import * as S from "./ToastContainer.css";

import { Toast } from "./Toast";
import usePortal from "./hooks/usePortal";
import { useToastContext } from "./ToastContext";

export const ToastContainer = () => {
  const { toastList } = useToastContext();
  const portalRoot = usePortal("toast-portal");

  return portalRoot
    ? ReactDOM.createPortal(
        <div className={S.container}>
          {toastList.map((toast) => (
            <Toast key={toast.id} message={toast.message} />
          ))}
        </div>,
        portalRoot,
      )
    : null;
};
