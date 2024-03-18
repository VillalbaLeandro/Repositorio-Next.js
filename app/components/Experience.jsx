import React from 'react'

const Experience = () => {

    const experienciesInfo = [{
        img: "/img/experiences/direccion-logo.png",
        name: "Policia de la Provincia de Misiones",
        rol: "Frontend Developer",
        description: "Participé en proyectos clave de desarrollo frontend para la Policía de la Provincia de Misiones, enfocándome en el aprendizaje y la aplicación de tecnologías como Laravel, React y MySQL.",
    }]

    return (
        <>
            <div className='p-10  text-left  glass-effect rounded'>
                <h2 className='font-bold text-xl '>Experience</h2>
                <ol className="relative border-s border-sky-900 my-4 ">
                    <li className="mb-10 ms-4">
                        <span className="absolute bg-gray-900 flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900">
                            <img className="rounded-full shadow-lg w-6" src="/img/experiences/drinkstore.png" alt="Police of Misiones logo" />
                        </span>
                        <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">nov. 2022 - Actualidad </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Drinkstore 24hs </h3>
                        <p className='text-gray-300 text-sm  '>Full Stack Developer - Freelancer</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 ">Contribuí al desarrollo y mantenimiento de un sistema de ventas, control de caja y stock, aplicando buenas prácticas de desarrollo y colaborando estrechamente con el equipo de desarrollo. </p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 ">Actualmente me encuentro migrando el sistema desde PHP a Next.js 14</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 italic ">• Lideré la planificación y estimación del desarrollo del sitio web, garantizando la entrega oportuna y dentro del presupuesto.</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 italic ">• Colaboré con el equipo de diseño para traducir los diseños de la página web en componentes web funcionales y estéticamente atractivos.</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 italic ">• Implementé interacciones de usuario dinámicas y animaciones de interfaz utilizando JavaScript, mejorando la experiencia del usuario y la retención.</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 italic ">• Contribuí al mantenimiento y resolución de errores del sitio web, garantizando su funcionamiento continuo y la satisfacción del cliente.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900 dark:bg-indigo-900">
                            <img className="rounded-full shadow-lg" src="/img/experiences/direccion-logo.png" alt="Police of Misiones logo" />
                        </span>
                        <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023 to January 2024</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Policia de la Provincia de Misiones</h3>
                        <p className='text-gray-300 text-sm  '>Frontend Developer</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 ">Participé en proyectos clave de desarrollo frontend para la Policía de la Provincia de Misiones, enfocándome en el aprendizaje y la aplicación de tecnologías como Laravel, React y MySQL.</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 italic ">• Colaboré con un equipo experimentado en el desarrollo de aplicaciones web de misión crítica, mejorando mis habilidades en tecnologías clave como Laravel y React.</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 italic ">• Contribuí al diseño e implementación de interfaces de usuario intuitivas y seguras, mejorando la experiencia del usuario y la eficiencia operativa.</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-4 italic ">• Desarrollé y mantuve componentes frontend reutilizables, lo que permitió una mayor eficiencia en el desarrollo y una respuesta más rápida a los requisitos cambiantes del proyecto.</p>
                    </li>

                    <li className="mb-10 ms-4">
                        <span className="absolute bg-gray-900 flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-2  dark:ring-indigo-900">
                        </span>
                        <time className="mb-1 ml-1 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Do you want to be the next? </time>

                    </li>

                </ol>
            </div>
        </>
    )
}

export default Experience
