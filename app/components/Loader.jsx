import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] transition-opacity duration-500">
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <div className="h-24 w-24 animate-spin rounded-full border-4 border-t-indigo-500 border-r-transparent border-b-cyan-500 border-l-transparent"></div>

                {/* Inner Ring */}
                <div className="absolute h-16 w-16 animate-pulse rounded-full border-2 border-indigo-500/30"></div>

                {/* Center Text */}
                <div className="absolute text-xl font-bold text-white tracking-widest animate-pulse">LV</div>
            </div>
        </div>
    );
};

export default Loader;
