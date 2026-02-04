'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images, projectName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handlePrevious = useCallback((e) => {
        e?.stopPropagation();
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsTransitioning(false), 300);
    }, [images.length, isTransitioning]);

    const handleNext = useCallback((e) => {
        e?.stopPropagation();
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTransitioning(false), 300);
    }, [images.length, isTransitioning]);

    const goToSlide = (index, e) => {
        e?.stopPropagation();
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const toggleFullscreen = (e) => {
        e?.stopPropagation();
        setIsFullscreen(!isFullscreen);
    };

    // Manejo de teclado para fullscreen
    useEffect(() => {
        if (!isFullscreen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsFullscreen(false);
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        // Deshabilitar scroll del body
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'; // Restaurar scroll
        };
    }, [isFullscreen, handleNext, handlePrevious]);

    const showControls = images.length > 1;

    // Componente interno para el contenido del carousel (reutilizable)
    const CarouselContent = ({ fullscreen = false }) => (
        <>
            <div className={`relative w-full h-full overflow-hidden ${fullscreen ? 'flex items-center justify-center' : ''}`}>
                {/* Capa de fondo desenfocado */}
                <div
                    className="absolute inset-0 bg-cover bg-center blur-md opacity-50 scale-110 transition-all duration-700"
                    style={{ backgroundImage: `url('${images[currentIndex]}')` }}
                />

                {/* Imagen principal */}
                <img
                    className={`absolute inset-0 w-full h-full object-contain z-10 transition-transform duration-700 ${!fullscreen && 'group-hover:scale-105'}`}
                    src={images[currentIndex]}
                    alt={`${projectName} - Captura ${currentIndex + 1}`}
                    loading="lazy"
                />
            </div>

            {showControls && (
                <>
                    <button
                        onClick={handlePrevious}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm z-20 ${fullscreen ? 'p-4 opacity-100' : 'p-2 opacity-0 group-hover/carousel:opacity-100'}`}
                        aria-label="Imagen anterior"
                    >
                        <FaChevronLeft className={fullscreen ? "text-2xl" : "text-sm"} />
                    </button>

                    <button
                        onClick={handleNext}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm z-20 ${fullscreen ? 'p-4 opacity-100' : 'p-2 opacity-0 group-hover/carousel:opacity-100'}`}
                        aria-label="Siguiente imagen"
                    >
                        <FaChevronRight className={fullscreen ? "text-2xl" : "text-sm"} />
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => goToSlide(index, e)}
                                className={`transition-all duration-300 rounded-full shadow-sm ${index === currentIndex
                                    ? 'w-6 h-2 bg-white'
                                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Contador */}
                    <div className={`absolute top-4 right-14 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm transition-all duration-300 z-20 ${fullscreen ? 'opacity-100' : 'opacity-0 group-hover/carousel:opacity-100'}`}>
                        {currentIndex + 1} / {images.length}
                    </div>
                </>
            )}
        </>
    );

    return (
        <>
            {/* Carousel en la tarjeta */}
            <div className="relative w-full h-full group/carousel bg-gray-900">
                <CarouselContent />

                {/* Botón expandir - POSICIÓN MODIFICADA */}
                <button
                    onClick={toggleFullscreen}
                    className="absolute bottom-2 right-2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-sm z-30 transform hover:scale-110"
                    title="Ampliar vista"
                >
                    <FaExpand className="text-sm" />
                </button>
            </div>

            {/* Modal Fullscreen animado */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center backdrop-blur-md"
                    >
                        {/* Botón cerrar */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onClick={toggleFullscreen}
                            className="absolute top-4 right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-50 pointer-events-auto"
                        >
                            <FaTimes className="text-2xl" />
                        </motion.button>

                        {/* Título */}
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-6 left-6 text-white font-bold text-xl drop-shadow-md hidden md:block"
                        >
                            {projectName}
                        </motion.h3>

                        {/* Contenedor con efecto Zoom */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="w-full h-full max-w-[95vw] max-h-[85vh] p-4 flex items-center justify-center pointer-events-auto"
                        >
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10" onClick={(e) => e.stopPropagation()}>
                                <CarouselContent fullscreen={true} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageCarousel;
