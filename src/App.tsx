import { Canvas } from "@react-three/fiber";
import { AnimatedBox } from "./AnimatedBox";

function App() {
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

export default App;
