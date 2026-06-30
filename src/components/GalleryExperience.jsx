import { ContactShadows } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import GalleryModel from './GalleryModel.jsx'
import Artwork from './Artwork.jsx'
import artworks from '../data/artworks.js'

const cameraStops = [
  {
    id: 'entrance',
    position: [0, 0.55, 2.6],
    target: [0, 0.55, 0],
  },
  {
    id: 'room-one',
    position: [0, 0.55, 1.1],
    target: [0, 0.55, -1.4],
  },
  {
    id: 'left-room',
    position: [-1.1, 0.55, 0.4],
    target: [-1.6, 0.55, -1.6],
  },
  {
    id: 'right-room',
    position: [1.2, 0.55, 0.4],
    target: [1.8, 0.55, -1.4],
  },
  {
    id: 'back-room',
    position: [0.3, 0.55, -1.2],
    target: [0.3, 0.55, -2.2],
  },
]

export default function GalleryExperience({
  onSelectArtwork,
  selectedArtwork,
  onCameraDataChange,
}) {
  const { camera } = useThree()
  const [stopIndex, setStopIndex] = useState(0)

  const currentStop = cameraStops[stopIndex]

  const desiredPosition = useMemo(() => new THREE.Vector3(), [])
  const desiredTarget = useMemo(() => new THREE.Vector3(), [])
  const lookTarget = useMemo(() => new THREE.Vector3(0, 0.55, 0), [])

  useEffect(() => {
    camera.position.set(...cameraStops[0].position)
    camera.lookAt(...cameraStops[0].target)

    window.galleryNext = () => {
      setStopIndex((index) => (index + 1) % cameraStops.length)
    }

    window.galleryPrev = () => {
      setStopIndex((index) =>
        index === 0 ? cameraStops.length - 1 : index - 1
      )
    }

    return () => {
      delete window.galleryNext
      delete window.galleryPrev
    }
  }, [camera])

  useFrame(() => {
    desiredPosition.set(...currentStop.position)
    desiredTarget.set(...currentStop.target)

    camera.position.lerp(desiredPosition, 0.055)
    lookTarget.lerp(desiredTarget, 0.065)
    camera.lookAt(lookTarget)

    const direction = new THREE.Vector3()
    camera.getWorldDirection(direction)

    const target = camera.position.clone().add(direction.multiplyScalar(2))

    onCameraDataChange?.({
      position: [
        Number(camera.position.x.toFixed(2)),
        Number(camera.position.y.toFixed(2)),
        Number(camera.position.z.toFixed(2)),
      ],
      target: [
        Number(target.x.toFixed(2)),
        Number(target.y.toFixed(2)),
        Number(target.z.toFixed(2)),
      ],
    })
  })

  return (
    <group>
      <ambientLight intensity={0.9} />

      <directionalLight
        position={[2, 4, 3]}
        intensity={2.2}
        castShadow
      />

      <GalleryModel />

      {artworks.map((artwork) => (
        <Artwork
          key={artwork.id}
          artwork={artwork}
          selected={selectedArtwork?.id === artwork.id}
          onClick={() => onSelectArtwork(artwork)}
        />
      ))}

      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.25}
        scale={6}
        blur={2}
        far={4}
      />
    </group>
  )
}