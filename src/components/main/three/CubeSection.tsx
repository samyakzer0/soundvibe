import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Feature } from '../types';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FEATURES: Feature[] = [
    {
        id: 1,
        title: "VISION",
        description: "Every record begins with a clear vision. We shape raw ideas into music that feels intentional, timeless, and emotionally powerful.",
        alignment: 'left',
    },
    {
        id: 2,
        title: "CRAFT",
        description: "Details matter. From sound design to final polish, we approach every track with precision and care that makes the music shine.",
        alignment: 'right',
    },
    {
        id: 3,
        title: "TRUST",
        description: "Collaboration only works with trust. We keep communication open, deadlines tight, and always deliver what we promise without compromise.",
        alignment: 'left',
    },
    {
        id: 4,
        title: "ENERGY",
        description: "Music should move people. We focus on creating productions that carry energy — tracks that connect instantly and stay with listeners.",
        alignment: 'right',
    }
];

function makeGradientNoiseTexture() {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const g = c.getContext("2d");
    if (!g) return new THREE.Texture();

    g.fillStyle = (() => {
        const grd = g.createLinearGradient(0, 0, 230, 384);
        grd.addColorStop(0, "#fec5fb"); // color A
        grd.addColorStop(1, "#00bae2"); // color B
        return grd;
    })();
    g.fillRect(0, 0, 256, 256);

    for (let i = 0; i < 4000; i++) {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const a = Math.random() * 0.08 + 0.02;
        g.fillStyle = `rgba(0,0,0,${a})`;
        g.fillRect(x, y, 3, 3);
    }

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
}

// Helper to calculate position relative to the container
function getRelativePosition(child: HTMLElement, container: HTMLElement) {
    let el: HTMLElement | null = child;
    let x = 0;
    let y = 0;

    // Traverse up until we hit the container or null
    while (el && el !== container) {
        x += el.offsetLeft;
        y += el.offsetTop;
        el = el.offsetParent as HTMLElement;
    }
    return { x, y };
}

