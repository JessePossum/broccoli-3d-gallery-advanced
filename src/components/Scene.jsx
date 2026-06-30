import { Canvas } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import GalleryExperience from './GalleryExperience.jsx'

export default function Scene({
  onSelectArtwork,
  selectedArtwork,
  onCameraDataChange,
}) {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0.55, 2.6],
        fov: 70,
        near: 0.05,
        far: 100,
      }}
    >
      <color attach="background" args={['#f4f0e8']} />

      <Suspense fallback={null}>
        <GalleryExperience
          onSelectArtwork={onSelectArtwork}
          selectedArtwork={selectedArtwork}
          onCameraDataChange={onCameraDataChange}
        />

        <Environment preset="apartment" />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}