const CardButtons = ({ repositorioUrl, deployUrl }) => {
    return (
        <div className="flex w-full justify-between gap-4">
            <a
                className="flex-1 group flex text-xs items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200"
                href={repositorioUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                Start
            </a>
            <a
                className="flex-1 group flex items-center justify-center rounded-lg py-2 px-4 font-dm focus:outline-none text-indigo-100 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-200 text-xs font-semibold backdrop-blur-sm"
                href={deployUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="mr-2">Demo</span>
                <svg
                    aria-hidden="true"
                    className="h-3 w-3 fill-current"
                    viewBox="0 0 10 10"
                >
                    <path d="M2.5 1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L1.854 7.854a.5.5 0 0 1-.708-.708L6.293 2H2.5a.5.5 0 0 1 0-1z" />
                </svg>
            </a>
        </div>
    );
};

export default CardButtons;
