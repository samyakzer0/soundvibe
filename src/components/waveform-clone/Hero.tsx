"use client";

import React from "react";
import { Scene3D } from "./Scene3D";

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-background">
      <Scene3D />
    </section>
  );
}
