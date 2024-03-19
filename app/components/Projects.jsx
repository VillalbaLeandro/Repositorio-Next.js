import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <section className='mb-32 p-10  text-left  glass-effect rounded'>
        <h2 className='font-bold text-xl '>Proyects</h2>
        <ProjectCard
          projectName="Project 1"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          projectTechnologies="React, Tailwind CSS"
          imageUrl="./img/proyects/digital-games.png"
          repositorioUrl='https://github.com/VillalbaLeandro/grupo_10_DigitalGames'
          deployUrl='https://digital-games.onrender.com/home'
        />
      </section>
      <div id="education" className='mb-11'></div>

    </>

  )
}

export default Projects
