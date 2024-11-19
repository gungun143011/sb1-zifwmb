import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatedSphere } from './animated-sphere';

export function HeroCanvas() {
  return (
    <Canvas className="absolute inset-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}