import { ReactNode } from "react";
import { styles } from "./Header.css";

type Props = {
  children: ReactNode;
};
export const Header = ({ children }: Props) => {
  return <h1 className={styles}>{children}</h1>;
};
