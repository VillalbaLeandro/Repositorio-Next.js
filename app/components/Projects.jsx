import React from 'react'
import ProjectCard from './ProyectCard'

const Projects = () => {
  return (
    <>
      <section className='mb-32'>
        <h2 className='font-bold text-xl '>Proyects</h2>
        <ProjectCard
          projectName="Project 1"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          projectTechnologies="React, Tailwind CSS"
          imageUrl="https://via.placeholder.com/600x400"
        />
      </section>
    </>

  )
}

export default Projects
