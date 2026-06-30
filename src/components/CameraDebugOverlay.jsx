export default function CameraDebugOverlay({ cameraData }) {
  const code = `{
  id: 'new-stop',
  position: [${cameraData.position.join(', ')}],
  target: [${cameraData.target.join(', ')}],
}`

  return (
    <div className="camera-debug-overlay">
      <strong>Camera stop</strong>

      <pre>{code}</pre>

      <button onClick={() => navigator.clipboard.writeText(code)}>
        Copy camera stop
      </button>
    </div>
  )
}