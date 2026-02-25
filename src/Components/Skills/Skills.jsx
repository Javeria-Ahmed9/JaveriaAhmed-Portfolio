import { FaHtml5, FaCss3, FaReact, FaGitSquare, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiRedux, SiTailwindcss, SiVite, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  { icon: <FaHtml5 size={28} color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3 size={28} color="#1572B6" />, name: "CSS3" },
  { icon: <IoLogoJavascript size={28} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTypescript size={28} color="#3178C6" />, name: "TypeScript" },
  { icon: <FaReact size={28} color="#61DAFB" />, name: "React" },
  { icon: <SiRedux size={28} color="#764ABC" />, name: "Redux" },
  { icon: <SiTailwindcss size={28} color="#38BDF8" />, name: "Tailwind" },
  { icon: <FaNodeJs size={28} color="#6DA55F" />, name: "Node.js" },
  { icon: <SiMongodb size={28} color="#4DB33D" />, name: "MongoDB" },
  { icon: <FaGitSquare size={28} color="#F05032" />, name: "Git" },
  { icon: <FaGithub size={28} color="#fff" />, name: "GitHub" },
  { icon: <SiVite size={28} color="#646CFF" />, name: "Vite" },
];

const Skills = () => {
  return (
    <section id="Skills" className="px-6 md:px-20 py-24 bg-white/[0.02]">
      <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">What I Know</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/3 border border-white/8 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-white/20 hover:bg-white/5 transition-all"
          >
            {skill.icon}
            <span className="text-gray-400 text-xs">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
