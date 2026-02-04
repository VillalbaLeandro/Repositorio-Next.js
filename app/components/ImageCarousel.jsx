'use client';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageCarousel = ({ images, projectName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-play (opcional, comentado por defecto)
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     handleNext();
    //   }, 5000);
    //   return () => clearInterval(interval);
    // }, [currentIndex]);

    const handlePrevious = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const goToSlide = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    // Si solo hay una imagen, no mostramos controles
    const showControls = images.length > 1;

    return (
        <div className="relative w-full h-full group/carousel">
            {/* Imagen principal */}
            <div className="relative w-full h-full overflow-hidden">
                <img
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    src={images[currentIndex]}
                    alt={`${projectName} - Captura ${currentIndex + 1}`}
                    loading="lazy"
                />
            </div>

            {showControls && (
                <>
                    {/* Botones de navegación - Solo visible en hover */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                        aria-label="Imagen anterior"
                    >
                        <FaChevronLeft className="text-sm" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                        aria-label="Siguiente imagen"
                    >
                        <FaChevronRight className="text-sm" />
                    </button>

                    {/* Indicadores de puntos */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                        ? 'w-6 h-2 bg-white'
                                        : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                    }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Contador de imágenes - visible en hover */}
                    <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-300">
                        {currentIndex + 1} / {images.length}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageCarousel;
