export default function Interface({ selectedArtwork }) {
  return (
    <>
      <section className="interface">
        <h1>Broccoli Gallery</h1>

        <div className="debug-instructions">
          <strong>Artwork editor</strong>

          <ul>
            <li>Click artwork to select</li>
            <li>← → Move X</li>
            <li>↑ ↓ Move Y</li>
            <li>W / S Move Z</li>
            <li>Q / E Rotate</li>
            <li>+ / - Scale</li>
            <li>Z / X Width</li>
            <li>C / V Height</li>
            <li>Shift = larger steps</li>
          </ul>

          {selectedArtwork && (
            <>
              <hr />

              <pre className="coords">
{`{
id: '${selectedArtwork.id}',
position: [${selectedArtwork.position
  .map(v => v.toFixed(2))
  .join(', ')}],
rotation: [${selectedArtwork.rotation
  .map(v => v.toFixed(2))
  .join(', ')}],
scale: [${selectedArtwork.scale
  .map(v => v.toFixed(2))
  .join(', ')}]
}`}
              </pre>
            </>
          )}
        </div>
      </section>

      <div className="gallery-nav">
        <button onClick={() => window.galleryPrev?.()}>
          Previous
        </button>

        <button onClick={() => window.galleryNext?.()}>
          Next
        </button>
      </div>
    </>
  )
}