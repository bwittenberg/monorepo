import { ReactNode } from "react";
import { anchor, container } from "./Link.css";
import { Arrow } from "@bwittenberg/ui";

type Props = {
  children: ReactNode;
  href: string;
};

export const Link = ({ children, href }: Props) => {
  return (
    <div className={container}>
      <Arrow />
      <a
        className={anchor}
        rel="noopener noreferrer"
        target="_blank"
        href={href}
      >
        {children}
      </a>
    </div>
  );
};
