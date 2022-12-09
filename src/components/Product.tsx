import Repository from "components/Repository";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  Title: string;
  Description: string[];
  isRepo: boolean;
  Username: string;
  Repo: string;
  children: ReactNode;
};

type ProductProps = Props & {
  URL: string | null;
};

const Content: FC<Props> = ({ Title, Description, isRepo, Username, Repo, children }) => (
  <div className="flex flex-col py-2">
    <div className="flex items-center">
      <p className="text-lg">{Title}</p>
      <div className="pl-4 flex text-lg">{children}</div>
    </div>
    {Description.map((value) => (
      <p className="pl-6" key={value}>
        {value}
      </p>
    ))}
    <div className="mt-auto">{isRepo && <Repository Username={Username} Repo={Repo} />}</div>
  </div>
);

const Product: FC<ProductProps> = ({ Title, Description, URL, isRepo, Username, Repo, children }) => {
  if (URL) {
    return (
      <Link href={URL}>
        <a target="_blank" rel="noopener noreferrer">
          <Content Title={Title} Description={Description} isRepo={isRepo} Username={Username} Repo={Repo}>
            {children}
          </Content>
        </a>
      </Link>
    );
  }
  return (
    <Content Title={Title} Description={Description} isRepo={isRepo} Username={Username} Repo={Repo}>
      {children}
    </Content>
  );
};

export default Product;
