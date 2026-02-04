import { FaGithub, FaLock, FaExternalLinkAlt } from 'react-icons/fa';

const CardButtons = ({ repositorioUrl, deployUrl, status }) => {
    const isPrivate = repositorioUrl === 'private';
    const buttonText = status === 'private' ? 'Ver Demo' : 'Ver Sitio';

    return (
        <div className="flex w-full justify-between gap-4">
            {isPrivate ? (
                <div className="flex-1 group/button relative flex justify-center">
                    <button
                        className="w-full flex text-xs items-center justify-center gap-2 rounded-lg py-2 px-4 font-semibold bg-gray-300 dark:bg-gray-800 text-gray-500 dark:text-gray-500 cursor-not-allowed border border-transparent transition-all duration-200"
                        disabled
                    >
                        <FaLock />
                        Repositorio
                    </button>
                    <div className="absolute bottom-full mb-2 w-max px-3 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-50">
                        Este repositorio es privado, lo siento :(
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
            ) : (
                <a
                    className="flex-1 group flex text-xs items-center justify-center gap-2 rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200"
                    href={repositorioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-sm" />
                    Repositorio
                </a>
            )}

            <a
                className="flex-1 group flex items-center justify-center rounded-lg py-2 px-4 font-dm focus:outline-none text-indigo-600 dark:text-indigo-100 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-200 text-xs font-semibold backdrop-blur-sm"
                href={deployUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="mr-2">{buttonText}</span>
                <FaExternalLinkAlt className="text-[10px]" />
            </a>
        </div>
    );
};

export default CardButtons;
