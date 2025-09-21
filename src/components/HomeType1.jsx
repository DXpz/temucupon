import { useRef } from 'react'
import html2canvas from 'html2canvas'
import PixelArtCanvas from './PixelArtCanvas'
import './HomeType1.css'

function HomeType1({ onLogout }) {
  const containerRef = useRef(null)

  const takeScreenshot = async () => {
    try {
      const canvas = await html2canvas(containerRef.current, {
        backgroundColor: 'white',
        scale: 2,
        useCORS: true
      })
      
      const link = document.createElement('a')
      link.download = `the first.png`
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('Error taking screenshot:', error)
      alert('Error al tomar la captura')
    }
  }

  return (
    <div className="home-container" ref={containerRef}>
      <div className="home-content">
        
        <div className="main-area">
          {/* Pixel Art Canvas */}
          <div className="canvas-section">
            <PixelArtCanvas />
          </div>

          {/* Side panel with sticky note and buttons */}
          <div className="side-panel">
            {/* Sticky Note */}
            <div className="sticky-note">
              <div className="sticky-note-text">
              <br /><br /><br />
                  Dicen que las flores amarillas alegran cualquier día… pensé que podrían sumar un poco de color al tuyo
                <br /><br /><br />
                <span className="sticky-signature">con mucho cariño R1</span>
              </div>
            </div>

            {/* Control buttons */}
            <div className="controls">
              <button className="capture-button" onClick={takeScreenshot}>
                CAPTURAR
              </button>
              <button className="exit-button" onClick={onLogout}>
                SALIR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeType1
