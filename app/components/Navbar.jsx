'use client'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeSelector from './ThemeSelector'
import { useTheme } from '../context/ThemeContext'
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Sobre Mi', href: '#home', current: true },
  { name: 'Experiencia', href: '#experience', current: false },
  { name: 'Proyectos', href: '#projects', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Formacion', href: '#education', current: false },
  { name: 'Contacto', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Navbar() {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState('home'); // Estado para la página actual

  const handleNavigationClick = (name) => {
    setCurrentPage(name); // Actualiza la página actual cuando se hace clic en un enlace de navegación
  };
  return (
    <Disclosure as={Fragment}>

      {({ open, close }) => (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 rounded-full">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-white transition-colors">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Navigation */}
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:to-cyan-400 text-[#6c63ff]">
                    LV
                  </span>
                </div>
                <div className="hidden md:ml-10 md:block">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      item.name === 'Contacto' ? (
                        <Link
                          key={item.name}
                          to={item.href.replace('#', '')}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          spy={true}
                          className="relative ml-2 px-6 py-2 text-sm font-bold text-white bg-[#6c63ff] hover:bg-[#554fd8] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-cyan-500 rounded-full shadow-lg hover:shadow-[#6c63ff]/30 dark:hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                          onClick={() => handleNavigationClick(item.name)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href.replace('#', '')}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          spy={true}
                          activeClass="active-nav-link"
                          className="nav-link relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer group"
                          onClick={() => handleNavigationClick(item.name)}
                        >
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6c63ff] dark:bg-gradient-to-r dark:from-indigo-500 dark:to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Theme Toggle Button */}
                <div className="relative ml-3">
                  <ThemeSelector />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <AnimatePresence>
              {open && (
                <Disclosure.Panel static as={motion.div}
                  initial={{ height: 0, opacity: 0, y: -20 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-0 w-full mt-2 rounded-3xl overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl"
                >
                  <div className="flex flex-col items-center justify-center space-y-6 py-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href.replace('#', '')}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        spy={true} // Enable spy for active class
                        activeClass="text-white bg-[#6c63ff] shadow-[0_0_15px_rgba(108,99,255,0.5)] font-bold scale-105" // Updated active style
                        className="block w-3/4 rounded-full px-4 py-3 text-center text-lg font-medium text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer"
                        onClick={() => close()}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </div>
        </nav>
      )}
    </Disclosure>
  )
}


