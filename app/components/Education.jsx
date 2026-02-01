import Link from 'next/link'
import StaggeredTitle from './StaggeredTitle'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CredentialCard from './CredentialCard'

const Education = () => {
  const containerRef = useRef(null)
  const [proximity, setProximity] = useState(1)

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

      const maxDistance = 300
      const normalizedDistance = Math.min(distance / maxDistance, 1)

      setProximity(normalizedDistance)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const blurAmount = Math.round(proximity * 15)
  const separatorWidth = 256 + (1 - proximity) * 128
  const separatorOpacity = 0.75 + (1 - proximity) * 0.25

  React.useEffect(() => {
    const syncPointer = ({ x, y }) => {
      document.documentElement.style.setProperty('--x', x.toFixed(2));
      document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty('--y', y.toFixed(2));
      document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
    };
    document.body.addEventListener('pointermove', syncPointer);
    return () => document.body.removeEventListener('pointermove', syncPointer);
  }, []);

  const educationData = [
    {
      period: "Mar 2022 - Actualidad",
      institution: "Esc. Normal Superior Nº 10",
      title: "Analista de Sistemas",
      certificatedLink: "",
      certificatedImage: ""
    },
    {
      period: "Ene 2023 - Feb 2024",
      institution: "Instructor de Capacitación",
      title: "Herramientas de Productividad e IA",
      certificatedLink: "",
      certificatedImage: ""
    },
    {
      period: "Mar 2023 - Jun 2023",
      institution: "Programa One - Oracle",
      title: "Desarrollador Front end",
      certificatedLink: "https://drive.google.com/file/d/1EnonN3AqnsezJDnnQdernh5g_2btuse5/view?usp=sharing",
      certificatedImage: "./img/certificated/oracle-alura-certificated.png"
    },
    {
      period: "Jun 2022 - Nov 2022",
      institution: "DigitalHouse",
      title: "Desarrollo Web Full Stack",
      certificatedLink: "https://drive.google.com/file/d/1TqLLxQIuLySwQ8lQwgIFNK_PoB0XlqzV/view",
      certificatedImage: "./img/certificated/dg-certificated.png"
    },
    {
      period: "Sept 2022 - Oct 2022",
      institution: "Huawei - Seeds for the future",
      title: "5G - Inteligencia artificial - IOT",
      certificatedLink: "https://drive.google.com/file/d/173dMSsQkhM3jD-MuiGXmW6bFk3Uc0prD/view",
      certificatedImage: "./img/certificated/huawei-certificated.jpg"
    },
  ]
  return (
    <section id='education' className='mb-20'>
      <div ref={containerRef} className="flex items-center justify-center gap-3 mb-16">
        <div className="relative z-10 text-center">
          {/* Halo gigante (glow externo) */}
          <div
            className="
  pointer-events-none absolute left-1/2 top-1/2
  h-24 w-[32rem] -translate-x-1/2 -translate-y-1/2
  rounded-full
  bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400
  blur-3xl opacity-35
"
          />

          {/* Halo secundario más “apretado” */}
          <div
            className="
  pointer-events-none absolute left-1/2 top-1/2
  h-12 w-[22rem] -translate-x-1/2 -translate-y-1/2
  rounded-full
  bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-300
  blur-2xl opacity-40
"
          />

          <StaggeredTitle text="FORMACIÓN" blurAmount={blurAmount} />

          {/* Title separator */}
          <div
            className="h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[1px] transition-all duration-300"
            style={{
              width: `${separatorWidth}px`,
              opacity: separatorOpacity
            }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[90vw] max-w-screen-xl mx-auto px-4">
        {educationData.map((item, index) => (
          <CredentialCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Education


