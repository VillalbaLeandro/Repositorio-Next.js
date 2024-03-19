import React from 'react';

const ProjectCard = ({ projectName, projectDescription, projectTechnologies, imageUrl, repositorioUrl, deployUrl }) => {
  return (
    <div className="group relative m-0 flex h-44 w-80 sm:mx-auto sm:max-w-lg">
      <div className="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-70">
        <img
          src={imageUrl}
          className="animate-fade-in block h-full w-full scale-100 transform object-cover object-top opacity-100 transition duration-300 group-hover:scale-110 filter group-hover:filter-none" // Added filter and transition
          alt=""
        />
        <div className="overlay opacity-40 absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black to-2/3  to-transparent transition-all duration-300 ease-in-out  group-hover:opacity-90   "></div>
      </div>
      <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h4 className="translate-y-24 font-serif text-2xl font-bold text-white transition duration-500 ease-in-out group-hover:translate-y-0">{projectName}</h4>
        <div className="opacity-0 translate-y-24  transition duration-700 ease-in-out  group-hover:opacity-100 group-hover:translate-y-0 ">
          <h5 className=" text-sm font-light text-gray-200">{projectDescription}</h5>
          <p className="text-sm font-light text-gray-200">{projectTechnologies}</p>
          <div className="enlaces">
            <a target="_blank" href={repositorioUrl}>Repositorio<i className="fas fa-external-link-alt"></i></a>
            <a target="_blank" href={deployUrl}>Deploy <i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
