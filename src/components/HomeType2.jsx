import { useRef } from 'react'
import html2canvas from 'html2canvas'
import PixelArtTulip2 from './PixelArtTulip2'
import './HomeType2.css'

function HomeType2({ onLogout }) {
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
    <div className="home-container-type2" ref={containerRef}>
      <div className="home-content-type2">

        
        <div className="main-area-type2">
          {/* Pixel Art Canvas - Tulip only */}
          <div className="canvas-section-type2">
            <PixelArtTulip2 />
          </div>

          {/* Side panel with sticky note and buttons */}
          <div className="side-panel-type2">
            {/* Sticky Note */}
            <div className="sticky-note-type2">
              <div className="sticky-note-text-type2">
              <br /><br /><br />
              El mundo es tuyo únicamente tienes que creerlo, te deseo todo lo bueno de él.
                <br /><br /><br />
                <span className="sticky-signature-type2">con  mucho   cariño R1</span>
              </div>
            </div>

            {/* Control buttons */}
            <div className="controls-type2">
              <button className="capture-button-type2" onClick={takeScreenshot}>
                CAPTURAR
              </button>
              <button className="exit-button-type2" onClick={onLogout}>
                SALIR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeType2