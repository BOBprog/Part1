import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyCube from "./MyCube";

function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />

      <MyCube />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
