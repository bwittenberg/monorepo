import { ReactNode } from "react";
import { container } from "./Footer.css";

type Props = {
  children: ReactNode;
};

export const Footer = ({ children }: Props) => {
  return <div className={container}>{children}</div>;
};
