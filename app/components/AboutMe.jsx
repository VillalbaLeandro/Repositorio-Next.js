import React from 'react'
import DownloadButton from './DownloadButton'
import Avatar3D from './Avatar3D'


const AboutMe = () => {
    return (
        <section id='home' className='mt-2 rounded xs:max-w-85 xl:max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between w-[90vw] max-w-screen-xl mx-auto sm:p-6 md:p-10 relative overflow-visible gap-6'>

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
                        Con más de <strong className='text-gray-900 dark:text-white font-semibold'>4 años de experiencia</strong> en el desarrollo de aplicaciones <strong className='text-gray-900 dark:text-white font-semibold'>web y mobile</strong>, trabajo con tecnologías como <strong className='text-gray-900 dark:text-white font-semibold'>React, Next.js, Angular e Ionic</strong>, integrándolas con <strong className='text-gray-900 dark:text-white font-semibold'>backends escalables en Laravel y Node.js</strong>, y con <strong className='text-gray-900 dark:text-white font-semibold'>sólidos conocimientos en bases de datos MySQL</strong>.
                    </p>

                    <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Trabajé en diversos proyectos desarrollando soluciones con geolocalización, trazabilidad y flujos operativos críticos, logrando mejoras reales en eficiencia y rendimiento.
                    </p>

                    <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Me enfoco en <strong className='text-gray-900 dark:text-white font-semibold'>producto, UX y calidad de código</strong>, construyendo soluciones mantenibles, orientadas a datos y listas para escalar.
                    </p>

                    <p className='text-indigo-500 dark:text-indigo-300 font-medium mt-6'>
                        💡 Comprometido en encontrar soluciones innovadoras para los desafíos que se presentan.
                    </p>
                </div>

                <div className="mt-8 md:hidden">
                    <DownloadButton />
                </div>
            </div>

            {/* Right Column: Image with "Surprise" Glow Effect */}
            <div className='relative md:w-2/5 flex flex-col items-center justify-center '>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-3xl rounded-full scale-110 opacity-0 md:opacity-100 transition-opacity duration-1000 animate-pulse"></div>

                {/* 3D Model Replacement */}
                <Avatar3D />

                <div className="hidden md:block -mt-14 z-20 w-full max-w-[300px]">
                    <DownloadButton />
                </div>
                <a href="#contact" className="hidden md:block mt-4 transform active:scale-95 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-3 rounded-lg font-bold tracking-widest text-center shadow-lg transition-all duration-300 z-20 w-full max-w-[300px] border-2 border-transparent hover:border-indigo-400">
                    <span className="uppercase">CONTACT ME</span>
                </a>
            </div>
        </section>
    )
}
export default AboutMe
