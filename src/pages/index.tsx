import Layout from "components/Layout";
import Links from "components/Links";
import Profile from "components/Profile";
import Skills from "components/Skills";
import Works from "components/Works";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <Layout PageTitle="Yusuke - Home">
    <div className="w-4/5 lg:w-11/12 m-auto flex flex-col justify-center">
      <Profile />
      <hr className="opacity-75 py-1 my-2" />
      <Skills />
      <hr className="opacity-75 py-1 my-2" />
      <Works />
      <hr className="opacity-75 py-1 my-2" />
      <Links />
    </div>
  </Layout>
);

export default Home;
