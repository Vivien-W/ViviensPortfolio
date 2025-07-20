import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import Frau from "../assets/images/Frau.png"; // Dein Bild

// ---------- Shader: Vertex ----------
const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  float wave(vec3 p) {
    return sin(p.x * 4.0 + uTime * 1.5)
         + sin(p.y * 4.0 + uTime * 1.2)
         + sin(p.z * 4.0 + uTime * 1.8);
  }

  void main() {
    vNormal = normal;
    vPosition = position;
    vec3 newPosition = position + normal * 0.05 * wave(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

// ---------- Shader: Fragment ----------
const fragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float light = dot(normalize(vNormal), lightDir);
    vec3 baseColor = vec3(0.6, 1.0, 1.0); // Türkis
    float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(vPosition)), 2.5);
    vec3 fresnelColor = vec3(1.0); // Weißer Schimmer

    vec3 color = baseColor * light + fresnelColor * fresnel * 0.7;
    color = pow(color, vec3(1.0 / 1.4)); // Aufhellung

    gl_FragColor = vec4(color, 0.4); // Transparenz
  }
`;

// ---------- Shader-Globus ----------
function WaterSphere() {
  const meshRef = useRef();
  const uniforms = useRef({
    uTime: { value: 0 },
  });

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent={true}
        depthWrite={false}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

// ---------- 2D-Bild im Zentrum ----------
function BillboardImage() {
  const texture = useLoader(TextureLoader, Frau);
  const meshRef = useRef();

  // Billboard: Immer zur Kamera
  useFrame(({ camera }) => {
    if (meshRef.current) {
      meshRef.current.lookAt(camera.position);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[1.4, 1.4]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
      />
    </mesh>
  );
}

// ---------- Hauptkomponente ----------
export default function WaterGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Licht */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 5]} intensity={1.5} />

      {/* 2D-Image + Wasser */}
      <BillboardImage />
      <WaterSphere />

      {/* Steuerung */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
