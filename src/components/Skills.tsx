import type { FC } from "react";
import Skill from "components/Skill";

import {
  SiHtml5,
  SiCss3,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiFlask,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiGit,
  SiGithub,
  SiMongodb,
} from "react-icons/si";

const Skills: FC = () => (
  <div>
    <p className="text-2xl underline underline-offset-2 decoration-orange-500">Skills</p>
    <div className="pl-4">
      <p className="text-lg">FrontEnd</p>
      <div className="flex flex-wrap pl-4">
        <Skill Name="HTML5">
          <SiHtml5 color="#E34F26" />
        </Skill>
        <Skill Name="CSS3">
          <SiCss3 color="#1572B6" />
        </Skill>
        <Skill Name="Jquery">
          <SiJquery color="#0769AD" />
        </Skill>
        <Skill Name="React">
          <SiReact color="#61DAFB" />
        </Skill>
        <Skill Name="Next.js">
          <SiNextdotjs />
        </Skill>
        <Skill Name="SCSS">
          <SiSass color="#CC6699" />
        </Skill>
        <Skill Name="TailWind CSS">
          <SiTailwindcss color="#06B6D4" />
        </Skill>
      </div>
      <p className="text-lg">BackEnd</p>
      <div className="flex flex-wrap pl-4">
        <Skill Name="Flask">
          <SiFlask />
        </Skill>
        <Skill Name="Google Apps Script">
          <SiJavascript color="#F7DF1E" />
        </Skill>
      </div>
      <p className="text-lg">Languages</p>
      <div className="flex flex-wrap pl-4">
        <Skill Name="Python">
          <SiPython color="#3776AB" />
        </Skill>
        <Skill Name="JavaScript">
          <SiJavascript color="#F7DF1E" />
        </Skill>
        <Skill Name="TypeScript">
          <SiTypescript color="#3178C6" />
        </Skill>
        <Skill Name="C">
          <SiC color="#A8B9CC" />
        </Skill>
      </div>
      <p className="text-lg">Others</p>
      <div className="flex flex-wrap pl-4">
        <Skill Name="Git">
          <SiGit color="#F05032" />
        </Skill>
        <Skill Name="GitHub">
          <SiGithub />
        </Skill>
        <Skill Name="MongoDB">
          <SiMongodb color="#47A248" />
        </Skill>
      </div>
    </div>
  </div>
);

export default Skills;
