'use client';
import React, { useState, useEffect } from 'react';
import CardButtons from './CardButtons';
import ImageCarousel from './ImageCarousel';
import { FaLock, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ id, projectName, projectDescription, projectTechnologies, projectImages, repositorioUrl, deployUrl, category, status, style }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Effect to handle highlighting when linked via hash
  useEffect(() => {
    if (typeof window !== 'undefined' && id) {
      const checkHash = () => {
        if (window.location.hash === `#${id}`) {
          setIsHighlighted(true);
          setTimeout(() => setIsHighlighted(false), 3000);
        }
      };

      checkHash();
      window.addEventListener('hashchange', checkHash);
      return () => window.removeEventListener('hashchange', checkHash);
    }
  }, [id]);

  // Badge configuration based on status
  const getBadgeConfig = () => {
    if (status === 'private') {
      return {
        Icon: FaLock,
        text: 'Sistema Privado',
        bgColor: 'bg-slate-700 dark:bg-slate-800',
        textColor: 'text-gray-100'
      };
    }
    return {
      Icon: FaGlobe,
      text: 'Sitio Oficial',
      bgColor: 'bg-emerald-600 dark:bg-[#6c63ff]',
      textColor: 'text-white'
    };
  };

  const badgeConfig = getBadgeConfig();

  return (
    <article
      id={id}
      style={style}
      data-glow
      className={`group relative rounded-2xl bg-white dark:bg-[#0B1120] backdrop-blur-md transition-all duration-500 flex flex-col h-full
        ${isHighlighted
          ? 'ring-4 ring-[#6c63ff] shadow-[0_0_30px_rgba(108,99,255,0.3)] scale-[1.02] z-10'
          : 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
        }`}
    >
      <div data-glow></div>
      <div className="relative z-10 flex flex-col flex-1">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden rounded-t-xl shrink-0">
          <ImageCarousel images={projectImages} projectName={projectName} />

          {/* Decorative top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Status Badge */}
          <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg ${badgeConfig.bgColor} backdrop-blur-sm text-xs font-semibold ${badgeConfig.textColor} shadow-md flex items-center gap-1.5 z-20`}>
            <badgeConfig.Icon className="text-xs" />
            <span>{badgeConfig.text}</span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#6c63ff] dark:bg-indigo-500/90 backdrop-blur-sm text-xs font-semibold text-white z-20">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Upper section: Title, Description, Technologies */}
          <div className="space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-[#44476a] dark:text-white group-hover:text-[#6c63ff] dark:group-hover:text-indigo-400 transition-colors duration-300">
              {projectName}
            </h3>

            {/* Description with Smooth Animation */}
            <div className="relative">
              <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : '4.5rem' }} // approx 3 lines
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {projectDescription}
                </p>
              </motion.div>

              {projectDescription.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs text-[#6c63ff] dark:text-indigo-400 hover:text-[#554fd8] dark:hover:text-indigo-300 mt-2 focus:outline-none font-medium transition-colors cursor-pointer relative z-10"
                >
                  {isExpanded ? 'Leer menos' : 'Leer más'}
                </button>
              )}
            </div>

          </div>

          {/* Lower section: Technologies and Buttons with flex-end */}
          <div className="pt-4 mt-auto flex flex-col justify-end gap-4">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {projectTechnologies.map((technology, index) => {
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

            <CardButtons repositorioUrl={repositorioUrl} deployUrl={deployUrl} status={status} />
          </div>
        </div>
      </div>
    </article >
  );
};

export default ProjectCard;
