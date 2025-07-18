// src/components/WaterEffect.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function SubtleWaterPlane() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]}>
      <planeGeometry args={[20, 20, 100, 100]} />
      <shaderMaterial
        attach="material"
        args={[{
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color('#ccffff') }, // Helleres Türkis
          },
          vertexShader: `
            uniform float time;
            varying vec2 vUv;

            void main() {
              vUv = uv;
              vec3 pos = position;
              pos.z += sin(pos.x * 3.0 + time * 0.8) * 0.08;
              pos.z += sin(pos.y * 4.0 + time * 1.2) * 0.08;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 color;
            varying vec2 vUv;

            void main() {
              gl_FragColor = vec4(color, 0.09); // sehr transparent
            }
          `,
          transparent: true,
        }]}
      />
    </mesh>
  );
}

export default function WaterEffect() {
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <SubtleWaterPlane />
      </Canvas>
    </div>
  );
}
