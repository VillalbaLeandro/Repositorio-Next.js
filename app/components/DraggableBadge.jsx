import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

/**
 * Badge arrastrable con:
 * - Drag + momentum corto en dirección de la suelta
 * - Retorno suave a su posición original
 * - Idle float sutil cuando está en reposo
 */
const DraggableBadge = ({
    className = '',
    iconSrc,
    iconAlt,
    title,
    libs,
    constraints = { top: -100, left: -100, right: 100, bottom: 100 },
    appearDelay = 0,
    onInternalDragStart,
    onInternalDragEnd
}) => {
    const controls = useAnimationControls()
    const [isDragging, setIsDragging] = React.useState(false)

    // 1) Aparición inicial
    React.useEffect(() => {
        controls.start({
            opacity: 1,
            scale: 1,
            transition: { delay: appearDelay, type: 'spring' }
        })
    }, [appearDelay, controls])

    // 2) Ciclo de “idle float”
    React.useEffect(() => {
        if (isDragging) return
        controls.start({
            x: [0, 8, 0, -8, 0],
            y: [0, -12, 0, 12, 0],
            transition: {
                duration: 4 + Math.random() * 2, // Duración entre 4 y 6s
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2 // Desfase aleatorio
            }
        })
    }, [isDragging, controls])

    const badgeRef = React.useRef(null)

    const handleDragStart = () => {
        setIsDragging(true)
        if (onInternalDragStart) onInternalDragStart()

        controls.start({ scale: 1.08 })

        // Optimización: Desactivar efectos costosos
        if (badgeRef.current) {
            badgeRef.current.classList.add('dragging-lite')
        }
    }

    const handleDragEnd = async () => {
        if (onInternalDragEnd) onInternalDragEnd()

        // Restaurar efectos
        if (badgeRef.current) {
            badgeRef.current.classList.remove('dragging-lite')
        }

        // Regreso suave "flotando" al origen
        await controls.start({
            x: 0,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 50, damping: 10 }
        })

        setIsDragging(false)
    }

    return (
        <motion.div
            ref={badgeRef}
            className={`floating-badge ${className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.06 }}
            transition={{ type: 'spring', delay: appearDelay }}
            drag
            dragConstraints={constraints}
            dragElastic={0.28}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20, power: 0.6, timeConstant: 180 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ touchAction: 'none', willChange: 'transform' }}
        >
            <img src={iconSrc} alt={iconAlt} className="badge-icon pointer-events-none select-none" draggable={false} />
            <div className="badge-content pointer-events-none select-none">
                <span className="badge-title">{title}</span>
                <span className="badge-libs">{libs}</span>
            </div>
        </motion.div>
    )
}

export default DraggableBadge
