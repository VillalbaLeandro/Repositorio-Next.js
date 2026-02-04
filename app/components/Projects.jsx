'use client';
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import MotionSection, { itemVariants, containerVariants } from './MotionSection'
import StaggeredTitle from './StaggeredTitle'
import { useTheme, THEMES } from '../context/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  const isLight = theme === THEMES.LIGHT
  const containerRef = useRef(null)
  const [proximity, setProximity] = useState(1)

  // Track proximity to the entire title container
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      const maxDistance = 300
      const normalizedDistance = Math.min(distance / maxDistance, 1)

      setProximity(normalizedDistance)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const blurAmount = Math.round(proximity * 15)
  const separatorWidth = 256 + (1 - proximity) * 128
  const separatorOpacity = 0.75 + (1 - proximity) * 0.25

  React.useEffect(() => {
    const syncPointer = ({ x, y }) => {
      document.documentElement.style.setProperty('--x', x.toFixed(2));
      document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty('--y', y.toFixed(2));
      document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
    };
    document.body.addEventListener('pointermove', syncPointer);
    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  const projectsData = [
    {
      projectName: "Plan Urbano",
      projectDescription: "Plataforma informativa gestionada con WordPress en un subdominio municipal. Optimicé el rendimiento y la estructura para garantizar un acceso rápido a la información urbanística de la ciudad.",
      category: "WordPress / Institucional",
      projectTechnologies: ["wordpress-logo.png", "css-logo.png", "php-logo.png"],
      projectImages: ["./img/proyects/plan-urbano/1.png"],
      repositorioUrl: 'private',
      deployUrl: 'https://posadas.gov.ar/planurbano/',
      status: 'public', // Sitio Oficial en Producción
    },
    {
      projectName: "Cálculo de Honorarios",
      projectDescription: "Sistema desarrollado para la Municipalidad de Posadas. Funciona como host que sirve el contenido consumido a través de un iframe embebido en la página oficial, permitiendo el cálculo digital de tasas y honorarios de construcción.",
      category: "App Web / Host",
      projectTechnologies: ["php-logo.png", "javascript-logo.png", "bootstrap-logo.png", "mysql-logo.png"],
      projectImages: ["./img/proyects/honorarios/1.png"],
      repositorioUrl: 'private',
      deployUrl: 'https://calcular-honorarios.infinityfreeapp.com/',
      status: 'public', // Sistema Privado con Demo
    },
    {
      projectName: "Control de Ventas y Stock",
      projectDescription: "Un proyecto personal de gran escala realizado en Php, con sistema completo de venta, control de stock y caja. Actualmente migrándolo a Next.js.",
      category: "Sistema de ventas y stock",
      projectTechnologies: ["php-logo.png", "html-logo.png", "css-logo.png", "javascript-logo.png", "jquery-logo.png", "bootstrap-logo.png"],
      projectImages: ["./img/proyects/drinkstore-sistema/1.png"],
      repositorioUrl: 'https://github.com/VillalbaLeandro/sistema-de-ventas-html-css.github.io',
      deployUrl: 'https://drinkstore.wuaze.com/ventas/index.php',
      status: 'private', // Sistema Privado con Demo
    },
    {
      projectName: "DigitalGames",
      projectDescription: "Desarrollé este e-commerce Fullstack desde cero, utilizando Node.js, Sequelize y Express. Realicé una migración exitosa de la base de datos de MySQL a PostgreSQL para mejorar la escalabilidad y el rendimiento.",
      category: "e-commerce",
      projectTechnologies: ["html-logo.png", "css-logo.png", "javascript-logo.png", "bootstrap-logo.png", "react-logo.webp", "node-logo.png", "Mysql-logo.png", "postgre-logo.png", "git-logo.png"],
      projectImages: ["./img/proyects/digital-games/1.png"],
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://grupo-10-digitalgames.onrender.com/',
      status: 'public', // Sitio Oficial en Producción
    },
    {
      projectName: "DrinkStore",
      projectDescription: "Diseñé esta landing page con un estilo oscuro y delicado. La combinación de HTML, CSS y JavaScript permite una navegación fluida y una presentación atractiva de los productos, atrayendo la atención de los usuarios desde el primer vistazo.",
      category: "Landing page ",
      projectTechnologies: ["html-logo.png", "css-logo.png", "javascript-logo.png"],
      projectImages: ["./img/proyects/drinkstore-landing/1.png"],
      repositorioUrl: 'https://github.com/VillalbaLeandro/sistema-de-ventas-html-css.github.io',
      deployUrl: 'https://drinkstore.wuaze.com/',
      status: 'public', // Sitio Oficial en Producción
    },
    {
      projectName: "Clock neumorphism",
      projectDescription: "Uno de mis proyectos favoritos, donde trabajé intensamente con CSS para lograr un efecto de relieve e iluminación.",
      category: "App",
      projectTechnologies: ["html-logo.png", "css-logo.png", "javascript-logo.png"],
      projectImages: ["./img/proyects/clock-neumorphism/1.png"],
      repositorioUrl: 'https://github.com/VillalbaLeandro/NeuphormClock.github.io',
      deployUrl: 'https://villalbaleandro.github.io/NeuphormClock.github.io/',
      status: 'public', // Sitio Oficial en Producción
    },
  ]

  return (
    <>
      <MotionSection id='projects' className='text-left'>
        <MotionSection className='w-[90vw] max-w-screen-xl mx-auto mt-15 scroll-mt-48'>
          <div ref={containerRef} className="flex items-center justify-center gap-3 mb-12">
            <div className="relative z-10 text-center">
              {!isLight && (
                <>
                  {/* Halo gigante (glow externo) */}
                  <div
                    className="
          pointer-events-none absolute left-1/2 top-1/2
          h-16 w-[20rem] sm:h-20 sm:w-[26rem] md:h-24 md:w-[32rem] -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400
          blur-3xl opacity-35
        "
                  />

                  {/* Halo secundario más “apretado” */}
                  <div
                    className="
          pointer-events-none absolute left-1/2 top-1/2
          h-8 w-[16rem] sm:h-10 sm:w-[20rem] md:h-12 md:w-[22rem] -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-300
          blur-2xl opacity-40
        "
                  />
                </>
              )}

              <StaggeredTitle text="PROYECTOS" blurAmount={blurAmount} />

              {/* Title separator */}
              <div
                className={`h-[2px] mx-auto mt-6 transition-all duration-300 bg-gradient-to-r from-transparent ${isLight ? 'via-[#44476a]' : 'via-indigo-500'} to-transparent blur-[1px]`}
                style={{
                  width: `${separatorWidth}px`,
                  opacity: separatorOpacity
                }}
              ></div>
            </div>
          </div>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {projectsData.map((project, index) => {
              // Cycle through neon base hues: 80 (Lime), 220 (Blue), 280 (Purple), 320 (Pink)
              const baseHue = [80, 220, 280, 320][index % 4];
              const spread = [500, 200, 500, 200][index % 4];

              return (
                <motion.div key={index} variants={itemVariants} className="flex flex-col h-full">
                  <ProjectCard
                    style={{ '--base': baseHue, '--spread': spread, '--outer': 1 }}
                    {...project}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </MotionSection>
      </MotionSection>
    </>
  )
}

export default Projects
