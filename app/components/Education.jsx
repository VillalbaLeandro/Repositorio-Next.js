import Link from 'next/link'
import React from 'react'
import EducationItem from './EducationItem'





const Education = () => {


  const educationData = [
    {
      period:"nov. 2022 - Actualidad ",
      institution: "Analista en Sistemas",
      title: "Normal Superior N°10",
      certificatedLink: "",
      certificatedImage:""
    },
    {
      period:"Abril 2023 - julio 2023",
      institution: "Alura - Oracle",
      title: "Desarrollo Frontend",
      certificatedLink: "https://drive.google.com/file/d/1EnonN3AqnsezJDnnQdernh5g_2btuse5/view?usp=sharing",
      certificatedImage:"./img/certificated/oracle-alura-certificated.png"
    },
    {
      period:"Sept 2022 - Octubre 2022",
      institution: "Huawei Technologies",
      title: "Seed for the future",
      certificatedLink: "https://drive.google.com/file/d/173dMSsQkhM3jD-MuiGXmW6bFk3Uc0prD/view",
      certificatedImage:"./img/certificated/huawei-certificated.jpg"
    },
    {
      period:"Marzo 2022 - Noviembre 2022",
      institution: "Digital House",
      title: "Fullstack developer",
      certificatedLink: "https://drive.google.com/file/d/1TqLLxQIuLySwQ8lQwgIFNK_PoB0XlqzV/view",
      certificatedImage:"./img/certificated/dg-certificated.png"
    },

  ]
  return (
    <>
      <section id='education' className='p-10    glass-effect rounded'>
        <h2 className='font-bold text-xl '>Formación</h2>
        <ol className="relative border-s border-sky-900 my-4 ">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item}  />
          ))}
        </ol>
      </section>
    </>
  )
}

export default Education
