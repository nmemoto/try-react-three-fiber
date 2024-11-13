import { Line, OrbitControls, Stats } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { type FC, useRef } from "react";
import { type Mesh, SRGBColorSpace, TextureLoader } from "three";
import img from "./earthmap1k.jpg";

type EarthComponentProps = {
  radius?: number;
  directionalLight?: boolean;
};

export const EarthComponent: FC<EarthComponentProps> = ({
  radius = 1,
  directionalLight = false,
}) => {
  // biome-ignore lint:
  const mesh = useRef<Mesh>(null!);
  const colorMap = useLoader(TextureLoader, img);
  colorMap.colorSpace = SRGBColorSpace;
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  // 軸の傾き
  const axialTilt = (Math.PI / 180) * 23.44;
  // 直径
  const diameter = radius * 2;
  return (
    <mesh ref={mesh} rotation={[axialTilt, 0, 0]}>
      {directionalLight && (
        <directionalLight intensity={3} position={[1, 1, 1]} />
      )}
      <sphereGeometry args={[radius, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
      <Line
        points={[
          [0, -diameter, 0],
          [0, diameter, 0],
        ]} // 軸の始点と終点
        color="red" // 軸の色
        lineWidth={2} // 軸の太さ
        rotation={[0, axialTilt, 0]}
      />
      <Stats />
      <OrbitControls />
    </mesh>
  );
};
