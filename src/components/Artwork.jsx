import { useCursor, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export default function Artwork({ artwork, selected, onClick }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useCursor(hovered)

  const texture = useTexture(artwork.image)
  texture.colorSpace = THREE.SRGBColorSpace

  useFrame(() => {
    if (!groupRef.current) return
    const targetScale = hovered || selected ? 1.045 : 1
    groupRef.current.scale.lerp(
      new THREE.Vector3(
        artwork.scale[0] * targetScale,
        artwork.scale[1] * targetScale,
        artwork.scale[2]
      ),
      0.12
    )
  })

  return (
    <group
      ref={groupRef}
      position={artwork.position}
      rotation={artwork.rotation}
      scale={artwork.scale}
      onPointerEnter={(event) => {
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerLeave={() => setHovered(false)}
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}
    >
      <mesh position={[0, 0, -0.03]} castShadow receiveShadow>
        <boxGeometry args={[1.08, 1.08, 0.06]} />
        <meshStandardMaterial color={selected ? '#111111' : '#f6f0e6'} roughness={0.65} />
      </mesh>

      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  )
}
