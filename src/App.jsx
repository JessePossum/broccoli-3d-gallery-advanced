import { useState } from 'react'
import Scene from './components/Scene.jsx'
import ArtworkPanel from './components/ArtworkPanel.jsx'
import Interface from './components/Interface.jsx'

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  return (
    <main className="app-shell">
      <Scene onSelectArtwork={setSelectedArtwork} selectedArtwork={selectedArtwork} />
      <Interface />
      <ArtworkPanel
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </main>
  )
}
