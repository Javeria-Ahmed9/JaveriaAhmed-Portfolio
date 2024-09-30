import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import PropTypes from "prop-types";
const ProjectCard = ({ title, coderef, demoref }) => {
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    coderef: PropTypes.string.isRequired,
    demoref: PropTypes.string.isRequired,
  };
  return (
    <div
      id="ProjectCard"
      className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl"
    >
      <img className="p-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href={demoref} target="_main">
            Demo
          </a>
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href={coderef} target="_main">
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
