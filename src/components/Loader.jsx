
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const progress = useProgress();
  return (
    <Html>
      <span className="canvas-load" />
      <p
        style={{
          fontSize: 30,
          color: "#915eef",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.total.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
