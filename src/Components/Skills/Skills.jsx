import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaGitSquare,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiNetlify } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
// import { } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div
          id="content"
          className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10"
        >
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTypescript size={50} color="#f5e505" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux color="#f043b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNetlify color="#43f0ea" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGitSquare color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#2828bd" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <IoLogoJavascript color="#f5e505" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <h1
              style={{
                width: "55px",
                height: "49px",
                paddingTop: "7px",
                color: "#e4e4f7",
                fontWeight: "bolder",
                fontSize: "22px",
                marginLeft: "-6px",
              }}
            >
              <p>Versel</p>
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
