import Product from "components/Product";
import type { FC } from "react";
import {
  SiDiscord,
  SiFlask,
  SiNextdotjs,
  SiPython,
  SiSass,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
} from "react-icons/si";

const Works: FC = () => (
  <div>
    <p className="text-2xl underline underline-offset-2 decoration-orange-500">Works</p>
    <div className="flex justify-center lg:justify-between flex-wrap ml-4">
      <Product
        Title="VC Notice Bot"
        Description={["Bot for Sending Notifications for Activity in Discord VC"]}
        URL={null}
        isRepo
        Username="Yusuke4869"
        Repo="vc-notice"
      >
        <SiTypescript color="#3178C6" />
        <SiDiscord color="#5865F2" />
      </Product>
      <Product
        Title="Get Tweets"
        Description={["Search on Twitter at Intervals"]}
        URL={null}
        isRepo
        Username="Yusuke4869"
        Repo="Get-Tweets"
      >
        <SiPython color="#3776AB" />
        <SiFlask />
        <SiTwitter color="#1DA1F2" />
      </Product>
      <Product
        Title="Growthers/Blog"
        Description={["Blog of Growthers"]}
        URL="https://blog.growthers.dev"
        isRepo
        Username="Growthers"
        Repo="Blog"
      >
        <SiTypescript color="#3178C6" />
        <SiNextdotjs />
        <SiSass color="#CC6699" />
        <SiTailwindcss color="#06B6D4" />
      </Product>
    </div>
  </div>
);

export default Works;
