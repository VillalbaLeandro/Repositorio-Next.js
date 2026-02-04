import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import MotionSection, { itemVariants } from './MotionSection'
import StaggeredTitle from './StaggeredTitle'
import { useTheme, THEMES } from '../context/ThemeContext'

const TechnologyIcon = ({ name }) => {
    const iconMap = {
        'PHP': './img/skills/php-logo.png',
        'JavaScript': './img/skills/javascript-logo.png',
        'HTML': './img/skills/html-logo.png',
        'CSS': './img/skills/css-logo.png',
        'MySQL': './img/skills/Mysql-logo.png',
        'WordPress': './img/skills/wordpress-logo.png',
        'Angular': './img/skills/angular-logo.png',
        'Ionic': './img/skills/ionic-logo.png',
        'React': './img/skills/react-logo.webp',
        'Next.js': './img/skills/nextjs.svg',
        'Vite': './img/skills/vite-logo.png',
        'Laravel': './img/skills/laravel-logo.png',
        'Node.js': './img/skills/node-logo.png',
        'Express': './img/skills/express-logo.png',
        'Oracle': './img/skills/oracle-logo.png',
        'SQL': './img/skills/sql-logo.png',
        'Android': './img/skills/android-logo.png',
        'Jest': './img/skills/jest-logo.png',
        'Git': './img/skills/git-logo.png',
        'Docker': './img/skills/docker-logo.png',
        'MongoDB': './img/skills/mongodb-logo.png',
        'Bootstrap': './img/skills/bootstrap-logo.png',
        'jQuery': './img/skills/jquery-logo.png',
        'React Native': './img/skills/react-native-logo.png',
        'Slim': './img/skills/php-logo.png',
        'Sc': './img/skills/sc-logo.png',
    };

    const src = iconMap[name] || iconMap[name.split(' ')[0]];

    if (!src) return <span className="text-[10px] px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">{name}</span>;

    return (
        <div className="group relative">
            <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:scale-110 flex items-center justify-center shadow-sm border border-indigo-500/30`}>
                <img src={src} alt={name} className="w-7 h-7 object-contain" />
            </div>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                {name}
            </span>
        </div>
    );
};

const Experience = () => {
    const { theme } = useTheme()
    const isLight = theme === THEMES.LIGHT

    React.useEffect(() => {
        const syncPointer = ({ x, y }) => {
            document.documentElement.style.setProperty('--x', x.toFixed(2));
            document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
            document.documentElement.style.setProperty('--y', y.toFixed(2));
            document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
        };
        document.body.addEventListener('pointermove', syncPointer);
        return () => {
            document.body.removeEventListener('pointermove', syncPointer);
        };
    }, []);

    const experiences = [
        {
            company: "Municipalidad de Posadas",
            role: "Desarrollador Full-Stack",
            period: "Jun 2025 - Actualidad",
            logo: "/img/experiences/municipalidad-logo.png",
            url: "https://posadas.gov.ar/",
            starAchievement: <>Automaticé procesos de inspección y notificación de obras, reemplazando flujos manuales por soluciones móviles y web con trazabilidad, geolocalización y evidencia digital.</>,
            achievements: [
                {
                    text: <><span className='font-bold text-gray-900 dark:text-gray-100'>Sistema de Fiscalización:</span> App Android + Oracle con geolocalización e integración con <span className="font-bold text-emerald-500">terminales POS</span> para impresión de actas en tiempo real.</>
                },
                {
                    text: <><span className='font-bold text-gray-900 dark:text-gray-100'>Dashboard & Analytics:</span> Panel administrativo en Laravel/Angular para control y auditoría de actas con estadísticas de gestión.</>
                },
                {
                    text: <><span className='font-bold text-gray-900 dark:text-gray-100'>Cálculo de Honorarios:</span> Herramienta de autogestión que automatizó procesos manuales, optimizando tiempos de gestión.</>,
                    link: "https://calcular-honorarios.infinityfreeapp.com/?i=3"
                },
                {
                    text: <><span className='font-bold text-gray-900 dark:text-gray-100'>Plan Urbano:</span> Optimización de performance y rediseño en WordPress para datos públicos municipales.</>,
                    link: "https://posadas.gov.ar/planurbano/"
                }
            ],
            tech: ["Laravel", "PHP", "JavaScript", "MySQL", "Oracle", "WordPress", "Bootstrap", "Git", "Android"]
        },
        {
            company: "GLOBALTECH Software",
            role: "Desarrollador de Software Full-stack",
            period: "Jun 2024 - Ene 2026",
            logo: "/img/experiences/globaltech-logo.png",
            url: "https://globaltechscm.com/",
            starAchievement: <>Participé en el desarrollo y mantenimiento del <span className='text-indigo-500'>TMS</span> (Transportation Management System) y su ecosistema de trazabilidad logística integral.</>,
            achievements: [
                {
                    text: <><span className="font-bold text-gray-900 dark:text-gray-100">Core TMS & Business Logic:</span> Desarrollé módulos críticos de gestión de transporte (HDR, pedidos y despacho), implementando lógica compleja en Laravel y Node.js para despliegues masivos en servidores de clientes.</>
                },
                {
                    text: <><span className="font-bold text-gray-900 dark:text-gray-100">Ecosistema Satelital:</span> Trabajé en la arquitectura de sincronización entre el Core y apps móviles de picking (React Native) y última milla (Ionic), logrando un <span className="font-bold text-emerald-500">-35% en errores</span>.</>
                },
                {
                    text: <><span className="font-bold text-gray-900 dark:text-gray-100">Performance & Infra:</span> Creé consultas SQL y endpoints de tracking real-time, mejorando latencias un <span className="font-bold text-emerald-500">1.8x</span> y reduciendo el tiempo de armado de cartas de porte y creacion de pedidos en un <span className="font-bold text-emerald-500">28%</span>.</>
                },
                {
                    text: <><span className="font-bold text-gray-900 dark:text-gray-100">Liderazgo Técnico:</span> Realicé estimaciones de tiempos, soporte técnico de nivel 3 y estandaricé documentación que redujo el onboarding del equipo en un <span className="font-bold text-emerald-500">50%</span>.</>
                }
            ],
            tech: ["Node.js", "Laravel", "Slim", "React Native", "Sc", "Angular", "Ionic", "SQL", "Jest", "Vite", "Git"]
        },
        {
            company: "Roble Sistemas SRL",
            role: "Desarrollador Full-stack",
            period: "Mar 2024 - Jun 2024",
            logo: "/img/experiences/roble-logo.png",
            url: "https://www.instagram.com/roblesistemas/",
            starAchievement: <>Mejoré el TTFB de listados en un <span className='text-emerald-500'>40%</span> mediante APIs optimizadas.</>,
            achievements: [
                { text: <>Reduje fallas en QA un <span className="font-bold text-emerald-500">25%</span> mediante automatización de pruebas con Jest y patrones DTO.</> },
                { text: "Desarrollo de microservicios y frontends livianos para gestión operativa y reporting." }
            ],
            tech: ["React", "Node.js", "Express", "MongoDB", "Git", "Jest"]
        },
        {
            company: "Policía de Misiones",
            role: "Desarrollador Frontend",
            period: "Mar 2023 - Ene 2024",
            logo: "/img/experiences/direccion-logo.png",
            url: "https://policiamisiones.gob.ar/",
            starAchievement: <>Reduje los tiempos de respuesta del sistema en un <span className='text-emerald-500'>30%</span>.</>,
            achievements: [
                { text: "Diseñé una librería de componentes reutilizables en React/Next.js para aplicaciones de misión crítica." },
                { text: "Optimicé interfaces de usuario intuitivas y seguras para mejorar la experiencia operativa." }
            ],
            tech: ["React", "Next.js", "JavaScript", "Vite", "Bootstrap", "jQuery", "Laravel", "MySQL", "Docker"]
        },
        {
            company: "Drinkstore 24hs",
            role: "Full Stack Developer (Freelance)",
            period: "Nov 2022 - Mar 2024",
            logo: "/img/experiences/drinkstore.png",
            url: null,
            starAchievement: <>Incrementé la eficiencia operativa un <span className='text-emerald-500'>30%</span> con un sistema de stock.</>,
            achievements: [
                { text: "Implementé un sistema de ventas seguro y una landing page de alto rendimiento." },
                { text: "Optimicé el acceso a información crítica y la gestión interna de inventario." }
            ],
            tech: ["JavaScript", "PHP", "HTML", "CSS", "Bootstrap", "jQuery", "MySQL"]
        }
    ];

    const containerRef = useRef(null)
    const [proximity, setProximity] = useState(1) // 1 = far, 0 = close

    // Track proximity to the entire title container
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const dx = e.clientX - centerX
            const dy = e.clientY - centerY
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Max distance = 300px
            const maxDistance = 300
            const normalizedDistance = Math.min(distance / maxDistance, 1)

            setProximity(normalizedDistance)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Dynamic values based on proximity
    const blurAmount = Math.round(proximity * 15) // 15px -> 0px
    const separatorWidth = 256 + (1 - proximity) * 128 // 256px -> 384px
    const separatorOpacity = 0.75 + (1 - proximity) * 0.25 // 0.75 -> 1

    return (
        <div className="w-full bg-slate-50 dark:bg-transparent py-24 my-24 border-y border-slate-200 dark:border-none transition-colors duration-300">
            <div id='experience' className='w-[90vw] max-w-screen-xl mx-auto scroll-mt-48'>
                <div ref={containerRef} className="flex items-center justify-center gap-3 mb-12">
                    <div className="relative z-10 text-center">
                        {!isLight && (
                            <>
                                {/* Halo gigante (glow externo) */}
                                <div
                                    className="
      pointer-events-none absolute left-1/2 top-1/2
      h-16 w-[20rem] sm:h-20 sm:w-[26rem] md:h-24 md:w-[32rem] -translate-x-1/2 -translate-y-1/2
      rounded-full
      bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400
      blur-3xl opacity-35
    "
                                />

                                {/* Halo secundario más "apretado" */}
                                <div
                                    className="
      pointer-events-none absolute left-1/2 top-1/2
      h-8 w-[16rem] sm:h-10 sm:w-[20rem] md:h-12 md:w-[22rem] -translate-x-1/2 -translate-y-1/2
      rounded-full
      bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-300
      blur-2xl opacity-40
    "
                                />
                            </>
                        )}

                        <StaggeredTitle text="EXPERIENCIA" blurAmount={blurAmount} />

                        {/* Title separator */}
                        <div
                            className={`h-[2px] mx-auto mt-6 ${isLight ? 'blur-[0px]' : 'blur-[1px]'} transition-all duration-300 bg-gradient-to-r from-transparent ${isLight ? 'via-[#44476a]' : 'via-indigo-500'
                                } to-transparent`}
                            style={{
                                width: `${separatorWidth}px`,
                                opacity: separatorOpacity
                            }}
                        ></div>
                    </div>
                </div>

                <MotionSection className='text-left mt-10 p-4 sm:p-6 md:p-10'>
                    <div className="relative border-l-2 border-indigo-900/10 dark:border-indigo-500/10 ml-3 md:ml-6 my-4 space-y-16">
                        {experiences.map((exp, index) => {
                            const baseHue = [220, 280, 320][index % 3];
                            const spread = [200, 500, 200][index % 3];

                            return (
                                <motion.div variants={itemVariants} key={index} className="relative pl-8 md:pl-12 group/item">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.2)] dark:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] group-hover/item:scale-125 transition-transform z-10"></div>

                                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                                        {/* Left Column: Dates & Logo (Original Layout) */}
                                        <div className="md:w-1/3 shrink-0">
                                            <Link href={exp.url || '#'} target={exp.url ? "_blank" : ""} className="group flex items-center gap-4 mb-3">
                                                <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 p-2 shadow-md border border-gray-100 dark:border-gray-700 group-hover:border-indigo-500 transition-all duration-300">
                                                    <img className="w-full h-full object-contain rounded-md" src={exp.logo} alt={`${exp.company} logo`} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-indigo-500 transition-colors">
                                                        {exp.company}
                                                    </h3>
                                                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{exp.role}</div>
                                                    {/* Ver sitio link */}
                                                    {exp.url && (
                                                        <div className="text-xs text-gray-500 group-hover:text-indigo-500 mt-1 flex items-center gap-1 transition-colors">
                                                            Ver sitio <span className="text-[10px]">↗</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                            <div className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">{exp.period}</div>

                                            {/* Separator */}
                                            <div className="h-px w-full bg-gradient-to-r from-indigo-500/20 to-transparent my-3"></div>

                                            {/* Tech Stack - Moved here */}
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {exp.tech.map((tech) => (
                                                    <TechnologyIcon key={tech} name={tech} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Column: Neumorphic Card (Content) with Dynamic Glow */}
                                        {/* data-glow and custom properties for the mouse effect */}
                                        <div
                                            className="md:w-2/3 w-full neuro-card2 relative"
                                            data-glow
                                            style={{ '--base': baseHue, '--spread': spread, '--outer': 1 }}
                                        >
                                            <div data-glow></div>
                                            <div className="relative z-10">
                                                {/* Star Achievement Box */}
                                                <div className="mb-5 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 relative overflow-hidden">
                                                    <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500"></div>
                                                    <p className="text-base font-bold text-gray-800 dark:text-gray-100 leading-snug">
                                                        {exp.starAchievement}
                                                    </p>
                                                </div>

                                                {/* Bullet Points */}
                                                <ul className="space-y-3 mb-6">
                                                    {exp.achievements.map((item, idx) => (
                                                        <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                                                            <span className="flex-1">
                                                                {item.text}
                                                                {item.link && (
                                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-400 hover:text-indigo-300 font-medium text-xs transition-colors group/link inline-flex items-center gap-1">
                                                                        Ver sitio
                                                                        <span className="group-hover/link:translate-x-0.5 transition-transform">↗</span>
                                                                    </a>
                                                                )}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>

                    {/* Final CTA - Centered & Clean */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-center mt-24 mb-10"
                    >
                        <div className="relative group">
                            <Link href="#contact" className="relative z-10 block px-10 py-4 rounded-full bg-slate-100 dark:bg-indigo-950/30 border border-slate-300 dark:border-indigo-500/30 hover:border-slate-500 dark:hover:border-indigo-400 text-center text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 backdrop-blur-sm overflow-hidden">
                                <div className="absolute inset-0 bg-slate-200 dark:bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <span className="relative font-medium tracking-wide text-lg">Trabajemos juntos Contactame</span>
                            </Link>

                            {/* Animated Cursor */}
                            <motion.div
                                className="absolute -bottom-6 -right-8 z-20 pointer-events-none text-indigo-500 dark:text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                initial={{ opacity: 0, x: 50, y: 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 1.2,
                                    duration: 1,
                                    type: "spring",
                                    stiffness: 40
                                }}
                            >
                                <motion.svg
                                    className="w-16 h-16"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{
                                        scale: [1, 0.9, 1],
                                        x: [0, -2, 0],
                                        y: [0, -2, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1 // Wait for entrance to finish
                                    }}
                                >
                                    <path d="M5.5 3.5L11.5 19.5L14.5 13L21 20L23 18L16.5 11L21.5 9L5.5 3.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </motion.div>
                </MotionSection>
            </div>
        </div>
    )
}

export default Experience
