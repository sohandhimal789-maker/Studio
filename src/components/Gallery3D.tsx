import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const urls = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/${i + 400}/800/1200`);

function ImageItem({ url, index, width = 3, height = 4 }: { url: string, index: number, width?: number, height?: number }) {
  const ref = useRef<any>(null);
  const scroll = useScroll();
  const { width: w } = useThree((state) => state.viewport);
  
  // Stagger positions
  const x = index * (width + 0.5);
  const position: [number, number, number] = [x, 0, 0];
  
  // Alternate Y position slightly to make it organic
  const yOffset = index % 2 === 0 ? 0.5 : -0.5;
  position[1] = yOffset;
  
  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Parallax effect: The scroll returns a value from 0 to 1
    // We move the group to the left as we scroll
    const totalWidth = urls.length * (width + 0.5);
    // Start at initial position and move left based on scroll progress
    ref.current.position.x = x - scroll.offset * totalWidth;
    
    // Calculate distance from center (x=0) for scale & opacity fx
    const distanceFromCenter = Math.abs(ref.current.position.x);
    
    // Scale down items further from center
    const scale = Math.max(0.7, 1 - distanceFromCenter * 0.1);
    ref.current.scale.setScalar(THREE.MathUtils.damp(ref.current.scale.x, scale, 4, delta));
    
    // Fade out a bit if far
    const opacity = Math.max(0.3, 1 - distanceFromCenter * 0.15);
    if (ref.current.material) {
        ref.current.material.opacity = THREE.MathUtils.damp(ref.current.material.opacity, opacity, 4, delta);
    }
    
    // Add subtle rotation
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, distanceFromCenter * 0.05 * Math.sign(ref.current.position.x), 4, delta);
    ref.current.rotation.z = THREE.MathUtils.damp(ref.current.rotation.z, distanceFromCenter * 0.02 * Math.sign(ref.current.position.x), 4, delta);
  });

  return (
    <Image 
      ref={ref} 
      url={url} 
      position={position} 
      scale={[width, height] as any} 
      transparent 
    />
  );
}

export function Gallery3D() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas gl={{ antialias: true }} camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#0a0a0a']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <ScrollControls pages={3} horizontal damping={0.2}>
            <Scroll>
              {urls.map((url, i) => (
                <ImageItem key={url} url={url} index={i} />
              ))}
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
