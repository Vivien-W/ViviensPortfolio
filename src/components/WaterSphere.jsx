import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Vertex Shader: sanfte Wellen mit Noise
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  // Simplex-like noise
  float wave(vec3 p) {
    return sin(p.x * 4.0 + uTime * 1.5)
         + sin(p.y * 4.0 + uTime * 1.2)
         + sin(p.z * 4.0 + uTime * 1.8);
  }

  void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;

    vec3 newPosition = position + normal * 0.05 * wave(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

// Fragment Shader: Wasserfarbe, Licht, Fresnel-Schimmer
const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform float uTime;

  void main() {
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float light = dot(normalize(vNormal), lightDir);

    // Wasserfarbe
    vec3 baseColor = vec3(0.6, 1.0, 1.0); // Ozean-Blau

    // Fresnel-Effekt für Schimmer am Rand
    float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(vPosition)), 3.0);

    // Finalfarbe
    vec3 color = baseColor * light + vec3(1.0, 1.0, 1.0) * fresnel;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderSphere() {
  const meshRef = useRef();
  const uniforms = useRef({
    uTime: { value: 0 },
  });

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

export default function WaterShaderSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 5]} intensity={1.2} />
      <ShaderSphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
