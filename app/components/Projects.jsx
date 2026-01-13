'use client';
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
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
      imageUrl: "./img/proyects/plan-urbano-wordpress.png",
      repositorioUrl: 'https://posadas.gov.ar/planurbano/',
      deployUrl: 'https://posadas.gov.ar/planurbano/',
    },
    {
      projectName: "Cálculo de Honorarios",
      projectDescription: "Sistema desarrollado para la Municipalidad de Posadas. Funciona como host que sirve el contenido consumido a través de un iframe embebido en la página oficial, permitiendo el cálculo digital de tasas y honorarios de construcción.",
      category: "App Web / Host",
      projectTechnologies: ["php-logo.png", "javascript-logo.png", "bootstrap-logo.png", "mysql-logo.png"],
      imageUrl: "./img/proyects/honorarios-municipalidad.png",
      repositorioUrl: 'https://posadas.gov.ar/honorarios/',
      deployUrl: 'https://posadas.gov.ar/honorarios/',
    },
    {
      projectName: "DrinkStore",
      projectDescription: "Un proyecto personal de gran escala realizado en Php, con sistema completo de venta, control de stock y caja. Actualmente migrándolo a Next.js.",
      category: "Sistema de ventas y stock",
      projectTechnologies: ["php-logo.png", "html-logo.png", "css-logo.png", "javascript-logo.png", "jquery-logo.png", "bootstrap-logo.png"],
      imageUrl: "./img/proyects/drinkstore-sistema-stock.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/sistema-de-ventas-html-css.github.io',
      deployUrl: 'https://drinkstore24hs.000webhostapp.com/ventas/login.php',
    },
    {
      projectName: "DigitalGames",
      projectDescription: "Desarrollé este proyecto como Fullstack Developer desde cero, utilizando tecnologías como Node.js, Sequelize y Express. Aprobado por Digital House",
      category: "e-commerce",
      projectTechnologies: ["html-logo.png", "css-logo.png", "javascript-logo.png", "bootstrap-logo.png", "react-logo.webp", "git-logo.png", "node-logo.png"],
      imageUrl: "./img/proyects/digital-games.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://digital-games.onrender.com/home',
    },
    {
      projectName: "DrinkStore",
      projectDescription: "Diseñé esta landing page con un estilo oscuro y delicado. La combinación de HTML, CSS y JavaScript permite una navegación fluida y una presentación atractiva de los productos, atrayendo la atención de los usuarios desde el primer vistazo.",
      category: "Landing page ",
      projectTechnologies: ["html-logo.png", "css-logo.png", "javascript-logo.png"],
      imageUrl: "./img/proyects/drinkstore landing.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/sistema-de-ventas-html-css.github.io',
      deployUrl: 'https://drinkstore24hs.000webhostapp.com/',
    },
    {
      projectName: "Clock neumorphism",
      projectDescription: "Uno de mis proyectos favoritos, donde trabajé intensamente con CSS para lograr un efecto de relieve e iluminación.",
      category: "App",
      projectTechnologies: ["html-logo.png", "css-logo.png", "javascript-logo.png"],
      imageUrl: "./img/proyects/reloj-neumorfismo.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/NeuphormClock.github.io',
      deployUrl: 'https://villalbaleandro.github.io/NeuphormClock.github.io/',
    },
  ]

  return (
    <>
      <section id='projects' className='p-6 text-left rounded w-[90vw] max-w-screen-xl mx-auto sm:p-6 md:p-10'>
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold uppercase tracking-widest leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400">
              Proyectos
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projectsData.map((project, index) => {
            // Cycle through neon base hues: 80 (Lime), 220 (Blue), 280 (Purple), 320 (Pink)
            const baseHue = [80, 220, 280, 320][index % 4];
            const spread = [500, 200, 500, 200][index % 4];

            return (
              <ProjectCard
                key={index}
                style={{ '--base': baseHue, '--spread': spread, '--outer': 1 }}
                {...project}
              />
            );
          })}
        </div>
      </section>

    </>

  )
}

export default Projects
