export default function ArtworkPanel({ artwork, onClose }) {
  if (!artwork) return null

  return (
    <aside className="artwork-panel" aria-live="polite">
      <button className="close-button" onClick={onClose} aria-label="Close artwork panel">
        ×
      </button>

      <img
        src={artwork.image}
        alt={artwork.title}
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
      />

      <h2>{artwork.title}</h2>
      <p className="meta">
        {artwork.artist}
        {artwork.year ? `, ${artwork.year}` : ''}
      </p>

      <p className="description">{artwork.description}</p>

      <div className="panel-actions">
        {artwork.productUrl && (
          <a href={artwork.productUrl} target="_blank" rel="noreferrer">
            View piece
          </a>
        )}
        <button onClick={onClose}>Back to gallery</button>
      </div>
    </aside>
  )
}
