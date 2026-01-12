import React from 'react'

const Experience = () => {
    return (
        <section id='experience' className='p-10  text-left mt-4  glass-effect rounded'>
            <div className="flex items-center justify-center gap-4 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 uppercase tracking-wide">
                    Experiencia
                </h2>
            </div>
            <ol className="relative border-s border-sky-900 my-4 ">
                <li className="mb-10 ms-4">
                    <a href="https://posadas.gov.ar/" target="_blank" rel="noopener noreferrer" className="absolute bg-gray-900 flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900 hover:ring-indigo-500 transition-all">
                        <img className="rounded-full shadow-lg w-6" src="/img/experiences/municipalidad-logo.png" alt="Municipalidad logo" />
                    </a>
                    <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2025 - Actualidad</time>
                    <h3 className="text-lg font-semibold text-gray-900"><a href="https://posadas.gov.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Municipalidad de Posadas</a></h3>
                    <p className='text-gray-800 text-sm dark:text-gray-300'>Desarrollador Full-Stack</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 ">Desarrollo de aplicaciones web y móviles para la gestión municipal, incluyendo sistema de multas inmobiliarias con geolocalización y cálculo de honorarios de construcción.</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Desarrollé sistema de multas inmobiliarias con geolocalización y evidencia fotográfica</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Creé <a href="https://posadas.gov.ar/honorarios/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 underline">aplicación de cálculo de honorarios</a>, eliminando atención presencial</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Mantenimiento de <a href="https://posadas.gov.ar/planurbano/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 underline">Plan Urbano</a> en WordPress, optimizando performance</p>
                    <p className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-300">Tech stack: PHP · JavaScript · MySQL · WordPress · APIs REST · Geolocalización</p>
                </li>

                <li className="mb-10 ms-4">
                    <a href="https://globaltechscm.com/" target="_blank" rel="noopener noreferrer" className="absolute bg-gray-900 flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900 hover:ring-indigo-500 transition-all">
                        <img className="rounded-full shadow-lg w-6" src="/img/experiences/globaltech-logo.png" alt="GLOBALTECH logo" />
                    </a>
                    <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2024 - Ene 2026</time>
                    <h3 className="text-lg font-semibold text-gray-900"><a href="https://globaltechscm.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GLOBALTECH Software Logístico</a></h3>
                    <p className='text-gray-800 text-sm dark:text-gray-300'>Desarrollador de Software (Full-stack)</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 ">Desarrollo de módulos para TMS y aplicaciones móviles, reduciendo tiempos operativos y mejorando trazabilidad.</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Reduje 28% el tiempo de armado de cartas de porte con Laravel/PHP y Node.js/Express</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Implementé Angular/Ionic + Capacitor para handhelds, reduciendo 35% errores de escaneo</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Estandaricé documentación para +15 módulos, acelerando onboarding 50%</p>
                    <p className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-300">Tech stack: Angular · Ionic/Capacitor · React · Vite · React Native (Expo) · Laravel/PHP · Node.js/Express · MySQL/Oracle · Jest · Git · Docker · Scriptcase</p>
                </li>

                <li className="mb-10 ms-4">
                    <a href="https://www.instagram.com/roblesistemas/" target="_blank" rel="noopener noreferrer" className="absolute bg-gray-900 flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900 hover:ring-indigo-500 transition-all">
                        <img className="rounded-full shadow-lg w-6" src="/img/experiences/roble-logo.png" alt="Roble Sistemas logo" />
                    </a>
                    <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2024 - Jun 2024</time>
                    <h3 className="text-lg font-semibold text-gray-900"><a href="https://www.instagram.com/roblesistemas/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Roble Sistemas SRL</a></h3>
                    <p className='text-gray-800 text-sm dark:text-gray-300'>Desarrollador Full-stack (Node/Express)</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 ">Desarrollo de microservicios y frontends para gestión operativa con Node.js/Express y MongoDB.</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Construí APIs Node.js/Express con MongoDB, mejorando TTFB de listados -40%</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Automaticé pruebas con Jest, reduciendo fallas en QA -25%</p>
                    <p className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-300">Tech stack: React · Node.js · Express · MongoDB · Git · Jest</p>
                </li>

                <li className="mb-10 ms-4">
                    <a href="https://policiamisiones.gob.ar/" target="_blank" rel="noopener noreferrer" className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900 dark:bg-indigo-900 hover:ring-indigo-500 transition-all">
                        <img className="rounded-full shadow-lg" src="/img/experiences/direccion-logo.png" alt="Police of Misiones logo" />
                    </a>
                    <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2023 - Ene 2024</time>
                    <h3 className="text-lg font-semibold text-gray-900"><a href="https://policiamisiones.gob.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Policía de la Provincia de Misiones</a></h3>
                    <p className='text-gray-800 text-sm dark:text-gray-300'>Desarrollador Frontend</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 ">Desarrollo de aplicaciones frontend para la Policía de Misiones, mejorando usabilidad y reduciendo tiempos de respuesta en 30%.</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Desarrollé componentes frontend reutilizables con React y Next.js</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Optimicé interfaces de usuario, mejorando experiencia y eficiencia operativa</p>
                    <p className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-300">Tech stack: React · Next.js · JavaScript · Vite · Bootstrap · jQuery · Laravel · MySQL · Docker</p>
                </li>

                <li className="mb-10 ms-4">
                    <span className="absolute bg-gray-900 flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900">
                        <img className="rounded-full shadow-lg w-6" src="/img/experiences/drinkstore.png" alt="Drinkstore logo" />
                    </span>
                    <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov 2022 - Mar 2024</time>
                    <h3 className="text-lg font-semibold text-gray-900">Drinkstore 24hs</h3>
                    <p className='text-gray-800 text-sm dark:text-gray-300'>Full Stack Developer - Freelancer</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 ">Lideré el desarrollo de un sistema integral de ventas y gestión de stock, aumentando la eficiencia operativa en un 30%.</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Implementé sistema de ventas y gestión interna seguro</p>
                    <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300 mt-4 italic ">• Diseñé landing page pública mejorando accesibilidad y rendimiento</p>
                    <p className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-300">Tech stack: JavaScript · PHP · HTML · CSS · Bootstrap · jQuery · MySQL</p>
                </li>

                <li className="mb-10 ms-4">
                    <span className="absolute bg-gray-900 flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900">
                    </span>
                    <time className="mb-1 ml-1 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">¿Quieres ser el próximo?</time>
                </li>

            </ol>
        </section>
    )
}

export default Experience


