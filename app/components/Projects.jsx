import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const projectsData = [
    {
      projectName: "DigitalGames",
      projectDescription: "Desarrollé este proyecto como Fullstack Developer desde cero, utilizando tecnologías como Node.js, Sequelize y Express. Aprobado por Digital House",
      category: "e-commerce",
      projectTechnologies: ["html-logo.png", "css-logo.png", "javascript-logo.png", "bootstrap-logo.png", "react-logo.webp","git-logo.png", "node-logo.png"],
      imageUrl: "./img/proyects/digital-games.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://digital-games.onrender.com/home',
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
      projectName: "DrinkStore",
      projectDescription: "Un proyecto personal de gran escala realizado en Php, con sistema completo de venta, control de stock y caja. Actualmente migrándolo a Next.js.",
      category: "Sistema de ventas y stock",
      projectTechnologies: ["php-logo.png", "html-logo.png", "css-logo.png", "javascript-logo.png", "jquery-logo.png", "bootstrap-logo.svg"],
      imageUrl: "./img/proyects/drinkstore-sistema-stock.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/sistema-de-ventas-html-css.github.io',
      deployUrl: 'https://drinkstore24hs.000webhostapp.com/ventas/login.php',
    },
    {
      projectName: "Encriptador",
      projectDescription: "Aplicación desarrollada en el marco de Alura Latam y Oracle Next Education.",
      category: "App web",
      projectTechnologies: [ "html-logo.png", "css-logo.png", "javascript-logo.png", "bootstrap-logo.svg"],
      imageUrl: "./img/proyects/Encriptador-alura.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/encriptador',
      deployUrl: 'https://villalbaleandro.github.io/encriptador/',
    },
  ]



  return (
    <>
      <section id='projects' className=' p-10  text-left  glass-effect rounded w-[90vw] max-w-screen-xl mx-auto sm:p-10 md:p-16'>
        <h2 className='font-bold text-center text-xl '>PROYECTOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {projectsData.map((project, index) =>
            (<ProjectCard
              key={index}
              {...project}
            />)
            )}
          </div>
      </section>

    </>

  )
}

export default Projects
