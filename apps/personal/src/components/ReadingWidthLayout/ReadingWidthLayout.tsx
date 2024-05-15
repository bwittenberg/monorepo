import { ReactNode } from "react";
import { container } from "./styles.css";

type Props = {
  children: ReactNode;
};
export const ReadingWidthLayout = ({ children }: Props) => {
  return <div className={container}>{children}</div>;
};
