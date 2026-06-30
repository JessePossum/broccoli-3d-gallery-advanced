import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, Environment, PerformanceMonitor, Preload } from '@react-three/drei'
import { Suspense, useState } from 'react'
import GalleryExperience from './GalleryExperience.jsx'
import LoadingScreen from './LoadingScreen.jsx'

export default function Scene({ onSelectArtwork, selectedArtwork }) {
  const [dpr, setDpr] = useState(1.5)

  return (
    <>
      <Canvas
        shadows
        dpr={dpr}
        camera={{ position: [0, 1.7, 5.6], fov: 45, near: 0.1, far: 100 }}
      >
        <color attach="background" args={['#f4f0e8']} />

        <PerformanceMonitor
          onIncline={() => setDpr(1.75)}
          onDecline={() => setDpr(1)}
        />

        <Suspense fallback={null}>
          <GalleryExperience
            onSelectArtwork={onSelectArtwork}
            selectedArtwork={selectedArtwork}
          />
          <Environment preset="apartment" />
          <Preload all />
        </Suspense>

        <AdaptiveDpr pixelated />
      </Canvas>
      <Suspense fallback={<LoadingScreen />}>
        <AssetPreloader />
      </Suspense>
    </>
  )
}

function AssetPreloader() {
  return null
}
