import { OrbitControls, ContactShadows } from '@react-three/drei'
import GalleryModel from './GalleryModel.jsx'
import PlaceholderRoom from './PlaceholderRoom.jsx'
import Artwork from './Artwork.jsx'
import artworks from '../data/artworks.js'

export default function GalleryExperience({ onSelectArtwork, selectedArtwork }) {
  return (
    <>
      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        enableRotate={true}
        enablePan={true}
        enableZoom={true}
        minDistance={1.5}
        maxDistance={12}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 1.35, 0]}
      />

      <group>
        <ambientLight intensity={0.65} />

        <directionalLight
          position={[4, 6, 4]}
          intensity={2.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        <GalleryModel fallback={<PlaceholderRoom />} />

        {artworks.map((artwork) => (
          <Artwork
            key={artwork.id}
            artwork={artwork}
            selected={selectedArtwork?.id === artwork.id}
            onClick={() => onSelectArtwork(artwork)}
          />
        ))}

        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.3}
          scale={9}
          blur={2.5}
          far={6}
        />
      </group>
    </>
  )
}