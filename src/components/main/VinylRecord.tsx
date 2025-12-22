import React from 'react';

export const VinylRecord: React.FC = () => {
    return (
        <div className="relative w-full h-full rounded-full shadow-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center animate-spin-slow">

            {/* Grooves Texture */}
            <div className="absolute inset-2 rounded-full vinyl-grooves opacity-90" />

            {/* Sheen Overlay - spins with record for dynamic effect */}
            <div className="absolute inset-0 rounded-full vinyl-sheen opacity-40 mix-blend-overlay pointer-events-none" />

            {/* Inner Label Area - Black separator */}
            <div className="absolute w-[38%] h-[38%] bg-black rounded-full shadow-lg" />

            {/* Red Label */}
            <div className="absolute w-[35%] h-[35%] bg-[#c83232] rounded-full flex items-center justify-center shadow-inner border border-white/10">
                <div className="text-center transform rotate-90 sm:rotate-0">
                    
                    <div className="h-0.5 w-8 bg-black/20 mx-auto my-1"></div>
                  
                </div>
            </div>

            {/* Spindle Hole */}
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full shadow-inner border border-gray-400 z-10 flex items-center justify-center">
                <div className="w-1 h-1 bg-black/50 rounded-full"></div>
            </div>

            {/* Runout Groove (Shiny lighter ring near center) */}
            <div className="absolute w-[42%] h-[42%] rounded-full border-[1px] border-white/5 pointer-events-none"></div>

        </div>
    );
};
