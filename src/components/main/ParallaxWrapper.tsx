"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxWrapperProps {
    children: ReactNode;
    className?: string;
}

/**
 * A reusable parallax wrapper that creates a subtle parallax effect
 * on section entry and exit during scrolling.
 */
export function ParallaxWrapper({ children, className = "" }: ParallaxWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const content = contentRef.current;
            if (!container || !content) return;

            // Parallax effect: content moves slower than scroll
            gsap.fromTo(content,
                { yPercent: -10 },
                {
                    yPercent: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.5,
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            <div ref={contentRef} className="w-full">
                {children}
            </div>
        </div>
    );
}
