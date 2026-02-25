import { FaGithub, FaLinkedin } from "react-icons/fa";

const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "10+" },
  { label: "GitHub Repos", value: "20+" },
];

const About = () => {
  return (
    <section id="About" className="px-6 md:px-20 py-24">
      <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">About Me</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Who I Am</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a frontend developer with a strong foundation in React, JavaScript, and TypeScript. I enjoy building projects that are both functional and visually polished.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            I'm currently expanding my skills into full stack development, working with Node.js and backend technologies. I believe in writing clean, maintainable code and continuously improving.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/Javeria-Ahmed9"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/javeria-ahmed09"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}

          <div className="col-span-3 bg-white/3 border border-white/8 rounded-2xl p-6">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Currently</p>
            <p className="text-white text-sm">Learning full stack development — Next.js, Node.js, and databases.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
