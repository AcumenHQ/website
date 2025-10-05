'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

type ShapeConfig = {
  type: 'circle' | 'rounded';
  position: [number, number, number];
  scale: number;
  opacity: number;
  speed: number;
};

function AnimatedCircle({ basePosition, scale, opacity, speed }: { basePosition: [number, number, number]; scale: number; opacity: number; speed: number; }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const yOffset = Math.sin(t * speed) * 0.03;
    ref.current.position.set(basePosition[0], basePosition[1] + yOffset, basePosition[2]);
  });
  return (
    <mesh ref={ref} position={basePosition} scale={scale}>
      <circleGeometry args={[1, 64]} />
      <meshBasicMaterial color={0xffffff} transparent opacity={opacity} />
    </mesh>
  );
}

function AnimatedRounded({ basePosition, scale, opacity, speed }: { basePosition: [number, number, number]; scale: number; opacity: number; speed: number; }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const yOffset = Math.sin(t * speed) * 0.03;
    ref.current.position.set(basePosition[0], basePosition[1] + yOffset, basePosition[2]);
  });
  return (
    <group ref={ref} position={basePosition}>
      <RoundedBox scale={scale} args={[1.2, 0.7, 0.05]} radius={0.1} smoothness={4}>
        <meshBasicMaterial color={0xffffff} transparent opacity={opacity} />
      </RoundedBox>
    </group>
  );
}

function AbstractShapes() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate a subtle set of shapes: clustered sparsely with varying sizes
  const shapes = useMemo<ShapeConfig[]>(() => {
    const arr: ShapeConfig[] = [];
    const base: ShapeConfig[] = [
      { type: 'circle', position: [-3, 1.2, -2.5], scale: 0.9, opacity: 0.05, speed: 0.06 },
      { type: 'circle', position: [2.2, -0.8, -2.2], scale: 0.55, opacity: 0.05, speed: 0.05 },
      { type: 'rounded', position: [1.1, 1.6, -2.8], scale: 0.65, opacity: 0.04, speed: 0.04 },
      { type: 'rounded', position: [-2.0, -1.4, -2.6], scale: 0.45, opacity: 0.045, speed: 0.05 },
    ];
    // Add tiny shapes
    for (let i = 0; i < 5; i++) {
      const pos: [number, number, number] = [
        2 + Math.random() * 1.5,
        1 + Math.random() * 1.0,
        -2.7,
      ];
      arr.push({ type: 'circle', position: pos, scale: 0.2 + Math.random() * 0.15, opacity: 0.03, speed: 0.07 + Math.random() * 0.03 });
    }
    return [...base, ...arr];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.05) * 0.015;
      groupRef.current.position.y = Math.sin(t * 0.2) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, idx) => (
        s.type === 'circle' ? (
          <AnimatedCircle key={idx} basePosition={s.position} scale={s.scale} opacity={s.opacity} speed={s.speed} />
        ) : (
          <AnimatedRounded key={idx} basePosition={s.position} scale={s.scale} opacity={s.opacity} speed={s.speed} />
        )
      ))}
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]} gl={{ alpha: true }} style={{ pointerEvents: 'none' }}>
      <AbstractShapes />
    </Canvas>
  );
}


