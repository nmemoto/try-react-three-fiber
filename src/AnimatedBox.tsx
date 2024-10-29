import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function AnimatedBox() {
  // biome-ignore lint:
  const mesh = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.getElapsedTime();
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
}
