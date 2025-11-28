export default function MyCube() {
    return (
      <mesh rotation={[0.4, 0.4, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    );
  }
  