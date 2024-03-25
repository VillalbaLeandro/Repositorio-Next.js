const CardButtons = ({ repositorioUrl, deployUrl }) => {
    return (
        <div className="flex absolute -bottom-6 left-0 px-4 py-2 justify-center gap-x-2">
            <a
                className="w-auto h-5 group flex text-xs items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-1 px-2 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-2 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 sm:text-xs"
                href={repositorioUrl}
            >
                Repositorio
            </a>
            <a
                className="w-auto h-5 group flex ring-none items-center justify-center hover:opacity-95 disabled:opacity-50 rounded-lg py-1 px-1 font-dm focus:outline-none !ring-transparent text-violet-800 border border-violet-500 border-b-violet-400 border-b-2 hover:border active:border bg-white hover:text-violet-900 hover:bg-gray-50 active:bg-gray-100 active:text-violet-600 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-xs sm:text-xs"
                href={deployUrl}
            >
                <svg
                    aria-hidden="true"
                    className="h-3 w-3 flex-none fill-violet-600 group-active:fill-current"
                >
                    <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
                </svg>
                <span className="ml-1 font-bold">Demo</span>
            </a>
        </div>
    );
};

export default CardButtons;
