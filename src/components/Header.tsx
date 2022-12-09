import Link from "next/link";
import type { FC } from "react";
import { FaGithub } from "react-icons/fa";

const Header: FC = () => (
  <div className="sticky top-0 bg-zinc-800 opacity-75">
    <div className="flex justify-evenly items-center py-2">
      <div>
        <Link href="/">
          <a className="text-2xl p-2">Yusuke</a>
        </Link>
        <Link href="https://blog.growthers.dev/yusuke4869/">
          <a className="text-xl ml-4 p-2" target="_blank" rel="noopener noreferrer">
            blog
          </a>
        </Link>
      </div>
      <div>
        <Link href="https://github.com/yusuke4869">
          <a className="text-2xl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </Link>
      </div>
    </div>
    <hr className="opacity-75 mb-4" />
  </div>
);

export default Header;
