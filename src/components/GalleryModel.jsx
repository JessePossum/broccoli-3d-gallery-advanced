import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export default function GalleryModel() {
  const gltf = useGLTF('/models/gallery.glb')

  const scene = useMemo(() => {
    const clone = gltf.scene.clone(true)

    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    return clone
  }, [gltf.scene])

  return <primitive object={scene} scale={1} position={[0, 0, 0]} />
}

useGLTF.preload('/models/gallery.glb')