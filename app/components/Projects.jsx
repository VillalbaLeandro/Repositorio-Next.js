import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <section className='mb-32'>
        <h2 className='font-bold text-xl '>Proyects</h2>
        <ProjectCard
          projectName="Project 1"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          projectTechnologies="React, Tailwind CSS"
          imageUrl="./img/proyects/digital-games.png"
          repositorioUrl= 'https://github.com/VillalbaLeandro/grupo_10_DigitalGames'
          deployUrl = 'https://digital-games.onrender.com/home'
        />
      </section>
    </>

  )
}

export default Projects
