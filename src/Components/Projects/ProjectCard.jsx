const ProjectCard = ({ title, description, tags, demoref, coderef, gradient }) => {
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all group">
      <div className={`h-36 ${gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-white/5 border border-white/8 text-gray-400 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={demoref}
            target="_blank"
            className="text-sm text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors"
          >
            Live Demo
          </a>
          <a
            href={coderef}
            target="_blank"
            className="text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-colors"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
