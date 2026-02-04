import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme, THEMES } from '../context/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();
    const isLight = theme === THEMES.LIGHT;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#44476a] dark:bg-white/5 backdrop-blur-md border-t border-white/10 pt-16 pb-40 md:pb-8 mt-20 transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-2xl font-bold dark:bg-gradient-to-r dark:from-indigo-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-white">
                            LV
                        </h3>
                        <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Desarrollador Full Stack apasionado por construir experiencias digitales fluidas y escalables.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm mt-2">
                            <FaMapMarkerAlt />
                            <span>Posadas, Misiones, Argentina</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        {/* Spacer to align links with other columns content */}
                        <div className="h-5"></div>
                        <ul className="space-y-2 text-gray-300 dark:text-gray-400 text-sm">
                            <li><a href="#home" className="hover:text-white dark:hover:text-indigo-400 transition-colors">Inicio</a></li>
                            <li><a href="#experience" className="hover:text-white dark:hover:text-indigo-400 transition-colors">Experiencia</a></li>
                            <li><a href="#projects" className="hover:text-white dark:hover:text-indigo-400 transition-colors">Proyectos</a></li>
                            <li><a href="#skills" className="hover:text-white dark:hover:text-indigo-400 transition-colors">Skills</a></li>
                            <li><a href="#contact" className="hover:text-white dark:hover:text-indigo-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold tracking-wider text-sm">CONECTEMOS</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/VillalbaLeandro" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-all">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/leandro-villalba/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#0077b5] text-white transition-all">
                                <FaLinkedin size={20} />
                            </a>
                            {/* <a href="https://www.instagram.com/leanvillalba/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white text-gray-400 transition-all">
                                <FaInstagram size={20} />
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 dark:text-gray-500 text-xs text-center md:text-left">
                        © {currentYear} Leandro Villalba. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs">
                        <FaCode className="text-indigo-400 dark:text-indigo-500" />
                        <span>Desarrollado con Next.js & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


