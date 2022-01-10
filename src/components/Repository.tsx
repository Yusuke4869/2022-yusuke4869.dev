import type { FC } from "react";
import Link from "next/link";

type Props = {
  Username: string;
  Repo: string;
};

const Repository: FC<Props> = ({ Username, Repo }) => (
  <Link href={`https://github.com/${Username}/${Repo}`}>
    <a target="_blank" rel="noopener noreferrer">
      <img
        src={`https://github-readme-stats.vercel.app/api/pin/?username=${Username}&repo=${Repo}`}
        alt={`${Username}/${Repo}`}
      />
    </a>
  </Link>
);

export default Repository;
