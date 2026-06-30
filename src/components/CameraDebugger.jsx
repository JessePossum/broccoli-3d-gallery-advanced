import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function CameraDebugger() {
  const { camera } = useThree()

  useEffect(() => {
    const logCamera = () => {
      const direction = new THREE.Vector3()
      camera.getWorldDirection(direction)

      const target = camera.position.clone().add(direction.multiplyScalar(2))

      console.log({
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
    }

    window.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 'p') {
        logCamera()
      }
    })
  }, [camera])

  return null
}