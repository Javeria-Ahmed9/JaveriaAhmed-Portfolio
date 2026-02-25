import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const links = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
      <span className="text-white font-bold text-lg tracking-wide">JA</span>

      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            <li className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              {link}
            </li>
          </a>
        ))}
      </ul>

      <a
        href="https://drive.google.com/file/d/1WTZue-UGjzahflKVHsPCSTlPbesf50dW/view"
        target="_blank"
        className="hidden md:block text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Resume
      </a>

      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <RiCloseLine size={24} /> : <RiMenu2Line size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0d0d18] border-b border-white/5 py-4 flex flex-col items-center gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
