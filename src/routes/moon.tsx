import { Canvas } from "@react-three/fiber";
import { MoonComponent } from "../component/Moon";

export default function Moon() {
  return (
    <Canvas>
      <MoonComponent directionalLight />
    </Canvas>
  );
}
