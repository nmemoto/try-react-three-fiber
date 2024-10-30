import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function Box() {
  // biome-ignore lint:
  const mesh = useRef<Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh}>
      <OrbitControls />
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}
