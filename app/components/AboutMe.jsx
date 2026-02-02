import React from 'react'
import { motion } from 'framer-motion'
// import DownloadButton from './DownloadButton'
import DownloadCvButton from './DownloadCvButton'
import Avatar3D from './Avatar3D'
import DraggableBadge from './DraggableBadge'


const AboutMe = () => {

    const [isAnyBadgeDragging, setIsAnyBadgeDragging] = React.useState(false)

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
            className='min-h-screen flex flex-col md:flex-row items-center md:items-start justify-between w-[90vw] max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 pt-20 md:pt-28 relative overflow-visible gap-2 md:gap-6'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            {/* Left Column: Text Content */}
            <motion.div className='flex flex-col items-center md:items-start text-center md:text-left z-10 md:w-3/5 w-full order-1 md:order-none'>
                <motion.h1 variants={itemVariants} className='text-gray-800 font-bold text-lg dark:text-white tracking-widest uppercase mb-2'>Leandro Villalba</motion.h1>

                {/* Giant title text */}
                <motion.div variants={itemVariants}>
                    <h2 className='font-extrabold text-[10.5vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-blue-500/70 to-transparent animate-gradient whitespace-nowrap mb-0'>
                        FULLSTACK
                    </h2>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h2 className='font-extrabold text-[10.5vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-blue-500 via-cyan-400/70 to-transparent animate-gradient whitespace-nowrap -mt-2 md:mb-6'>
                        DEVELOPER
                    </h2>
                </motion.div>

                {/* Description - Hidden on mobile, shown on desktop */}
                <motion.div variants={itemVariants} className='hidden md:block max-w-2xl space-y-4 text-base md:text-lg'>
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
            </motion.div>

            {/* Right Column: Image with "Surprise" Glow Effect */}
            <motion.div className='relative md:w-2/5 flex flex-col items-center justify-center w-full order-2 md:order-none' variants={avatarVariants}>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-3xl rounded-full scale-110 opacity-0 md:opacity-100 transition-opacity duration-1000 animate-pulse pointer-events-none"></div>

                {/* 3D Model Replacement */}
                <Avatar3D isDraggingProp={isAnyBadgeDragging} />

                {/* Floating Badges */}
                <DraggableBadge
                    className="badge-1"
                    iconSrc="./img/skills/react-logo.webp"
                    iconAlt="Frontend"
                    title="Frontend"
                    libs="React, Next.js, Angular"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={1.5}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                <DraggableBadge
                    className="badge-2"
                    iconSrc="./img/skills/node-logo.png"
                    iconAlt="Backend"
                    title="Backend"
                    libs="Node.js, Laravel"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={1.7}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                <DraggableBadge
                    className="badge-3"
                    iconSrc="./img/skills/react-native-logo.png"
                    iconAlt="Mobile"
                    title="Mobile"
                    libs="React Native, Ionic"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={1.9}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                <DraggableBadge
                    className="badge-4"
                    iconSrc="./img/skills/sql-logo.png"
                    iconAlt="Data"
                    title="Data & Infra"
                    libs="MySQL, Oracle, Docker"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={2.1}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                <DraggableBadge
                    className="badge-5"
                    iconSrc="./img/skills/android.png"
                    iconAlt="Angular"
                    title="Angular"
                    libs="TypeScript, RxJS"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={2.3}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                <DraggableBadge
                    className="badge-6"
                    iconSrc="./img/skills/nextjs.svg"
                    iconAlt="Oracle"
                    title="Oracle"
                    libs="Database, PL/SQL"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={2.5}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                <DraggableBadge
                    className="badge-7"
                    iconSrc="./img/skills/angular-logo.png"
                    iconAlt="Android"
                    title="Android"
                    libs="Ionic, Capacitor"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={2.7}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                <DraggableBadge
                    className="badge-8"
                    iconSrc="./img/skills/oracle-logo.png"
                    iconAlt="Next.js"
                    title="Next.js"
                    libs="React, SSR"
                    constraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    appearDelay={2.9}
                    onInternalDragStart={() => setIsAnyBadgeDragging(true)}
                    onInternalDragEnd={() => setIsAnyBadgeDragging(false)}
                />

                {/* Buttons - Shown on both mobile and desktop */}
                <motion.div variants={itemVariants} className="-mt-8 md:-mt-14 z-20 w-full max-w-[300px] flex justify-center">
                    <DownloadCvButton
                        href="/CV - Leandro Esteban Villalba.pdf"
                        fileName="CV - Leandro Esteban Villalba.pdf"
                        label="DESCARGAR CV"
                    />
                </motion.div>
                <motion.a href="#contact" variants={itemVariants} className="my-4 transform active:scale-95 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-3 rounded-lg font-bold tracking-widest text-center shadow-lg transition-all duration-300 z-20 w-full max-w-[300px] border-2 border-transparent hover:border-indigo-400">
                    <span className="uppercase">CONTACTAME</span>
                </motion.a>
            </motion.div>

            {/* Mobile Description - Order 3, shown only on mobile */}
            <motion.div className='flex md:hidden flex-col items-center text-center z-10 w-full order-3'>
                <motion.div variants={itemVariants} className='max-w-2xl space-y-4 text-base px-4'>
                    <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Con más de <strong className='text-gray-900 dark:text-white font-semibold'>4 años de experiencia</strong> en el desarrollo de aplicaciones <strong className='text-gray-900 dark:text-white font-semibold'>web y mobile</strong>, trabajo con tecnologías como <strong className='text-gray-900 dark:text-white font-semibold'>React, Next.js, Angular e Ionic</strong>, integrándolas con <strong className='text-gray-900 dark:text-white font-semibold'>backends escalables en Laravel y Node.js</strong>, y con <strong className='text-gray-900 dark:text-white font-semibold'>sólidos conocimientos en bases de datos MySQL</strong>.
                    </p>

                    <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Me enfoco en <strong className='text-gray-900 dark:text-white font-semibold'>producto, UX y calidad de código</strong>, construyendo soluciones mantenibles, orientadas a datos y listas para escalar.
                    </p>

                    <p className='text-indigo-500 dark:text-indigo-300 font-medium mt-6'>
                        💡 Comprometido en encontrar soluciones innovadoras para los desafíos que se presentan.
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
export default AboutMe
