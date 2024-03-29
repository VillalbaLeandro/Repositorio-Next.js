import Image from 'next/image'
import React from 'react'
import DownloadButton from './DownloadButton'

const AboutMe = () => {
    return (
        <div className='text-center glass-effect rounded xs:max-w-80 xl:max-w-96 flex items-center flex-col gap-1  p-10' >
            <Image className='translate-y-10  ' src='/img/myPics/me2.png' alt='My beatiful picture' width={300} height={300} />
            <h1 id="about-me" className='text-gray-100 font-bold text-base dark:text-gray-600'>Hola!  👋🏻 soy Leandro Villalba y soy</h1>
            <h2 className='font-bold text-5xl  '>
                FRONTEND  </h2>
            <h2 className='font-bold text-5xl '>
                DEVELOPER </h2>
            <h5 className='text-gray-100 text-sm lg:text-sm  dark:text-gray-600'>y estudiante avanzado en</h5>
            <h2 className='font-bold text-3xl'>Analista de Sistemas</h2>
            <p className='text-gray-100 text-sm  dark:text-gray-600'>
Soy un desarrollador Frontend con más de 2 años de experiencia, especializado en encontrar soluciones innovadoras y eficientes. Destaco por mi capacidad para identificar rápidamente problemas y ofrecer soluciones creativas, mejorando la experiencia del usuario y la eficiencia operativa. Siempre aprendiendo y al tanto de las últimas tendencias en tecnología, mi objetivo es seguir creciendo profesionalmente y contribuir al éxito de proyectos innovadores mientras sigo explorando nuevas tecnologías.</p>
            <DownloadButton />
            <div id='experience'></div>

        </div>
    )
}

export default AboutMe
