'use client'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: { y: 36, opacity: 0 },
    visible: (g) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.05 + g * 0.09,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
}

const StaggeredTitle = ({ text, className = '', blurAmount = 10 }) => {
    const rootRef = useRef(null)
    const spansRef = useRef([])

    const letters = useMemo(() => text.split(''), [text])
    const items = useMemo(
        () =>
            letters.map((letter, index) => ({
                letter,
                groupIndex: index % 3,
            })),
        [letters]
    )

    const setSpanRef = (el, i) => {
        if (el) spansRef.current[i] = el
    }

    // Alinear gradiente global
    useLayoutEffect(() => {
        const root = rootRef.current
        if (!root) return

        const apply = () => {
            const totalW = root.getBoundingClientRect().width

            spansRef.current.forEach((span) => {
                if (!span) return
                const left = span.offsetLeft

                span.style.backgroundSize = `${totalW}px 100%`
                span.style.backgroundPosition = `-${left}px 0px`
            })
        }

        apply()

        const ro = new ResizeObserver(() => apply())
        ro.observe(root)

        window.addEventListener('resize', apply)
        return () => {
            ro.disconnect()
            window.removeEventListener('resize', apply)
        }
    }, [text])

    const letterClass =
        "inline-block will-change-transform " +
        "text-transparent bg-clip-text " +
        "bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 " +
        "[text-shadow:0_0_14px_rgba(168,85,247,.55)]"

    return (
        <motion.div
            ref={rootRef}
            className={`relative inline-block text-center ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
                filter: `drop-shadow(0 0 ${blurAmount}px rgba(168,85,247,0.35))`
            }}
        >
            <h2 className="uppercase tracking-widest text-5xl md:text-7xl font-extrabold">
                {items.map((item, idx) => (
                    <motion.span
                        key={idx}
                        ref={(el) => setSpanRef(el, idx)}
                        custom={item.groupIndex}
                        variants={variants}
                        className={letterClass}
                    >
                        {item.letter === ' ' ? '\u00A0' : item.letter}
                    </motion.span>
                ))}
            </h2>
        </motion.div>
    )
}

export default StaggeredTitle
