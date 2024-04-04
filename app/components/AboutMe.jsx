import Image from 'next/image'
import React from 'react'
import DownloadButton from './DownloadButton'


const AboutMe = () => {
    return (
             <section id='home' className='mt-6 text-center glass-effect rounded xs:max-w-85 xl:max-w-96 flex items-center flex-col  glass-effect  w-[90vw] max-w-screen-xl mx-auto sm:p-10 md:p-16' >
                 <Image className='translate-y-10  ' src='/img/myPics/me-mobile.png' alt='My beatiful picture' width={280} height={304} priority={true} />
                 <h1 className='text-gray-100 font-bold text-sm dark:text-gray-600'>Hola!  👋🏻 soy Leandro Villalba y soy</h1>
                 <h2 className='font-bold text-4xl  '>
                     FRONTEND  </h2>
                 <h2 className='font-bold text-4xl '>
                     DEVELOPER </h2>
                 <h5 className='text-gray-100 text-sm lg:text-sm  dark:text-gray-600'>y estudiante avanzado en</h5>
                 <h2 className='font-bold text-3xl'>Analista de Sistemas</h2>
                 <p className='text-gray-100 text-sm  dark:text-gray-600'>
                     Soy un desarrollador Frontend con más de 2 años de experiencia, especializado en encontrar soluciones innovadoras y eficientes. Destaco por mi capacidad para identificar rápidamente problemas y ofrecer soluciones creativas, mejorando la experiencia del usuario y la eficiencia operativa. Siempre aprendiendo y al tanto de las últimas tendencias en tecnología, mi objetivo es seguir creciendo profesionalmente y contribuir al éxito de proyectos innovadores mientras sigo explorando nuevas tecnologías.</p>
                 <DownloadButton />
             </section>
    )
}
export default AboutMe
