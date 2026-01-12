import Image from 'next/image'
import React from 'react'
import DownloadButton from './DownloadButton'


const AboutMe = () => {
    return (
        <section id='home' className='mt-6 rounded xs:max-w-85 xl:max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between w-[90vw] max-w-screen-xl mx-auto sm:p-10 md:p-16 relative overflow-visible gap-10'>

            {/* Left Column: Text Content */}
            <div className='flex flex-col items-center md:items-start text-center md:text-left z-10 md:w-3/5'>
                <h1 className='text-gray-800 font-bold text-lg dark:text-gray-200 tracking-widest uppercase mb-2'>Leandro Villalba</h1>

                {/* Giant title text */}
                <h2 className='font-extrabold text-[10.5vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-blue-500/70 to-transparent animate-gradient whitespace-nowrap mb-0'>
                    FULLSTACK
                </h2>
                <h2 className='font-extrabold text-[10.5vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-blue-500 via-cyan-400/70 to-transparent animate-gradient whitespace-nowrap -mt-2 mb-6'>
                    DEVELOPER
                </h2>

                <div className='max-w-2xl space-y-4 text-base md:text-lg'>
                    <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Con más de <strong className='text-gray-900 dark:text-white font-semibold'>4 años</strong> de experiencia creando aplicaciones web y mobile con <strong className='text-gray-900 dark:text-white font-semibold'>React, Next.js, Angular e Ionic</strong>, integradas a backends escalables en <strong className='text-gray-900 dark:text-white font-semibold'>Laravel, Node.js y MySQL</strong>.
                    </p>

                    <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Trabajé en proyectos de sector público, retail y logística, desarrollando soluciones con geolocalización, trazabilidad y flujos operativos críticos, logrando mejoras reales en eficiencia y rendimiento.
                    </p>

                    <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Me enfoco en <strong className='text-gray-900 dark:text-white font-semibold'>producto, UX y calidad de código</strong>, construyendo soluciones mantenibles, orientadas a datos y listas para escalar.
                    </p>

                    <p className='text-indigo-500 dark:text-indigo-300 font-medium mt-6'>
                        💡 Comprometido en encontrar soluciones innovadoras para los desafíos que se presentan.
                    </p>
                </div>

                <div className="mt-8">
                    <DownloadButton />
                </div>
            </div>

            {/* Right Column: Image with "Surprise" Glow Effect */}
            <div className='relative md:w-2/5 flex justify-center'>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-3xl rounded-full scale-110 opacity-0 md:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
                <Image
                    className='relative z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-105 translate-y-[63px] md:translate-y-0'
                    src='/img/myPics/me-mobile.png'
                    alt='Leandro Villalba'
                    width={400}
                    height={434}
                    priority={true}
                />
            </div>
        </section>
    )
}
export default AboutMe
