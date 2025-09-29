import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Pearl() {
  const colorMap = useLoader(TextureLoader, "Perlentextur.jpg");
  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        metalness={0.6} // Für metallischen Schimmer
        roughness={0.1} // Glatt & glänzend
        emissive="#ffeeff" // Leichtes Leuchten von innen
        emissiveIntensity={0.25}
        sheen={1}
        side={2}
        sheenColor="#ffffff"
        iridescence={0.6}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 400]}
      />
    </mesh>
  );
}

export default function PearlScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      {/* Lichtquellen */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />

      {/* Die Perle */}
      <Pearl />

      {/* Realistische Umgebung für Reflexionen */}
      <Environment preset="studio" />

      {/* Maussteuerung */}
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
}
