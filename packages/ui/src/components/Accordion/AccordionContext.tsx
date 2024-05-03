import { Dispatch, SetStateAction, createContext, useContext } from "react";

// TODO: 나중에 context 폴더로 옮기기

type AccordionContextState = {
  setOpen: Dispatch<SetStateAction<boolean>>;

  open?: boolean;
};

const initialState = {
  open: false,
  setOpen: () => {},
  contentHeight: 0,
};

export const AccoridonContext =
  createContext<AccordionContextState>(initialState);

export const useAccordionContext = () => {
  const context = useContext(AccoridonContext);
  if (!context) {
    throw new Error("It should be rendered in the Accordion component");
  }
  return context;
};
