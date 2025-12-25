"use client";

import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";

// Piano note mapping (MIDI note numbers)
const NOTE_MAPPING: { [key: number]: string } = {
  0: "C1", 1: "C#1", 2: "D1", 3: "D#1", 4: "E1", 5: "F1", 6: "F#1", 7: "G1", 8: "G#1", 9: "A1", 10: "A#1", 11: "B1",
  12: "C2", 13: "C#2", 14: "D2", 15: "D#2", 16: "E2", 17: "F2", 18: "F#2", 19: "G2", 20: "G#2", 21: "A2", 22: "A#2", 23: "B2",
  24: "C3", 25: "C#3", 26: "D3", 27: "D#3", 28: "E3", 29: "F3", 30: "F#3", 31: "G3", 32: "G#3", 33: "A3", 34: "A#3", 35: "B3",
  36: "C4", 37: "C#4", 38: "D4", 39: "D#4", 40: "E4", 41: "F4", 42: "F#4", 43: "G4", 44: "G#4", 45: "A4", 46: "A#4", 47: "B4",
  48: "C5", 49: "C#5", 50: "D5", 51: "D#5", 52: "E5", 53: "F5", 54: "F#5", 55: "G5", 56: "G#5", 57: "A5", 58: "A#5", 59: "B5",
  60: "C6", 61: "C#6", 62: "D6", 63: "D#6", 64: "E6", 65: "F6", 66: "F#6", 67: "G6", 68: "G#6", 69: "A6", 70: "A#6", 71: "B6",
  72: "C7", 73: "C#7", 74: "D7", 75: "D#7", 76: "E7", 77: "F7", 78: "F#7", 79: "G7", 80: "G#7", 81: "A7", 82: "A#7", 83: "B7",
  84: "C8", 85: "C#8", 86: "D8", 87: "D#8",
};

// Full keyboard (all 88 keys)
const ALL_WHITE_KEYS = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 27, 29, 31, 32, 34, 36, 38, 39, 41, 43, 44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 68, 70, 72, 74, 75, 77, 79, 80, 82, 84, 86, 87];

const ALL_BLACK_KEYS = [
  { noteId: 1, x: 28 }, { noteId: 4, x: 68 }, { noteId: 6, x: 148 }, { noteId: 9, x: 188 }, { noteId: 11, x: 228 },
  { noteId: 13, x: 308 }, { noteId: 16, x: 348 }, { noteId: 18, x: 388 }, { noteId: 21, x: 468 }, { noteId: 23, x: 508 },
  { noteId: 25, x: 588 }, { noteId: 28, x: 628 }, { noteId: 30, x: 668 }, { noteId: 33, x: 748 }, { noteId: 35, x: 788 },
  { noteId: 37, x: 868 }, { noteId: 40, x: 908 }, { noteId: 42, x: 948 }, { noteId: 45, x: 1028 }, { noteId: 47, x: 1068 },
  { noteId: 49, x: 1148 }, { noteId: 52, x: 1188 }, { noteId: 54, x: 1228 }, { noteId: 57, x: 1308 }, { noteId: 59, x: 1348 },
  { noteId: 61, x: 1428 }, { noteId: 64, x: 1468 }, { noteId: 66, x: 1508 }, { noteId: 69, x: 1588 }, { noteId: 71, x: 1628 },
  { noteId: 73, x: 1708 }, { noteId: 76, x: 1748 }, { noteId: 78, x: 1788 }, { noteId: 81, x: 1868 }, { noteId: 83, x: 1908 },
  { noteId: 85, x: 1988 },
];

// Mobile: 2 octaves (C4 to B5) - 17 white keys
const MOBILE_WHITE_KEYS = [36, 38, 39, 41, 43, 44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63];
const MOBILE_BLACK_KEYS = [
  { noteId: 37, x: 28 }, { noteId: 40, x: 68 }, { noteId: 42, x: 148 }, { noteId: 45, x: 188 }, { noteId: 47, x: 228 },
  { noteId: 49, x: 308 }, { noteId: 52, x: 348 }, { noteId: 54, x: 388 }, { noteId: 57, x: 468 }, { noteId: 59, x: 508 },
  { noteId: 61, x: 588 }, { noteId: 64, x: 628 },
];

// Keyboard mapping
const KEYBOARD_MAPPING: { [key: string]: number } = {
  // White keys
  'q': 36, 'w': 38, 'e': 39, 'r': 41, 't': 43, 'y': 44, 'u': 46, 'i': 48, 'o': 50, 'p': 51,
  'a': 53, 's': 55, 'd': 56, 'f': 58, 'g': 60, 'h': 62, 'j': 63,
  // Black keys
  '1': 37, '2': 40, '3': 42, '4': 45, '5': 47, '6': 49, '7': 52, '8': 54, '9': 57, '0': 59, '\'': 61, '[': 64,
};

