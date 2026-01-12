'use client';
import React, { useState } from 'react';
import CardButtons from './CardButtons';

const ProjectCard = ({ projectName, projectDescription, projectTechnologies, imageUrl, repositorioUrl, deployUrl, category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#0B1120] backdrop-blur-md border border-gray-100/80 dark:border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-indigo-500/30 dark:shadow-none">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          src={imageUrl}
          alt={`${projectName} preview`}
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 dark:from-black dark:via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Decorative top gradient line for modern feel */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-indigo-500/90 backdrop-blur-sm text-xs font-semibold text-white">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {projectName}
        </h3>

        {/* Description */}
        <div className="relative">
          <p className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {projectDescription}
          </p>
          {projectDescription.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mt-1 focus:outline-none font-medium transition-colors cursor-pointer"
            >
              {isExpanded ? 'Leer menos' : 'Leer más'}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {projectTechnologies.map((technology, index) => {
            // Simple extraction of technology name from filename
            const techName = technology
              .replace(/-logo\.(png|svg|webp|jpeg|jpg)/, '')
              .replace(/-/g, ' ')
              .toUpperCase();

            return (
              <div key={index} className="tooltip" data-tip={techName}>
                <div className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
                  <img
                    className="h-5 w-5 object-contain"
                    src={`./img/skills/${technology}`}
                    alt={technology}
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <CardButtons repositorioUrl={repositorioUrl} deployUrl={deployUrl} />
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
