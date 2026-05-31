"use client";

import { useState } from "react";
import ToyStorySection from "./Specialization-page";

export default function HomeAnimated({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const aboutVisible = progress >= 0.95;

  return (
    <>
      <ToyStorySection onProgressChange={setProgress} />
      <div
        style={{
          opacity: aboutVisible ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: aboutVisible ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