export function InteractivePiano() {
  const pianoRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const [activeNotes, setActiveNotes] = useState<Set<number>>(new Set());
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Initialize Tone.js synth
    synthRef.current = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "triangle" },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
      },
    }).toDestination();

    setIsReady(true);

    // Keyboard event listeners
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (e.repeat) return;
      const noteId = KEYBOARD_MAPPING[e.key.toLowerCase()];
      if (noteId !== undefined) {
        await playNote(noteId);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const noteId = KEYBOARD_MAPPING[e.key.toLowerCase()];
      if (noteId !== undefined) {
        stopNote(noteId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      synthRef.current?.dispose();
    };
  }, []);

  const playNote = async (noteId: number) => {
    // Start audio context on user interaction
    if (Tone.context.state !== "running") {
      await Tone.start();
    }

    const noteName = NOTE_MAPPING[noteId];
    if (noteName && synthRef.current) {
      synthRef.current.triggerAttack(noteName);
      setActiveNotes((prev) => new Set(prev).add(noteId));
      
      // Add active class to visual key
      const key = document.querySelector(`[data-note-id="${noteId}"]`);
      if (key) {
        key.classList.add("active");
      }
    }
  };

  const stopNote = (noteId: number) => {
    const noteName = NOTE_MAPPING[noteId];
    if (noteName && synthRef.current) {
      synthRef.current.triggerRelease(noteName);
      setActiveNotes((prev) => {
        const newSet = new Set(prev);
        newSet.delete(noteId);
        return newSet;
      });

      // Remove active class from visual key
      const key = document.querySelector(`[data-note-id="${noteId}"]`);
      if (key) {
        key.classList.remove("active");
      }
    }
  };

  const handleMouseDown = async (noteId: number) => {
    await playNote(noteId);
  };

  const handleMouseUp = (noteId: number) => {
    stopNote(noteId);
  };

  const handleMouseLeave = (noteId: number) => {
    if (activeNotes.has(noteId)) {
      stopNote(noteId);
    }
  };

  return (
    <section className="relative py-12 md:py-16 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            PLAY WITH SOUND
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            {isReady 
              ? isMobile 
                ? "Tap the piano keys to create music. Two octaves (C4-D6) for easy mobile playing."
                : "Click on the piano keys or use your keyboard to create music. Press keys Q-M for white keys and numbers 1-0 for black keys."
              : "Loading piano sounds..."}
          </p>
        </div>

        <div className="relative w-full" ref={pianoRef}>
          <div className="piano-container relative w-full h-[200px] md:h-[250px] lg:h-[300px] bg-gradient-to-b from-white/5 to-transparent rounded-lg overflow-hidden border border-white/10">
            <svg
              className="piano-svg w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={isMobile ? "0 0 680 200" : "0 0 2080 200"}
              preserveAspectRatio="none"
            >
              {/* White/Natural Keys */}
              <g className="piano-keys-natural">
                {(isMobile ? MOBILE_WHITE_KEYS : ALL_WHITE_KEYS).map((noteId, idx) => (
                  <rect
                    key={`natural-${noteId}`}
                    data-note-id={noteId}
                    className="piano-key piano-key-natural cursor-pointer transition-all hover:fill-gray-100"
                    x={idx * 40}
                    width="40"
                    height="200"
                    fill="#ffffff"
                    onMouseDown={() => handleMouseDown(noteId)}
                    onMouseUp={() => handleMouseUp(noteId)}
                    onMouseLeave={() => handleMouseLeave(noteId)}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleMouseDown(noteId);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      handleMouseUp(noteId);
                    }}
                    stroke="#e4e4ec"
                    strokeWidth="0.5"
                  />
                ))}
              </g>

              {/* Black/Flat Keys */}
              <g className="piano-keys-flat">
                {(isMobile ? MOBILE_BLACK_KEYS : ALL_BLACK_KEYS).map(({ noteId, x }) => (
                  <rect
                    key={`flat-${noteId}`}
                    data-note-id={noteId}
                    className="piano-key piano-key-flat cursor-pointer transition-all hover:fill-yellow-400"
                    x={x}
                    width="24"
                    height="120"
                    fill="#2c2c2c"
                    stroke="#1a1a1a"
                    strokeWidth="0.5"
                    onMouseDown={() => handleMouseDown(noteId)}
                    onMouseUp={() => handleMouseUp(noteId)}
                    onMouseLeave={() => handleMouseLeave(noteId)}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleMouseDown(noteId);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      handleMouseUp(noteId);
                    }}
                  />
                ))}
              </g>
            </svg>

            {/* Gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 to-transparent" />
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="mt-6 hidden md:flex flex-wrap justify-center gap-2 text-xs text-white/40">
            <span className="px-2 py-1 bg-white/5 rounded">Q-P</span>
            <span className="px-2 py-1 bg-white/5 rounded">A-L</span>
            <span className="px-2 py-1 bg-white/5 rounded">Z-M</span>
            <span className="text-white/20 mx-2">|</span>
            <span className="px-2 py-1 bg-white/5 rounded">1-0</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .piano-key-natural.active {
          fill: #f0f0f5;
        }
        .piano-key-flat.active {
          fill: #fbce41;
        }
      `}</style>
    </section>
  );
}
