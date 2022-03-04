import type { FC } from "react";
import Product from "components/Product";

import {
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiFlask,
  SiSass,
  SiTailwindcss,
  SiDiscord,
  SiTwitter,
} from "react-icons/si";

const Works: FC = () => (
  <div>
    <p className="text-2xl underline underline-offset-2 decoration-orange-500">Works</p>
    <div className="flex justify-center lg:justify-between flex-wrap ml-4">
      <Product
        Title="VC Notice Bot"
        Description={["Bot for Sending Notifications for Activity in Discord VC", "With discord.py"]}
        URL={null}
        isRepo
        Username="Yusuke4869"
        Repo="discord-vc-notice"
      >
        <SiPython color="#3776AB" />
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
        Description={["Blog of Growthers", "With Next.js and Tailwind CSS"]}
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
