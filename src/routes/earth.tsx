import { Canvas } from "@react-three/fiber";
import { EarthComponent } from "../component/Earth";

export default function Earth() {
  return (
    <Canvas>
      <EarthComponent directionalLight />
    </Canvas>
  );
}
