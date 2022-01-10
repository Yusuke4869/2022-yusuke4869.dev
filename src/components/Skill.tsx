import type { FC, ReactNode } from "react";

type Props = {
  Name: string;
  children: ReactNode;
};

const Skill: FC<Props> = ({ Name, children }) => (
  <div className="flex items-center p-2">
    {children}
    <p className="pl-1">{Name}</p>
  </div>
);

export default Skill;
