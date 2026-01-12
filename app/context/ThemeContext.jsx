'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
    CYBERPUNK: 'cyberpunk'
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEMES.DARK);
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
            setTheme(savedTheme);
        } else {
            // Default to dark theme
            setTheme(THEMES.DARK);
            localStorage.setItem('theme', THEMES.DARK);
        }
        setMounted(true);
    }, []);

    // Save theme to localStorage when it changes
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', theme);
            // Apply theme class to document
            document.documentElement.className = theme;
        }
    }, [theme, mounted]);

    const value = {
        theme,
        setTheme,
        themes: THEMES
    };

    // Prevent flash of unstyled content
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
