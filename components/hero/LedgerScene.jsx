"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Stream({ color, radius, offsetX, count = 90, speed }) {
  const ref = useRef(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 2 * 3 + offsetX;
      const height = (t - 0.5) * 5.5;
      const spread = radius * (0.3 + 0.7 * Math.abs(Math.sin(t * Math.PI)));
      positions[i * 3] = offsetX + Math.cos(angle) * spread;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * spread;
    }
    return positions;
  }, [count, radius, offsetX]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.055} transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

function Core() {
  const ref = useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#cc9d2e"
          emissive="#cc9d2e"
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function LedgerScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#e6b940" />
      <pointLight position={[-4, -2, -3]} intensity={20} color="#2f7d6d" />

      <group rotation={[0.25, 0, 0.1]}>
        <Stream color="#2f7d6d" radius={2.4} offsetX={-1.9} speed={0.12} />
        <Stream color="#8c3327" radius={2.2} offsetX={0} speed={-0.09} />
        <Stream color="#f4eedd" radius={2.4} offsetX={1.9} speed={0.15} />
        <Core />
      </group>
    </>
  );
}
