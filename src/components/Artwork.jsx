import { useCursor, useTexture } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function Artwork({ artwork, selected, onClick }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useCursor(hovered)

  const texture = useTexture(artwork.image)
  texture.colorSpace = THREE.SRGBColorSpace

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selected || !groupRef.current) return

      event.preventDefault()

      const moveStep = event.shiftKey ? 0.1 : 0.03
      const scaleStep = event.shiftKey ? 0.12 : 0.04
      const rotateStep = Math.PI / 24

      const obj = groupRef.current

      // Move
      if (event.key === 'ArrowLeft') obj.position.x -= moveStep
      if (event.key === 'ArrowRight') obj.position.x += moveStep
      if (event.key === 'ArrowUp') obj.position.y += moveStep
      if (event.key === 'ArrowDown') obj.position.y -= moveStep

      // Depth
      if (event.key.toLowerCase() === 'w') obj.position.z -= moveStep
      if (event.key.toLowerCase() === 's') obj.position.z += moveStep

      // Rotate
      if (event.key.toLowerCase() === 'q') obj.rotation.y += rotateStep
      if (event.key.toLowerCase() === 'e') obj.rotation.y -= rotateStep

      // Uniform scale
      if (event.key === '+' || event.key === '=') {
        obj.scale.x += scaleStep
        obj.scale.y += scaleStep
      }

      if (event.key === '-' || event.key === '_') {
        obj.scale.x = Math.max(0.05, obj.scale.x - scaleStep)
        obj.scale.y = Math.max(0.05, obj.scale.y - scaleStep)
      }

      // Width
      if (event.key.toLowerCase() === 'z') {
        obj.scale.x = Math.max(0.05, obj.scale.x - scaleStep)
      }

      if (event.key.toLowerCase() === 'x') {
        obj.scale.x += scaleStep
      }

      // Height
      if (event.key.toLowerCase() === 'c') {
        obj.scale.y = Math.max(0.05, obj.scale.y - scaleStep)
      }

      if (event.key.toLowerCase() === 'v') {
        obj.scale.y += scaleStep
      }

      // Print values
      if (event.key.toLowerCase() === 'p') {
        const p = obj.position
        const r = obj.rotation
        const s = obj.scale

        console.log(`
{
  id: '${artwork.id}',
  position: [${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}],
  rotation: [0, ${r.y.toFixed(2)}, 0],
  scale: [${s.x.toFixed(2)}, ${s.y.toFixed(2)}, 1],
}
`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selected, artwork.id])

  return (
    <group
      ref={groupRef}
      position={artwork.position}
      rotation={artwork.rotation}
      scale={artwork.scale}
      onPointerEnter={(e) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerLeave={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <mesh>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
    </group>
  )
}