'use client'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeSelector from './ThemeSelector'
import { useTheme } from '../context/ThemeContext'
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'home', href: '#home', current: true },
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
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 rounded-full">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
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
                          className="relative ml-2 px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
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
                          className="nav-link relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 cursor-pointer group"
                          onClick={() => handleNavigationClick(item.name)}
                        >
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800/50 p-1.5 text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open settings menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800/95 backdrop-blur-xl py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-white/10">
                      <Menu.Item>
                        <ThemeSelector />
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
                  className="absolute top-full left-0 w-full mt-2 rounded-3xl overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 shadow-2xl"
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
                        activeClass="text-cyan-400 bg-white/10" // Define active style
                        className="block w-3/4 rounded-full px-4 py-3 text-center text-lg font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
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


