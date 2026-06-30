export default function Interface() {
  return (
    <>
      <section className="interface">
        <h1>Broccoli Gallery</h1>
        <p>Move through the gallery. Click artworks to view details.</p>
      </section>

      <div className="gallery-nav">
        <button onClick={() => window.galleryPrev?.()}>Previous</button>
        <button onClick={() => window.galleryNext?.()}>Next</button>
      </div>

      <div className="hint">Move cursor / tap artworks</div>
    </>
  )
}