import React from 'react';

const ProjectCard = ({ projectName, projectDescription, projectTechnologies, imageUrl }) => {
    return (
        <>
            <div className="group relative m-0 flex h-70 w-80   sm:mx-auto sm:max-w-lg">
                <div className="z-10 h-full w-full overflow-hidden rounded-xl  opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-70">
                    <img src={imageUrl} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                </div>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h4 className="font-serif text-2xl font-bold text-white ">{projectName}</h4>
                    <h5 className="text-sm font-light text-gray-200 ">{projectDescription}</h5>
                    <p className="text-sm font-light text-gray-200 ">{projectTechnologies}</p>
                    <div className="enlaces">
                        <a target="_blank" href="https://github.com/VillalbaLeandro/encriptador">Repositorio<i className="fas fa-external-link-alt"></i></a>
                        <a target="_blank" href="https://villalbaleandro.github.io/encriptador/">Deploy <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProjectCard;
