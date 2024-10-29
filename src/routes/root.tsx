import { Canvas } from "@react-three/fiber";
import { AnimatedBox } from "../AnimatedBox";

export default function Root() {
  return (
    <>
      <div className="w-full h-screen">
        <Canvas>
          <AnimatedBox />
        </Canvas>
      </div>
    </>
  );
}