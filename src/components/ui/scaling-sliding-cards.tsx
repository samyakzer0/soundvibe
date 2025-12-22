
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardData {
    id: number;
    content: React.ReactNode;
}

interface ScalingSlidingCardsProps {
    cards: CardData[];
}

export function ScalingSlidingCards({ cards }: ScalingSlidingCardsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const inView = useInView(containerRef, { amount: 0.3 });

    // State
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [xPos, setXPos] = useState(0);
    const [cardWidth, setCardWidth] = useState(450);

    // Initial setup
    const GAP = 32;
    // Duplicate cards to create loop illusion
    const displayCards = [...cards, ...cards];
    const SINGLE_SET_WIDTH = cards.length * (cardWidth + GAP);

    useEffect(() => {
        const handleResize = () => {
            // Match the CSS widths: md:w-[450px] vs w-[300px]
            setCardWidth(window.innerWidth >= 768 ? 450 : 300);
        };

        handleResize(); // Init
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-play Logic
    useEffect(() => {
        if (inView && !isPlaying) {
            setIsPlaying(true);
        }
    }, [inView]);

    useEffect(() => {
        let animationFrame: number;

        const animate = () => {
            if (isPlaying && !isHovered) {
                setXPos((prev) => {
                    let next = prev - 0.5; // Speed

                    // Seamless Loop Reset
                    // If we've scrolled past the first set, reset to 0 (which looks identical to start of 2nd set)
                    if (next <= -SINGLE_SET_WIDTH) {
                        return 0;
                    }
                    return next;
                });
            }
            animationFrame = requestAnimationFrame(animate);
        };

        if (isPlaying) {
            animationFrame = requestAnimationFrame(animate);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [isPlaying, isHovered, SINGLE_SET_WIDTH]);


    // Manual Controls
    const handlePrev = () => {
        setIsPlaying(false);
        setXPos((prev) => {
            const next = prev + (cardWidth + GAP);
            // If dragging too far right, wrap to the end of the seamless loop
            return next > 0 ? -SINGLE_SET_WIDTH + (cardWidth + GAP) : next;
        });
    };

    const handleNext = () => {
        setIsPlaying(false);
        setXPos((prev) => {
            const next = prev - (cardWidth + GAP);
            // If we hit the boundary, wrap around seamlessly
            return next <= -SINGLE_SET_WIDTH ? 0 : next;
        });
    };

    return (
        <section ref={containerRef} className="py-20 relative overflow-hidden bg-[#050505]">
            {/* Carousel Track */}
            <div
                className="flex items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    animate={{ x: xPos }}
                    transition={{ type: "tween", ease: "linear", duration: isPlaying ? 0 : 0.5 }}
                    className="flex gap-8 px-10 md:px-20"
                >
                    {displayCards.map((card, index) => (
                        <div
                            key={`${card.id}-${index}`}
                            className="relative h-[400px] w-[300px] md:h-[500px] md:w-[450px] flex-shrink-0"
                        >
                            {card.content}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-12">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    className="rounded-full w-12 h-12 border-white/10 hover:bg-white hover:text-black transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="rounded-full w-14 h-14 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-colors"
                >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    className="rounded-full w-12 h-12 border-white/10 hover:bg-white hover:text-black transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </Button>
            </div>
        </section>
    );
}

