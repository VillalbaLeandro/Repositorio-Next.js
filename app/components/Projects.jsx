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
  const [areAllExpanded, setAreAllExpanded] = useState(false)

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
      id: "sistema-multas",
      projectName: "Sistema de Multas Inmobiliarias GOP",
      projectDescription: "Sistema integral para la gestión de multas y actas inmobiliarias de la Municipalidad de Posadas. Incluye App Android para inspectores (ubicación de parcelas, actas) y Dashboard web para administración.",
      category: "Sistema Municipal",
      projectTechnologies: ["laravel-logo.webp", "php-logo.webp", "javascript-logo.webp", "bootstrap-logo.webp", "oracle-logo.webp", "android.webp"],
      projectImages: [
        "./img/proyects/Sistema de multas - inmo/1.webp",
        "./img/proyects/Sistema de multas - inmo/2.webp",
        "./img/proyects/Sistema de multas - inmo/3.webp",
        "./img/proyects/Sistema de multas - inmo/4.webp",
        "./img/proyects/Sistema de multas - inmo/6.webp",
        "./img/proyects/Sistema de multas - inmo/7.webp",
        "./img/proyects/Sistema de multas - inmo/8.webp",
        "./img/proyects/Sistema de multas - inmo/9.webp",
        "./img/proyects/Sistema de multas - inmo/10.webp",
        "./img/proyects/Sistema de multas - inmo/11.webp",
        "./img/proyects/Sistema de multas - inmo/12.webp",
        "./img/proyects/Sistema de multas - inmo/13.webp"
      ],
      repositorioUrl: 'private',
      deployUrl: 'private',
      status: 'private',
    },
    {
      id: "plan-urbano",
      projectName: "Plan Urbano",
      projectDescription: "Plataforma informativa gestionada con WordPress y Elementor. Rediseñé y optimicé el rendimiento y la estructura para garantizar un acceso rápido a la información urbanística de la ciudad.",
      category: "WordPress / Institucional",
      projectTechnologies: ["wordpress-logo.webp", "elementor.webp", "php-logo.webp", "html-logo.webp", "css-logo.webp"],
      projectImages: [
        "./img/proyects/plan-urbano/1.webp",
        "./img/proyects/plan-urbano/2.webp",
        "./img/proyects/plan-urbano/3.webp",
        "./img/proyects/plan-urbano/4.webp",
        "./img/proyects/plan-urbano/5.webp"
      ],
      repositorioUrl: 'private',
      deployUrl: 'https://posadas.gov.ar/planurbano/',
      status: 'public', // Sitio Oficial en Producción
    },
    {
      projectName: "Control de Ventas y Stock",
      projectDescription: "Un proyecto de gran escala realizado en Php, con sistema completo de venta, control de stock y caja. Actualmente migrándolo a Next.js.",
      category: "Sistema de ventas y stock",
      projectTechnologies: ["php-logo.webp", "javascript-logo.webp", "jquery-logo.webp", "html-logo.webp", "css-logo.webp", "bootstrap-logo.webp", "Mysql-logo.webp"],
      projectImages: [
        "./img/proyects/drinkstore-sistema/1.webp",
        "./img/proyects/drinkstore-sistema/2.webp",
        "./img/proyects/drinkstore-sistema/3.webp",
        "./img/proyects/drinkstore-sistema/4.webp",
        "./img/proyects/drinkstore-sistema/5.webp",
        "./img/proyects/drinkstore-sistema/6.webp",
        "./img/proyects/drinkstore-sistema/7.webp",
        "./img/proyects/drinkstore-sistema/8.webp"
      ],
      repositorioUrl: 'https://github.com/VillalbaLeandro/sistema-de-ventas-html-css.github.io',
      deployUrl: 'https://drinkstore.wuaze.com/ventas/index.php',
      status: 'private', // Sistema Privado con Demo
    },
    {
      id: "calculo-honorarios",
      projectName: "Cálculo de Honorarios",
      projectDescription: "Sistema desarrollado para la Municipalidad de Posadas. Funciona como host que sirve el contenido consumido a través de un iframe embebido en la página oficial, permitiendo el cálculo digital de tasas y honorarios de construcción.",
      category: "App Web / Host",
      projectTechnologies: ["php-logo.webp", "javascript-logo.webp", "bootstrap-logo.webp", "Mysql-logo.webp"],
      projectImages: [
        "./img/proyects/honorarios/1.webp",
        "./img/proyects/honorarios/2.webp",
        "./img/proyects/honorarios/3.webp",
        "./img/proyects/honorarios/4.webp",
        "./img/proyects/honorarios/5.webp",
        "./img/proyects/honorarios/6.webp"
      ],
      repositorioUrl: 'private',
      deployUrl: 'https://calcular-honorarios.infinityfreeapp.com/',
      status: 'public', // Sistema Privado con Demo
    },
    {
      projectName: "Aberturas Fair",
      projectDescription: "Sitio web para fábrica de aberturas artesanales. Muestra catálogo de trabajos y detalles de la empresa. Actualmente en proceso de aprobación y despliegue.",
      category: "Catálogo Web",
      projectTechnologies: ["html-logo.webp", "css-logo.webp", "javascript-logo.webp", "git-logo.webp"],
      projectImages: [
        "./img/proyects/aberturas-fair/1.webp",
        "./img/proyects/aberturas-fair/2.webp",
        "./img/proyects/aberturas-fair/3.webp",
        "./img/proyects/aberturas-fair/4.webp",
        "./img/proyects/aberturas-fair/5.webp",
        "./img/proyects/aberturas-fair/6.webp"
      ],
      repositorioUrl: 'https://github.com/VillalbaLeandro/aberturas-fair2',
      deployUrl: 'https://aberturas-fair.infinityfreeapp.com/',
      status: 'public',
    },
    {
      projectName: "App de Tickets",
      projectDescription: "Proyecto personal de sistema de turnos y tickets de libre uso. Cuenta con pantalla general para visualizar la cola de espera, interfaz de atención para operadores y terminal de solicitud de turnos para clientes.",
      category: "Sistema de soporte",
      projectTechnologies: ["react-logo.webp", "node-logo.webp", "html-logo.webp", "css-logo.webp", "git-logo.webp"],
      projectImages: [
        "./img/proyects/app-tickets/1.webp",
        "./img/proyects/app-tickets/2.webp",
        "./img/proyects/app-tickets/3.webp",
        "./img/proyects/app-tickets/4.webp"
      ],
      repositorioUrl: 'https://github.com/VillalbaLeandro/app-tickets',
      deployUrl: 'https://app-tickets.onrender.com/',
      status: 'public',
    },
    {
      projectName: "Clock neumorphism",
      projectDescription: "Uno de mis proyectos favoritos, donde trabajé intensamente con CSS para lograr un efecto de relieve e iluminación.",
      category: "App",
      projectTechnologies: ["html-logo.webp", "css-logo.webp", "javascript-logo.webp"],
      projectImages: [
        "./img/proyects/clock-neumorphism/1.webp",
        "./img/proyects/clock-neumorphism/2.webp"
      ],
      repositorioUrl: 'https://github.com/VillalbaLeandro/NeuphormClock.github.io',
      deployUrl: 'https://villalbaleandro.github.io/NeuphormClock.github.io/',
      status: 'public', // Sitio Oficial en Producción
    },
    {
      projectName: "DrinkStore",
      projectDescription: "Diseñé esta landing page con un estilo oscuro y delicado. La combinación de HTML, CSS y JavaScript permite una navegación fluida y una presentación atractiva de los productos, atrayendo la atención de los usuarios desde el primer vistazo.",
      category: "Landing page ",
      projectTechnologies: ["html-logo.webp", "css-logo.webp", "javascript-logo.webp"],
      projectImages: [
        "./img/proyects/drinkstore-landing/1.webp",
        "./img/proyects/drinkstore-landing/2.webp",
        "./img/proyects/drinkstore-landing/3.webp",
        "./img/proyects/drinkstore-landing/4.webp"
      ],
      repositorioUrl: 'https://github.com/VillalbaLeandro/sistema-de-ventas-html-css.github.io',
      deployUrl: 'https://drinkstore.wuaze.com/',
      status: 'public', // Sitio Oficial en Producción
    },
    {
      projectName: "DigitalGames",
      projectDescription: "Desarrollé este e-commerce Fullstack desde cero, utilizando Node.js, Sequelize y Express. Realicé una migración exitosa de la base de datos de MySQL a PostgreSQL para mejorar la escalabilidad y el rendimiento.",
      category: "e-commerce",
      projectTechnologies: ["react-logo.webp", "node-logo.webp", "javascript-logo.webp", "html-logo.webp", "css-logo.webp", "bootstrap-logo.webp", "postgre-logo.webp", "Mysql-logo.webp", "git-logo.webp"],
      projectImages: [
        "./img/proyects/digital-games/1.webp",
        "./img/proyects/digital-games/2.webp",
        "./img/proyects/digital-games/3.webp",
        "./img/proyects/digital-games/4.webp",
        "./img/proyects/digital-games/5.webp",
        "./img/proyects/digital-games/6.webp"
      ],
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://grupo-10-digitalgames.onrender.com/',
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
