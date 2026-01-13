import Link from 'next/link'
import React from 'react'
import EducationItem from './EducationItem'

const Education = () => {

  const educationData = [
    {
      period: "Mar 2022 - Actualidad",
      institution: "Esc. Normal Superior Nº 10",
      title: "Analista de Sistemas",
      certificatedLink: "",
      certificatedImage: ""
    },
    {
      period: "Mar 2023 - Jun 2023",
      institution: "Programa One - Oracle",
      title: "Desarrollador Front end",
      certificatedLink: "https://drive.google.com/file/d/1EnonN3AqnsezJDnnQdernh5g_2btuse5/view?usp=sharing",
      certificatedImage: "./img/certificated/oracle-alura-certificated.png"
    },
    {
      period: "Jun 2022 - Nov 2022",
      institution: "DigitalHouse",
      title: "Desarrollo Web Full Stack",
      certificatedLink: "https://drive.google.com/file/d/1TqLLxQIuLySwQ8lQwgIFNK_PoB0XlqzV/view",
      certificatedImage: "./img/certificated/dg-certificated.png"
    },
    {
      period: "Sept 2022 - Oct 2022",
      institution: "Huawei - Seeds for the future",
      title: "5G - Inteligencia artificial - IOT",
      certificatedLink: "https://drive.google.com/file/d/173dMSsQkhM3jD-MuiGXmW6bFk3Uc0prD/view",
      certificatedImage: "./img/certificated/huawei-certificated.jpg"
    },
    {
      period: "Ene 2023 - Feb 2024",
      institution: "Instructor de Capacitación",
      title: "Herramientas de Productividad e IA",
      certificatedLink: "",
      certificatedImage: ""
    },
  ]
  return (
    <>
      <section id='education' className='p-6 mb-4 glass-effect rounded'>
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 uppercase tracking-wide">
            Formación
          </h2>
        </div>
        <ol className="relative border-s border-sky-900 my-4 ">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </ol>
      </section>
    </>
  )
}

export default Education


