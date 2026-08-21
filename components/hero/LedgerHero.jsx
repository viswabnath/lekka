"use client";

import { Canvas } from "@react-three/fiber";
import LedgerScene from "./LedgerScene";

export default function LedgerHero({ compact = false }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, compact ? 8.5 : 7], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <LedgerScene scale={compact ? 0.7 : 1} />
      </Canvas>
    </div>
  );
}
