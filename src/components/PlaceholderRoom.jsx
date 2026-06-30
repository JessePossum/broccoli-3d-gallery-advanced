export default function PlaceholderRoom() {
  return (
    <group>
      <mesh receiveShadow position={[0, -0.04, 0]}>
        <boxGeometry args={[7, 0.08, 7]} />
        <meshStandardMaterial color="#ded8cd" roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[0, 1.8, -3.05]}>
        <boxGeometry args={[7, 3.6, 0.12]} />
        <meshStandardMaterial color="#f7f2e8" roughness={0.82} />
      </mesh>

      <mesh receiveShadow position={[-3.5, 1.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[7, 3.6, 0.12]} />
        <meshStandardMaterial color="#eee6d8" roughness={0.85} />
      </mesh>

      <mesh receiveShadow position={[3.5, 1.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[7, 3.6, 0.12]} />
        <meshStandardMaterial color="#eee6d8" roughness={0.85} />
      </mesh>

      <mesh receiveShadow position={[0, 3.6, 0]}>
        <boxGeometry args={[7, 0.12, 7]} />
        <meshStandardMaterial color="#fffaf0" roughness={0.9} />
      </mesh>
    </group>
  )
}
