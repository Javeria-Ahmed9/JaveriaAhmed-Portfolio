import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = ["Frontend Developer", "React Developer", "UI Enthusiast"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="Home" className="min-h-screen flex items-center px-6 md:px-20 pt-20">
      <div className="max-w-2xl">
        <p className="text-blue-400 text-sm mb-4 tracking-widest uppercase">Welcome</p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Javeria Ahmed
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-400 mb-6 h-8">
          {displayed}
          <span className="animate-pulse text-blue-400">|</span>
        </h2>

        <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
          A passionate frontend developer focused on building clean, responsive web applications with React. Always eager to learn and take on new challenges.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1WTZue-UGjzahflKVHsPCSTlPbesf50dW/view"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            View Resume
          </a>
          <a
            href="#Contact"
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="https://github.com/Javeria-Ahmed9" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/javeria-ahmed09" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
