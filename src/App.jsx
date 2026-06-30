import { useState } from 'react'
import Scene from './components/Scene.jsx'
import ArtworkPanel from './components/ArtworkPanel.jsx'
import Interface from './components/Interface.jsx'
import CameraDebugOverlay from './components/CameraDebugOverlay.jsx'

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  const [cameraData, setCameraData] = useState({
    position: [0, 0, 0],
    target: [0, 0, 0],
  })

  return (
    <main className="app-shell">
      <Scene
        onSelectArtwork={setSelectedArtwork}
        selectedArtwork={selectedArtwork}
        onCameraDataChange={setCameraData}
      />

      <Interface />

      <CameraDebugOverlay cameraData={cameraData} />

      <ArtworkPanel
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </main>
  )
}