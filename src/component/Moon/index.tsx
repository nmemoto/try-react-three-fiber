import { Line, OrbitControls } from "@react-three/drei";
import { type Vector3, useFrame, useLoader } from "@react-three/fiber";
import { type FC, useRef } from "react";
import { type Mesh, SRGBColorSpace, TextureLoader } from "three";
import img from "./moonmap1k.jpg";

type MoonComponentProps = {
  radius?: number;
  directionalLight?: boolean;
  position?: Vector3;
};

export const MoonComponent: FC<MoonComponentProps> = ({
  radius = 1,
  directionalLight = false,
  position = [0, 0, 0],
}) => {
  // biome-ignore lint:
  const mesh = useRef<Mesh>(null!);
  const colorMap = useLoader(TextureLoader, img);
  colorMap.colorSpace = SRGBColorSpace;
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  // 軸の傾き
  const axialTilt = (Math.PI / 180) * 1.54;
  // 直径
  const diameter = radius * 2;
  return (
    <mesh ref={mesh} position={position}>
      {directionalLight && (
        <directionalLight intensity={3} position={[1, 1, 1]} />
      )}
      <OrbitControls />
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
    </mesh>
  );
};
