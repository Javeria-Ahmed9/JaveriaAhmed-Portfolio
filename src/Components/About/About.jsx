import AboutImg from "../../assets/7358653-removebg-preview.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a passionate new frontend developer, I am dedicated to
                  crafting intuitive and visually appealing user interfaces that
                  delight users. With a strong foundation in React, Redux
                  ,TypeScript, HTML & CSS.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <h5 className="text-xl md:text-2xl font-semibold leading-normal">
                  <div id="icon">
                    {" "}
                    <div id="one">
                      {" "}
                      <FaGithub id="two" />
                      <h4 id="head">
                        <a
                          href="https://github.com/Javeria-Ahmed9/"
                          target="_main"
                        >
                          Github
                        </a>
                      </h4>
                    </div>
                    <div className="icon2" id="one">
                      {" "}
                      <FaLinkedin id="two" />
                      <h4 id="head">
                        <a
                          href="https://www.linkedin.com/in/javeria-ahmed09/"
                          target="_main"
                        >
                          LinkedIn
                        </a>
                      </h4>
                    </div>
                  </div>
                </h5>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
