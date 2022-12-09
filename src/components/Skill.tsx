import type { FC, ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
};

const Skill: FC<Props> = ({ name, children }) => (
  <div className="flex items-center p-2">
    {children}
    <p className="pl-1">{name}</p>
  </div>
);

export default Skill;
