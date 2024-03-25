import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const projectsData = [
    {
      projectName: "DigitalGames",
      projectDescription: "Este proyecto lo desarrolle como developer Fullstack desde 0. Se utilizo Node.js, sequelize, expreess entre otras tectonologias. Fue desarrollado y aprobado bajo la supervicion de Digital House ",
      category: "e-commerce",
      projectTechnologies: ["php-logo", "html-logo", "sql-logo"],
      imageUrl: "./img/proyects/digital-games.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://digital-games.onrender.com/home',
    },
    {
      projectName: "Clock neumorphism",
      projectDescription: "a",
      category: "App",
      projectTechnologies: ["next.js", "sql-logo"],
      imageUrl: "./img/proyects/digital-games.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://digital-games.onrender.com/home',
    },
    {
      projectName: "Clock neumorphism",
      projectDescription: "a",
      category: "App",
      projectTechnologies: ["next.js", "sql-logo"],
      imageUrl: "./img/proyects/digital-games.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://digital-games.onrender.com/home',
    },
    {
      projectName: "Clock neumorphism",
      projectDescription: "a",
      category: "App",
      projectTechnologies: ["next.js", "sql-logo"],
      imageUrl: "./img/proyects/digital-games.png",
      repositorioUrl: 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames',
      deployUrl: 'https://digital-games.onrender.com/home',
    }
  ]



  return (
    <>
      <section className=' p-5  text-left  glass-effect rounded'>
        <h2 className='font-bold text-xl '>Proyects</h2>
        <div className="w-[90vw] max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {projectsData.map((project, index) =>
            (<ProjectCard
              key={index}
              {...project}
            />)
            )}
          </div>
        </div>
      </section>
      <div id="education" className='mb-11'></div>

    </>

  )
}

export default Projects
