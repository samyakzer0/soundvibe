import React from 'react';

export const ToneArm: React.FC = () => {
    // Rotate angle locked to playing position (~25deg)

    return (
        <div
            className="absolute top-0 right-0 w-full h-full pointer-events-none"
            style={{
                // The container covers the whole record area, but we isolate the arm
                zIndex: 20
            }}
        >
            <div
                className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] origin-[85%_15%]"
                style={{
                    transform: 'rotate(25deg)',
                }}
            >
                <svg
                    viewBox="0 0 200 400"
                    className="w-full h-full drop-shadow-xl"
                    style={{ overflow: 'visible' }}
                >
                    {/* Definitions for gradients/metallic look */}
                    <defs>
                        <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#d1d5db" />
                            <stop offset="50%" stopColor="#f3f4f6" />
                            <stop offset="100%" stopColor="#9ca3af" />
                        </linearGradient>
                        <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4b5563" />
                            <stop offset="100%" stopColor="#1f2937" />
                        </linearGradient>
                    </defs>

                    {/* Pivot Base (Top Right) */}
                    <circle cx="170" cy="30" r="25" fill="url(#metalDark)" stroke="#374151" strokeWidth="2" />
                    <circle cx="170" cy="30" r="10" fill="#111" />

                    {/* Counterweight */}
                    <rect x="155" y="-10" width="30" height="40" rx="4" fill="#1f2937" />

                    {/* The Arm (Long silver tube) */}
                    {/* Drawing a slightly curved path for style */}
                    <path
                        d="M 170 30 Q 160 200 100 280"
                        stroke="url(#armGradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Headshell (The part holding the needle) */}
                    <g transform="translate(88, 275) rotate(20)">
                        {/* Connector */}
                        <rect x="-5" y="-5" width="24" height="10" fill="#374151" />
                        {/* Shell body */}
                        <path d="M 0 0 L 25 0 L 25 45 L 5 45 L 0 35 Z" fill="#1f2937" />
                        {/* Finger lift */}
                        <path d="M 25 10 C 35 10, 40 5, 40 0" stroke="#d1d5db" strokeWidth="3" fill="none" />
                        {/* Cartridge/Needle */}
                        <rect x="5" y="45" width="15" height="10" fill="#d1d5db" />
                    </g>
                </svg>
            </div>
        </div>
    );
};
