import React from 'react'
const Skills = () => {
    return (
        <div className='z-10'>
            <h2 className='font-bold text-xl '>Skills</h2>
            <section className="lg:w-2/4 text-left ">
                <div className=" w-80 mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="mt-12 relative  sm:mx-auto sm:px-0 ">
                        <div className=" flex flex-wrap  gap-3 text-gray-950 dark:text-white">
                            {/* Next.js */}
                            <div data-tip="Next js" className="tooltip">
                                <div className="flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/Next.js.png' width={50} height={50} alt='Next.js logo' />
                                </div>
                            </div>
                            {/* REACT */}
                            <div data-tip="React js" className="tooltip">
                                <div className=" flex relative *:relative *:size-7 *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 256 228"><path fill="#00d8ff" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887m110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565m-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"></path></svg>
                                </div>
                            </div>
                            {/* Tailwind */}
                            <div data-tip="Tailwind" className="tooltip">
                                <div className=" flex relative *:relative *:size-7 *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
                                        <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"></path>
                                    </svg>
                                </div>
                            </div>
                            {/* JavaScript */}
                            <div data-tip="JavaScript" className="tooltip">
                                <div className=" flex relative *:relative *:size-7 *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        aria-label="JavaScript" role="img"
                                        viewBox="0 0 512 512"><rect
                                            width="512" height="512"
                                            rx="15%"
                                            fill="#f7df1e" /><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" /></svg>
                                </div>
                            </div>
                            {/* html */}
                            <div data-tip="Html" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/html-logo.png' width={25} height={25} alt='Php.js logo' />
                                </div>
                            </div>
                            {/* css */}
                            <div data-tip="Css" className="tooltip">
                                <div className=" flex relative *:relative *:size-7 *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <title>file_type_css</title>
                                        <polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style={{ fill: '#1572b6' }} />
                                        <polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style={{ fill: '#33a9dc' }} />
                                        <polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style={{ fill: '#fff' }} />
                                        <polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style={{ fill: '#ebebeb' }} />
                                        <polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style={{ fill: '#fff' }} />
                                        <polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style={{ fill: '#ebebeb' }} />
                                        <polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style={{ fill: '#ebebeb' }} />
                                    </svg>
                                </div>
                            </div>
                            {/* Php */}
                            <div data-tip="Php" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/php-logo.png' width={50} height={50} alt='Php.js logo' />
                                </div>
                            </div>
                            {/* Laravel */}
                            <div data-tip="Laravel" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/laravel-logo.png' width={30} height={30} alt='Php.js logo' />
                                </div>
                            </div>
                            {/* Jqery */}
                            <div data-tip="JQuery" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/jquery-logo.png' width={30} height={30} alt='Jqery  logo' />
                                </div>
                            </div>
                            {/* Bootstrap */}
                            <div data-tip="Bootstrap" className="tooltip">
                                <div className=" flex relative *:relative *:size-7 *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <svg width="2500" height="2500" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C" /><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF" /></svg>
                                </div>
                            </div>
                            {/* Node */}
                            <div data-tip="Node js" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/node-logo.png' width={25} height={25} alt='node  logo' />
                                </div>
                            </div>
                            {/* Git */}
                            <div data-tip="Git" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/git-logo.png' width={25} height={25} alt='git  logo' />
                                </div>
                            </div>
                            {/* gitlab */}
                            <div data-tip="Gitlab" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/gitlab-logo.png' width={25} height={25} alt='gitlab  logo' />
                                </div>
                            </div>
                            {/* Mysql */}
                            <div data-tip="MySQL" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/Mysql-logo.png' width={50} height={50} alt='Mysql logo' />
                                </div>
                            </div>
                            {/* Docker */}
                            <div data-tip="Docker" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/docker-logo.png' width={60} height={60} alt='docker  logo' />
                                </div>
                            </div>
                            {/* Sql */}
                            <div data-tip="SQL" className="tooltip">
                                <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                    <img src='./img/skills/sql-logo.png' width={50} height={50} alt='Sql logo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Lerning  */}
                <div className="">
                    <div className="mx-auto px-6 max-w-6xl text-gray-500">
                        <div className="mt-6 relative  sm:mx-auto sm:px-0 ">
                            <h2 className='font-bold text-xl mb-2 '>En proceso</h2>
                            <div className=" flex flex-wrap  gap-3 text-gray-950 dark:text-white">
                                {/* Typescript */}
                                <div data-tip="Typescript" className="tooltip">
                                    <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                        <img src='./img/skills/ts-logo.png' width={50} height={50} alt='Sql logo' />
                                    </div>
                                </div>
                                {/* PostgreSQL */}
                                <div data-tip="PostgreSQL" className="tooltip">
                                    <div className=" flex relative *:relative  *:m-auto size-20  rounded-xl before:rounded-[11px] before:absolute before:inset-0  before:from-indigo-950  before:bg-gradient-to-b before:bg-transparent dark:before:from-indigo-200 dark:before:to-transparent ">
                                        <img src='./img/skills/postgre-logo.png' width={50} height={50} alt='Sql logo' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="proyects" className='mb-20'></div>
            </section>
        </div>
    )
}

export default Skills
