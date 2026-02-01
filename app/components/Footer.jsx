import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 pt-16 pb-8 mt-20">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            LV
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Desarrollador Full Stack apasionado por construir experiencias digitales fluidas y escalables.
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                            <FaMapMarkerAlt />
                            <span>Posadas, Misiones, Argentina</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold tracking-wider text-sm">|</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#home" className="hover:text-indigo-400 transition-colors">Inicio</a></li>
                            <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Experiencia</a></li>
                            <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Proyectos</a></li>
                            <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
                            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold tracking-wider text-sm">CONECTEMOS</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/VillalbaLeandro" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-all">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/leandro-villalba/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all">
                                <FaLinkedin size={20} />
                            </a>
                            {/* <a href="https://www.instagram.com/leanvillalba/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white text-gray-400 transition-all">
                                <FaInstagram size={20} />
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        © {currentYear} Leandro Villalba. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <FaCode className="text-indigo-500" />
                        <span>Desarrollado con Next.js & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


