import type { FC, ReactNode } from "react";
import Head from "next/head";

import Header from "components/Header";
import Footer from "components/Footer";

interface Information {
  PageTitle: string;
  PageDescription: string;
  PageImage: string;
}

type Props = {
  PageTitle: string;
  PageDescription?: string;
  PageImage?: string;
  children: ReactNode;
};

const DefaultDescription = "Yusuke's HomePage";
const DefaultImage = "https://github.com/yusuke4869.png";

const Metas: FC = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="icon" href="https://github.com/yusuke4869.png" />
  </>
);

const SeoMetas: FC<Information> = ({ PageTitle, PageDescription, PageImage }) => (
  <>
    <meta name="name" content={PageTitle} />
    <meta name="image" content={PageImage} />
    <meta name="description" content={PageDescription} />
  </>
);

const OgpMetas: FC<Information> = ({ PageTitle, PageDescription, PageImage }) => (
  <>
    <meta property="og:title" content={PageTitle} />
    <meta property="og:description" content={PageDescription} />
    <meta property="og:image" content={PageImage} />
    <meta property="og:image:alt" content="" />
    <meta property="og:site_name" content="" />
  </>
);

const TwitterMetas: FC<Information> = ({ PageTitle, PageDescription, PageImage }) => (
  <>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content={PageTitle} />
    <meta name="twitter:description" content={PageDescription} />
    <meta name="twitter:image" content={PageImage} />
  </>
);

const Layout: FC<Props> = ({ PageTitle, children, PageDescription = DefaultDescription, PageImage = DefaultImage }) => (
  <>
    <Head>
      <title>{PageTitle}</title>
      <Metas />
      <SeoMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
      <OgpMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
      <TwitterMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
    </Head>
    <main className="min-h-screen bg-gray-800 text-slate-200">
      <Header />
      {children}
      <Footer />
    </main>
  </>
);

Layout.defaultProps = {
  PageDescription: DefaultDescription,
  PageImage: DefaultImage,
};

export default Layout;