export const CubeSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const markersRef = useRef<(HTMLDivElement | null)[]>([]);

    const threeRef = useRef<{
        renderer: THREE.WebGLRenderer;
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        mesh: THREE.Mesh;
    } | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        // Lower pixel ratio slightly for performance during heavy scroll
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 0, 3);

        const mat = new THREE.MeshBasicMaterial({ map: makeGradientNoiseTexture() });
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mat);
        scene.add(mesh);

        threeRef.current = { renderer, scene, camera, mesh };

        const resizeObserver = new ResizeObserver(() => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            if (width > 0 && height > 0) {
                renderer.setSize(width, height, false);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        });
        resizeObserver.observe(canvas);

        const render = () => {
            renderer.render(scene, camera);
        };
        gsap.ticker.add(render);

        return () => {
            gsap.ticker.remove(render);
            resizeObserver.disconnect();
            renderer.dispose();
            mat.dispose();
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current || !threeRef.current) return;

        // Ensure all markers are captured
        const validMarkers = markersRef.current.filter((m): m is HTMLDivElement => m !== null);
        if (validMarkers.length !== FEATURES.length) return;

        const ctx = gsap.context(() => {
            const mesh = threeRef.current!.mesh;
            const container = containerRef.current!;
            const canvas = canvasRef.current!;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            // 2. Build Steps
            // We want to animate from feature I to feature I+1
            // For the first step (0 -> 1), we use fromTo to strictly define the start point dynamically.
            // For subsequent steps, we just .to() because the previous step left us there.

            FEATURES.forEach((feature, index) => {
                if (index === FEATURES.length - 1) return; // No next step for last item

                const nextFeature = FEATURES[index + 1];
                const nextMarker = validMarkers[index + 1];

                // Dynamic position getters
                const getStartPos = () => getRelativePosition(validMarkers[index], container);
                const getEndPos = () => getRelativePosition(nextMarker, container);

                if (index === 0) {
                    // First step: Explicitly handle the 'from' state to ensure it resets correctly on resize
                    tl.fromTo(canvas,
                        {
                            x: () => getStartPos().x,
                            y: () => getStartPos().y,
                            width: () => validMarkers[index].offsetWidth,
                            height: () => validMarkers[index].offsetHeight,
                        },
                        {
                            x: () => getEndPos().x,
                            y: () => getEndPos().y,
                            width: () => nextMarker.offsetWidth,
                            height: () => nextMarker.offsetHeight,
                            duration: 1,
                            ease: "power1.inOut",
                        }
                    );
                } else {
                    // Subsequent steps continue from where we left off
                    tl.to(canvas, {
                        x: () => getEndPos().x,
                        y: () => getEndPos().y,
                        width: () => nextMarker.offsetWidth,
                        height: () => nextMarker.offsetHeight,
                        duration: 1,
                        ease: "power1.inOut",
                    });
                }

                // Rotation (Syncs with the movement above)
                tl.to(mesh.rotation, {
                    x: `+=${Math.PI}`,
                    y: `+=${Math.PI}`,
                    duration: 1,
                    ease: "power1.inOut"
                }, "<");

                // Pause at the feature for a moment
                tl.addLabel(`step-${index + 1}`, "+=0.5");
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full bg-transparent pt-40 md:pt-50 pb-0">
            {/* Section Header */}
            <div className="text-center mb-2 md:mb-4 px-6">
                <div className="w-12 h-[1px] bg-white/20 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">ABOUT SOUNDVIBE</h2>
            </div>

            {/* Cube Animation Container */}
            <div className="relative w-full bg-transparent">
                {/* 
            Container with sufficient height for scrolling 
          */}
                <div
                    ref={containerRef}
                    className="relative w-full pb-20"
                    style={{ height: `${FEATURES.length * 100}vh` }}
                >
                    {/* 
              The Moving Canvas 
              Placed at root of container, absolutely positioned.
              GSAP controls x/y/width/height.
            */}
                    <canvas
                        ref={canvasRef}
                        className="absolute top-0 left-0 block rounded-xl z-20 shadow-2xl shadow-blue-500/20"
                        style={{ pointerEvents: 'none' }} // Let clicks pass through to potential underlying interactions
                    />

                {FEATURES.map((feature, index) => {
                    // Vertical positioning logic - reduced spacing between features
                    const topPercent = 15 + (index * (60 / (FEATURES.length - 1)));
                    const isLeft = feature.alignment === 'left';

                    return (
                        <div
                            key={feature.id}
                            className="absolute w-full flex items-center px-4 md:px-20"
                            style={{
                                top: `${topPercent}%`,
                                flexDirection: isLeft ? 'row' : 'row-reverse'
                            }}
                        >
                            {/* Marker Area (Target for the cube) */}
                            <div
                                ref={(el) => (markersRef.current[index] = el)}
                                className="relative shrink-0 border-2 border-dashed border-white/20 rounded-xl"
                                style={{
                                    width: 'min(30vw, 300px)',
                                    height: 'min(30vw, 300px)',
                                }}
                            >
                                {/* Visual placeholder outline to show where the cube is going */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none grid place-items-center">
                                    <div className="w-full h-full border border-white/10 rounded-xl scale-75" />
                                </div>
                            </div>

                            {/* Text Description */}
                            <div
                                className={`flex-1 flex flex-col justify-center ${isLeft ? 'pl-8 md:pl-20 items-start text-left' : 'pr-8 md:pr-20 items-end text-right'
                                    }`}
                            >
                                <div className="bg-gradient-to-br from-white/10 to-transparent p-6 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm max-w-xl">
                                    <h2 className="text-2xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                                        <span className="text-blue-400 opacity-60 text-lg md:text-xl block mb-2 font-mono">0{index + 1}</span>
                                        {feature.title}
                                    </h2>
                                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
};
