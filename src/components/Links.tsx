import type { FC } from "react";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

const Links: FC = () => (
  <div>
    <p className="text-2xl underline underline-offset-2 decoration-orange-500">Links</p>
    <div className="flex pl-4 pt-2">
      <Link href="https://github.com/yusuke4869">
        <a
          className="flex items-center text-lg p-2 hover:bg-gray-600 hover:rounded-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <p className="pl-1">GitHub</p>
        </a>
      </Link>
      <Link href="https://blog.growthers.dev/yusuke4869/">
        <a
          className="flex items-center text-lg p-2 hover:bg-gray-600 hover:rounded-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdArticle />
          <p className="pl-1">Blog</p>
        </a>
      </Link>
    </div>
  </div>
);

export default Links;
