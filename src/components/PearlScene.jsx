import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Pearl() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#fff0f5"               
        metalness={0.7}              // Für metallischen Schimmer
        roughness={0.2}              // Glatt & glänzend
        emissive="#ffeeff"           // Leichtes Leuchten von innen
        emissiveIntensity={0.2}
        sheen={2}                    
        side={2}
        sheenColor="#ffffff"
      />
    </mesh>
  );
}

export default function PearlScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      {/* Lichtquellen */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 3, 3]} intensity={1.2} />

      {/* Die Perle */}
      <Pearl />

      {/* Maussteuerung */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
