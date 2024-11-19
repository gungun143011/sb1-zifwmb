import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.5}
      />
    </Sphere>
  );
}