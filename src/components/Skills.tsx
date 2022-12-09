import Skill from "components/Skill";
import type { FC } from "react";
import {
  SiC,
  SiCss3,
  SiFastify,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills: FC = () => (
  <div>
    <p className="text-2xl underline underline-offset-2 decoration-orange-500">Skills</p>
    <div className="pl-4">
      <p className="text-lg">FrontEnd</p>
      <div className="flex flex-wrap pl-4">
        <Skill name="HTML5">
          <SiHtml5 color="#E34F26" />
        </Skill>
        <Skill name="CSS3">
          <SiCss3 color="#1572B6" />
        </Skill>
        <Skill name="Jquery">
          <SiJquery color="#0769AD" />
        </Skill>
        <Skill name="React">
          <SiReact color="#61DAFB" />
        </Skill>
        <Skill name="Next.js">
          <SiNextdotjs />
        </Skill>
        <Skill name="SCSS">
          <SiSass color="#CC6699" />
        </Skill>
        <Skill name="TailWind CSS">
          <SiTailwindcss color="#06B6D4" />
        </Skill>
      </div>
      <p className="text-lg">BackEnd</p>
      <div className="flex flex-wrap pl-4">
        <Skill name="Fastify">
          <SiFastify />
        </Skill>
        <Skill name="Flask">
          <SiFlask />
        </Skill>
        <Skill name="Google Apps Script">
          <SiJavascript color="#F7DF1E" />
        </Skill>
      </div>
      <p className="text-lg">Languages</p>
      <div className="flex flex-wrap pl-4">
        <Skill name="Python">
          <SiPython color="#3776AB" />
        </Skill>
        <Skill name="JavaScript">
          <SiJavascript color="#F7DF1E" />
        </Skill>
        <Skill name="TypeScript">
          <SiTypescript color="#3178C6" />
        </Skill>
        <Skill name="C">
          <SiC color="#A8B9CC" />
        </Skill>
      </div>
      <p className="text-lg">Others</p>
      <div className="flex flex-wrap pl-4">
        <Skill name="Git">
          <SiGit color="#F05032" />
        </Skill>
        <Skill name="GitHub">
          <SiGithub />
        </Skill>
        <Skill name="MongoDB">
          <SiMongodb color="#47A248" />
        </Skill>
      </div>
    </div>
  </div>
);

export default Skills;
