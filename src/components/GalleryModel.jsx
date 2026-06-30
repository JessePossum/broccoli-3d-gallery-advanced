import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export default function GalleryModel({ fallback = null }) {
  // Put your GLB at public/models/gallery.glb
  // If it fails, the error boundary would normally catch it.
  // During early prototyping, use the PlaceholderRoom if your model is not ready.
  try {
    return <LoadedModel />
  } catch {
    return fallback
  }
}

function LoadedModel() {
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
