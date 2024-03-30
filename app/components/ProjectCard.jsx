import React from 'react';
import CardButtons from './CardButtons';

const ProjectCard = ({ projectName, projectDescription, projectTechnologies, imageUrl, repositorioUrl, deployUrl, category }) => {
  return (
    <div className="relative group min-w-64 -mb-4">
      <div className="rounded overflow-hidden">
        <div className="z-40 relative h-40 transition duration-300">
          <img
            className="w-full h-full object-cover object-top"
            src={imageUrl}
            alt={`previsualizacion del proyecto ${projectName}`}
          />
          <div className="absolute bottom-0 -top-14 -right-1 inset-0 bg-gradient-to-t via-black via-10% from-black to-transparent opacity-750 transition-all duration-300 group-hover:bg-transparent  group-hover:top-0 dark:from-indigo  dark:via-indigo-950  dark:from-indigo dark:to-transparent dark:translate-y-20 dark:h-40"></div>
          <div className="opacity-25 transition duration-300 absolute bottom-0 top-0 -right-1 left-0 bg-black  group-hover:opacity-90 dark:bg-indigo-950 dark:group-hover:opacity-60 "  ></div>
          <h5 className="absolute bottom-9 left-0 px-4 py-2 text-white text-sm transition duration-300 group-hover:-translate-y-16">{projectName}</h5>
          <p className="absolute bottom-5 left-0 px-4 py-2 text-gray-300 text-xs transition duration-300 group-hover:-translate-y-16">{category}</p>
          <p className="absolute bottom-1 left-0 px-4 py-2 text-gray-300 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">{projectDescription}</p>
          <div className="flex absolute gap-x-2 bottom-0 left-0 px-4 py-2 transition duration-300 group-hover:translate-y-8">
            {projectTechnologies.map((technology, index) => (
              <div key={index}>
                <img className="h-4" src={`./img/skills/${technology}`} alt={`${technology}`} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex opacity-0 transition duration-300 group-hover:translate-y-10 group-hover:opacity-100">
            <CardButtons repositorioUrl={repositorioUrl} deployUrl={deployUrl} />
          </div>
        </div>
        <div className="-translate-y-20 rounded h-20 px-6 py-4 bg-black shadow-lg transition-all duration-300 group-hover:-translate-y-2 "></div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
