import { OrbitControls, Stats } from "@react-three/drei";
import { type Vector3, useFrame, useLoader } from "@react-three/fiber";
import { type FC, useRef } from "react";
import { type Mesh, SRGBColorSpace, TextureLoader } from "three";
import img from "./sunmap.jpg";

type SunComponentProps = {
  radius?: number;
  position?: Vector3;
};

export const SunComponent: FC<SunComponentProps> = ({
  radius = 1,
  position = [0, 0, 0],
}) => {
  // biome-ignore lint:
  const mesh = useRef<Mesh>(null!);
  const colorMap = useLoader(TextureLoader, img);
  colorMap.colorSpace = SRGBColorSpace;
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} position={position}>
      <hemisphereLight intensity={3} position={[1, 1, 1]} />
      <sphereGeometry args={[radius, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
      <Stats />
      <OrbitControls />
    </mesh>
  );
};
