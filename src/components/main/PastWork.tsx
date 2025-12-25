"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const works = [
  {
    title: "NOVA KANE - MIDNIGHT DRIVE",
    tags: "Production, Mixing",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "LILA RAY - HEART ON REPEAT",
    tags: "Production, Vocal Recording, Mixing",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "KAIRO - LOST IN ECHOES",
    tags: "Production, Sound Design, Mastering",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "AYA V - GLITTER TEARS",
    tags: "Production, Vocal Tuning, Mastering",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "JAXON REE - NO SIGNAL",
    tags: "Production, Mixing, Mastering",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "THE VOID - NEON NIGHTS",
    tags: "Production, Mastering",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "RAVEN - DIGITAL LOVE",
    tags: "Production, Mixing",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "ECHO - AFTERGLOW",
    tags: "Production, Sound Design",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "STORM - BREAK FREE",
    tags: "Production, Mixing, Mastering",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "LUNA - STARLIGHT",
    tags: "Production, Vocal Recording",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&h=400&auto=format&fit=crop",
  },
];

export function PastWork() {
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLDivElement[]>([]);
  const xPosRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const autoRotateRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ringRef.current) return;

    const ring = ringRef.current;
    const images = imgRefs.current;

    // Helper function to calculate background position for parallax
    const getBgPos = (index: number): string => {
      const rotationY = gsap.getProperty(ring, "rotationY") as number;
      const pos = 100 - (gsap.utils.wrap(0, 360, rotationY - 180 - index * 36) / 360) * 500;
      return `${pos}px 0px`;
    };

    // Initialize animation
    const tl = gsap.timeline();
    
    tl.set(ring, { rotationY: 180, cursor: "grab" })
      .set(images, {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(images, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      })
      .add(() => {
        images.forEach((img) => {
          img.addEventListener("mouseenter", (e) => {
            const current = e.currentTarget;
            gsap.to(images, {
              opacity: (i, t) => (t === current ? 1 : 0.5),
              ease: "power3",
            });
          });
          img.addEventListener("mouseleave", () => {
            gsap.to(images, { opacity: 1, ease: "power2.inOut" });
          });
        });
        
        // Start autoplay after intro animation
        autoRotateRef.current = gsap.to(ring, {
          rotationY: "+=360",
          duration: 20,
          ease: "none",
          repeat: -1,
          onUpdate: () => {
            gsap.set(images, {
              backgroundPosition: (i) => getBgPos(i),
            });
          },
        });
      }, "-=0.5");

    // Hover handlers for autoplay pause/resume
    const handleMouseEnter = () => {
      if (autoRotateRef.current) {
        autoRotateRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (autoRotateRef.current && !isDraggingRef.current) {
        autoRotateRef.current.play();
      }
    };

    // Drag handlers
    const dragStart = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      xPosRef.current = Math.round(clientX);
      isDraggingRef.current = true;
      
      gsap.set(ring, { cursor: "grabbing" });
      window.addEventListener("mousemove", drag);
      window.addEventListener("touchmove", drag);
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      
      gsap.to(ring, {
        rotationY: "-=" + ((Math.round(clientX) - xPosRef.current) % 360),
        onUpdate: () => {
          gsap.set(images, {
            backgroundPosition: (i) => getBgPos(i),
          });
        },
      });

      xPosRef.current = Math.round(clientX);
    };

    const dragEnd = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      gsap.set(ring, { cursor: "grab" });
    };

    // Add event listeners
    ring.addEventListener("mouseenter", handleMouseEnter);
    ring.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", dragStart);
    window.addEventListener("touchstart", dragStart);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    // Cleanup
    return () => {
      ring.removeEventListener("mouseenter", handleMouseEnter);
      ring.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", dragStart);
      window.removeEventListener("touchstart", dragStart);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchend", dragEnd);
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      tl.kill();
      if (autoRotateRef.current) {
        autoRotateRef.current.kill();
      }
    };
  }, []);

  return (
    <section id="work" className="relative w-full h-screen overflow-hidden bg-black">
      <style jsx>{`
        .stage,
        .ring,
        .img {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          user-select: none;
        }

        .stage * {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        .container-3d {
          perspective: 2000px;
          width: 300px;
          height: 400px;
          position: absolute;
          left: 50%;
          top: 65%;
          transform: translate(-50%, -50%);
          border: none;
          outline: none;
          background: transparent;
          pointer-events: none;
        }

        .ring,
        .img {
          position: absolute;
          border: none;
          outline: none;
          pointer-events: auto;
        }

        .img {
          background-size: cover;
          background-position: center;
        }
      `}</style>

      <div className="stage absolute inset-0">
        <div className="container-3d" ref={containerRef}>
          <div className="ring" ref={ringRef}>
            {works.map((work, index) => (
              <div
                key={index}
                className="img"
                ref={(el) => {
                  if (el) imgRefs.current[index] = el;
                }}
                style={{
                  backgroundImage: `url(${work.image})`,
                }}
                title={`${work.title} - ${work.tags}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute top-12 left-12 z-10 pointer-events-none">
        <div className="space-y-4 max-w-sm">
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="text-5xl font-bold tracking-tighter text-white">PAST WORK</h2>
          <p className="text-white/60 text-sm">
            Drag to explore my work. Each image represents a unique project.
          </p>
        </div>
      </div>
    </section>
  );
}
