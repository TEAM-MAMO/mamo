import { dividerStyles } from './divider.css';

export interface DividerProps {
  bolder?: boolean;
}

export const Divider = ({ bolder = false }: DividerProps) => {
  return <div className={dividerStyles({ bolder })} />;
};
