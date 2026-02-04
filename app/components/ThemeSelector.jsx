'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme, THEMES } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeSelector = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Para disparar animación solo cuando clickeás (no en mount)
    const [anim, setAnim] = useState(null); // 'roll' | 'rollback' | null
    const firstPaintRef = useRef(true);

    const isLight = theme === THEMES.LIGHT;

    useEffect(() => {
        setMounted(true);
    }, []);

    // Evita animación en el primer render/hidratación
    useEffect(() => {
        if (firstPaintRef.current) {
            firstPaintRef.current = false;
            return;
        }
        setAnim(isLight ? 'roll' : 'rollback');
    }, [isLight]);

    const handleToggle = () => {
        const newTheme = isLight ? THEMES.DARK : THEMES.LIGHT;
        setTheme(newTheme);
    };

    if (!mounted) return null;

    const containerClasses = [
        styles.container,
        isLight ? styles.containerLight : styles.containerDark,
    ].join(' ');

    const borderClasses = [
        styles.border,
        isLight ? styles.borderLight : styles.borderDark,
    ].join(' ');

    const toggleClasses = [
        styles.toggle,
        isLight ? styles.toggleLight : styles.toggleDark,
        anim === 'roll' ? styles.roll : '',
        anim === 'rollback' ? styles.rollback : '',
    ].join(' ');

    return (
        <div className={styles.wrapper} title="Toggle theme">
            <div className={containerClasses}>
                <div className={borderClasses}>
                    <div
                        className={toggleClasses}
                        onClick={handleToggle}
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle theme"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') handleToggle();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ThemeSelector;
