import React from 'react'
import { motion } from 'framer-motion'
// import DownloadButton from './DownloadButton'
import DownloadCvButton from './DownloadCvButton'
import Avatar3D from './Avatar3D'


const AboutMe = () => {

    // Stagger Container Variant
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each child
                delayChildren: 0.2,    // Initial delay
            }
        }
    }

    // Item Variant (Slide Up + Fade In)
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 50, damping: 15 }
        }
    }

    // Special variant for the Avatar (appears from right)
    const avatarVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 40, damping: 15, delay: 0.5 } // Delayed a bit more
        }
    }

    return (
        <motion.section
            id='home'
            className='min-h-screen flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-[90vw] max-w-screen-xl mx-auto sm:p-6 md:p-10 md:pt-28 relative overflow-visible gap-6'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            {/* Left Column: Text Content */}
            <motion.div className='flex flex-col items-center md:items-start text-center md:text-left z-10 md:w-3/5'>
                <motion.h1 variants={itemVariants} className='text-gray-800 font-bold text-lg dark:text-gray-200 tracking-widest uppercase mb-2'>Leandro Villalba</motion.h1>

                {/* Giant title text */}
                <motion.div variants={itemVariants}>
                    <h2 className='font-extrabold text-[10.5vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-blue-500/70 to-transparent animate-gradient whitespace-nowrap mb-0'>
                        FULLSTACK
                    </h2>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h2 className='font-extrabold text-[10.5vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-blue-500 via-cyan-400/70 to-transparent animate-gradient whitespace-nowrap -mt-2 mb-6'>
                        DEVELOPER
                    </h2>
                </motion.div>

                <motion.div variants={itemVariants} className='max-w-2xl space-y-4 text-base md:text-lg'>
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
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 md:hidden flex justify-center">
                    <DownloadCvButton
                        href="/CV - Leandro Esteban Villalba.pdf"
                        fileName="CV - Leandro Esteban Villalba.pdf"
                        label="DESCARGAR CV"
                    />
                </motion.div>
            </motion.div>

            {/* Right Column: Image with "Surprise" Glow Effect */}
            <motion.div className='relative md:w-2/5 flex flex-col items-center justify-center ' variants={avatarVariants}>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-3xl rounded-full scale-110 opacity-0 md:opacity-100 transition-opacity duration-1000 animate-pulse"></div>

                {/* 3D Model Replacement */}
                <Avatar3D />

                {/* Floating Badges */}
                <motion.div className="floating-badge badge-1" variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { delay: 1.5, type: 'spring' } } }}>
                    <img src="./img/skills/react-logo.webp" alt="Frontend" className="badge-icon" />
                    <div className="badge-content">
                        <span className="badge-title">Frontend</span>
                        <span className="badge-libs">React, Next.js, Angular</span>
                    </div>
                </motion.div>

                <motion.div className="floating-badge badge-2" variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { delay: 1.7, type: 'spring' } } }}>
                    <img src="./img/skills/node-logo.png" alt="Backend" className="badge-icon" />
                    <div className="badge-content">
                        <span className="badge-title">Backend</span>
                        <span className="badge-libs">Node.js, Laravel</span>
                    </div>
                </motion.div>

                <motion.div className="floating-badge badge-3" variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { delay: 1.9, type: 'spring' } } }}>
                    <img src="./img/skills/react-native-logo.png" alt="Mobile" className="badge-icon" />
                    <div className="badge-content">
                        <span className="badge-title">Mobile</span>
                        <span className="badge-libs">React Native, Ionic</span>
                    </div>
                </motion.div>

                <motion.div className="floating-badge badge-4" variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { delay: 2.1, type: 'spring' } } }}>
                    <img src="./img/skills/sql-logo.png" alt="Data" className="badge-icon" />
                    <div className="badge-content">
                        <span className="badge-title">Data & Infra</span>
                        <span className="badge-libs">MySQL, Oracle, Docker</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="hidden md:block -mt-14 z-20 w-full max-w-[300px] flex justify-center">
                    <DownloadCvButton
                        href="/CV - Leandro Esteban Villalba.pdf"
                        fileName="CV - Leandro Esteban Villalba.pdf"
                        label="DESCARGAR CV"
                    />
                </motion.div>
                <motion.a href="#contact" variants={itemVariants} className="hidden md:block mt-4 transform active:scale-95 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-3 rounded-lg font-bold tracking-widest text-center shadow-lg transition-all duration-300 z-20 w-full max-w-[300px] border-2 border-transparent hover:border-indigo-400">
                    <span className="uppercase">CONTACTAME</span>
                </motion.a>
            </motion.div>
        </motion.section>
    )
}
export default AboutMe
