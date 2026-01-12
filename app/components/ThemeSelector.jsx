'use client'
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { MoonIcon, SunIcon, SparklesIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const themeConfig = {
    [THEMES.DARK]: {
        name: 'Dark',
        icon: MoonIcon,
        description: 'Modo oscuro'
    },
    [THEMES.LIGHT]: {
        name: 'Light',
        icon: SunIcon,
        description: 'Modo claro'
    },
    [THEMES.CYBERPUNK]: {
        name: 'Cyberpunk',
        icon: SparklesIcon,
        description: 'Modo neón'
    }
};

const ThemeSelector = () => {
    const { theme, setTheme, themes } = useTheme();
    const currentTheme = themeConfig[theme];
    const CurrentIcon = currentTheme.icon;

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full transition-colors">
                <CurrentIcon className="h-5 w-5" />
                <span>Tema: {currentTheme.name}</span>
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                        {Object.values(THEMES).map((themeOption) => {
                            const config = themeConfig[themeOption];
                            const Icon = config.icon;
                            const isActive = theme === themeOption;

                            return (
                                <Menu.Item key={themeOption}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => setTheme(themeOption)}
                                            className={classNames(
                                                active ? 'bg-gray-700' : '',
                                                isActive ? 'bg-indigo-900 text-indigo-200' : 'text-gray-300',
                                                'flex items-center gap-3 px-4 py-2 text-sm w-full transition-colors'
                                            )}
                                        >
                                            <Icon className="h-5 w-5" />
                                            <div className="flex flex-col items-start">
                                                <span className="font-medium">{config.name}</span>
                                                <span className="text-xs opacity-75">{config.description}</span>
                                            </div>
                                            {isActive && (
                                                <svg
                                                    className="ml-auto h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    )}
                                </Menu.Item>
                            );
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default ThemeSelector;


