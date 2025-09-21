import { useState } from 'react'
import './PixelArtCanvas.css'

function PixelArtCanvasCat() {
  // Color palette with numbers (cat colors from image)
  const colorPalette = {
    1: '#2a2a2a', // Negro/gris oscuro - contornos
    2: '#8a8a8a', // Gris medio - cuerpo principal
    3: '#f8b3c4', // Rosa - orejas internas y nariz
    4: '#d0d0d0'  // Gris claro - detalles
  }

  const [selectedColor, setSelectedColor] = useState(1)
  const [pixelColors, setPixelColors] = useState({})

  // Cat pattern with some 2x4 blocks intercalated
  const catPattern = [
    // Row 0 - ears tips
    { row: 0, col: 3, number: 1 }, { row: 0, col: 4, number: 1 }, { row: 0, col: 5, number: 1 },
    { row: 0, col: 9, number: 1 }, { row: 0, col: 10, number: 1 }, { row: 0, col: 11, number: 1 }, 
    
    // Row 1 - ears
    { row: 1, col: 2, number: 1 }, { row: 1, col: 3, number: 2 }, { row: 1, col: 4, number: 3 }, { row: 1, col: 5, number: 2 }, { row: 1, col: 6, number: 1 },
    { row: 1, col: 8, number: 1 }, { row: 1, col: 9, number: 4 }, { row: 1, col: 10, number: 3 }, { row: 1, col: 11, number: 2 }, { row: 1, col: 12, number: 1 },
    
    // Row 2 - head top
    { row: 2, col: 1, number: 1 }, { row: 2, col: 2, number: 2 }, { row: 2, col: 3, number: 2 }, { row: 2, col: 4, number: 2 }, { row: 2, col: 5, number: 4 }, { row: 2, col: 6, number: 4 }, { row: 2, col: 7, number: 1 },
    { row: 2, col: 8, number: 2 }, { row: 2, col: 9, number: 2 }, { row: 2, col: 10, number: 2 }, { row: 2, col: 11, number: 2 }, { row: 2, col: 12, number: 4 }, { row: 2, col: 13, number: 1 },
    
    // Row 3-5 - head body with 2x4 blocks
    { row: 3, col: 0, number: 1 }, { row: 3, col: 1, number: 4 }, 
    // 2x4 block (rows 3-4, cols 2-5) - gray body
    { row: 3, col: 2, number: 2 }, { row: 3, col: 3, number: 2 }, { row: 3, col: 4, number: 2 }, { row: 3, col: 5, number: 4 }, 
    { row: 3, col: 6, number: 2 }, { row: 3, col: 7, number: 2 }, { row: 3, col: 8, number: 2 }, { row: 3, col: 9, number: 2 }, { row: 3, col: 10, number: 2 }, { row: 3, col: 11, number: 4 }, { row: 3, col: 12, number: 2 }, { row: 3, col: 13, number: 2 }, { row: 3, col: 14, number: 1 },
    
    { row: 4, col: 0, number: 1 }, { row: 4, col: 1, number: 4 }, 
    // Continuation of 2x4 block (rows 3-4, cols 2-5)
    { row: 4, col: 2, number: 2 }, { row: 4, col: 3, number: 2 }, { row: 4, col: 4, number: 2 }, { row: 4, col: 5, number: 4 }, 
    { row: 4, col: 6, number: 2 }, { row: 4, col: 7, number: 2 }, { row: 4, col: 8, number: 4 }, { row: 4, col: 9, number: 4 }, { row: 4, col: 10, number: 2 }, { row: 4, col: 11, number: 4 }, { row: 4, col: 12, number: 2 }, { row: 4, col: 13, number: 2 }, { row: 4, col: 14, number: 1 },
    
    { row: 5, col: 0, number: 1 }, { row: 5, col: 1, number: 4 }, { row: 5, col: 2, number: 2 }, { row: 5, col: 3, number: 2 }, { row: 5, col: 4, number: 2 }, { row: 5, col: 5, number: 4 }, 
    // 2x4 block (rows 5-6, cols 6-9) - gray body
    { row: 5, col: 6, number: 2 }, { row: 5, col: 7, number: 2 }, { row: 5, col: 8, number: 2 }, { row: 5, col: 9, number: 2 }, 
    { row: 5, col: 10, number: 2 }, { row: 5, col: 11, number: 2 }, { row: 5, col: 12, number: 2 }, { row: 5, col: 13, number: 2 }, { row: 5, col: 14, number: 1 },
    
    // Row 6 - eyes outline with continuation of 2x4 block
    { row: 6, col: 0, number: 1 }, { row: 6, col: 1, number: 2 }, { row: 6, col: 2, number: 2 }, { row: 6, col: 3, number: 1 }, { row: 6, col: 4, number: 1 }, { row: 6, col: 5, number: 4 }, 
    // Continuation of 2x4 block (rows 5-6, cols 6-9)
    { row: 6, col: 6, number: 2 }, { row: 6, col: 7, number: 2 }, { row: 6, col: 8, number: 4 }, { row: 6, col: 9, number: 2 }, 
    { row: 6, col: 10, number: 1 }, { row: 6, col: 11, number: 1 }, { row: 6, col: 12, number: 2 }, { row: 6, col: 13, number: 2 }, { row: 6, col: 14, number: 1 },
    
    // Row 7 - eyes
    { row: 7, col: 0, number: 1 }, { row: 7, col: 1, number: 2 }, { row: 7, col: 2, number: 1 }, { row: 7, col: 3, number: 3 }, { row: 7, col: 4, number: 1 }, { row: 7, col: 5, number: 4}, { row: 7, col: 6, number: 2 }, { row: 7, col: 7, number: 2 }, { row: 7, col: 8, number: 2 }, { row: 7, col: 9, number: 2 }, { row: 7, col: 10, number: 1 }, { row: 7, col: 11, number: 3 }, { row: 7, col: 12, number: 1 }, { row: 7, col: 13, number: 2 }, { row: 7, col: 14, number: 1 },
    
    // Row 8 - under eyes  
    { row: 8, col: 0, number: 1 }, { row: 8, col: 1, number: 2 }, { row: 8, col: 2, number: 2 }, { row: 8, col: 3, number: 1 }, { row: 8, col: 4, number: 1 }, { row: 8, col: 5, number: 4 }, { row: 8, col: 6, number: 2 }, { row: 8, col: 7, number: 2 }, { row: 8, col: 8, number: 2 }, { row: 8, col: 9, number: 4 }, { row: 8, col: 10, number: 1 }, { row: 8, col: 11, number: 1 }, { row: 8, col: 12, number: 2 }, { row: 8, col: 13, number: 2 }, { row: 8, col: 14, number: 1 },
    
    // Row 9 - nose area
    { row: 9, col: 0, number: 1 }, { row: 9, col: 1, number: 2 }, { row: 9, col: 2, number: 2 }, { row: 9, col: 3, number: 2 }, { row: 9, col: 4, number: 4 }, { row: 9, col: 5, number: 2 }, { row: 9, col: 6, number: 2 }, { row: 9, col: 7, number: 3 }, { row: 9, col: 8, number: 4 }, { row: 9, col: 9, number: 2 }, { row: 9, col: 10, number: 2 }, { row: 9, col: 11, number: 4 }, { row: 9, col: 12, number: 2 }, { row: 9, col: 13, number: 2 }, { row: 9, col: 14, number: 1 },
    
    // Row 10 - mouth
    { row: 10, col: 0, number: 1 }, { row: 10, col: 1, number: 2 }, { row: 10, col: 2, number: 2 }, { row: 10, col: 3, number: 4 }, { row: 10, col: 4, number: 4 }, { row: 10, col: 5, number: 2 }, { row: 10, col: 6, number: 3 }, { row: 10, col: 7, number: 3 }, { row: 10, col: 8, number: 3 }, { row: 10, col: 9, number: 2 }, { row: 10, col: 10, number: 2 }, { row: 10, col: 11, number: 2 }, { row: 10, col: 12, number: 2 }, { row: 10, col: 13, number: 2 }, { row: 10, col: 14, number: 1 },
    
    // Row 11-13 - bottom with 2x4 block
    { row: 11, col: 0, number: 1 }, { row: 11, col: 1, number: 2 }, { row: 11, col: 2, number: 2 }, { row: 11, col: 3, number: 4 }, { row: 11, col: 4, number: 4 }, 
    // 2x4 block (rows 11-12, cols 5-8) - gray body
    { row: 11, col: 5, number: 2 }, { row: 11, col: 6, number: 2 }, { row: 11, col: 7, number: 2 }, { row: 11, col: 8, number: 2 }, 
    { row: 11, col: 9, number: 2 }, { row: 11, col: 10, number: 2 }, { row: 11, col: 11, number: 2 }, { row: 11, col: 12, number: 2 }, { row: 11, col: 13, number: 2 }, { row: 11, col: 14, number: 1 },
    
    { row: 12, col: 1, number: 1 }, { row: 12, col: 2, number: 2 }, { row: 12, col: 3, number: 2 }, { row: 12, col: 4, number: 2 }, 
    // Continuation of 2x4 block (rows 11-12, cols 5-8)
    { row: 12, col: 5, number: 2 }, { row: 12, col: 6, number: 2 }, { row: 12, col: 7, number: 4 }, { row: 12, col: 8, number: 2 }, 
    { row: 12, col: 9, number: 2 }, { row: 12, col: 10, number: 2 }, { row: 12, col: 11, number: 2 }, { row: 12, col: 12, number: 2 }, { row: 12, col: 13, number: 1 },
    
    { row: 13, col: 2, number: 1 }, { row: 13, col: 3, number: 1 }, { row: 13, col: 4, number: 1 }, { row: 13, col: 5, number: 1 }, { row: 13, col: 6, number: 1 }, { row: 13, col: 7, number: 1 }, { row: 13, col: 8, number: 1 }, { row: 13, col: 9, number: 1 }, { row: 13, col: 10, number: 1 }, { row: 13, col: 11, number: 1 }, { row: 13, col: 12, number: 1 }
  ]

  const handlePixelClick = (row, col, expectedNumber) => {
    if (selectedColor === expectedNumber) {
      const key = `${row}-${col}`
      setPixelColors(prev => ({
        ...prev,
        [key]: colorPalette[expectedNumber]
      }))
    }
  }

  const handleColorSelect = (colorNumber) => {
    setSelectedColor(colorNumber)
  }

  return (
    <div className="pixel-art-container pixel-art-container-yellow">
      {/* Canvas Grid */}
      <div className="pixel-canvas pixel-canvas-yellow">
        <div className="pixel-grid-cat">
          {Array.from({ length: 16 }, (_, row) =>
            Array.from({ length: 16 }, (_, col) => {
              const pixel = catPattern.find(p => p.row === row && p.col === col)
              const key = `${row}-${col}`
              const isColored = pixelColors[key]
              
              return (
                <div
                  key={key}
                  className={`pixel ${pixel ? 'pixel-active' : ''} ${isColored ? 'pixel-filled' : ''}`}
                  style={{
                    backgroundColor: isColored || 'transparent',
                    border: pixel ? 'none' : 'none'
                  }}
                  onClick={() => pixel && handlePixelClick(row, col, pixel.number)}
                >
                  {pixel && !isColored && (
                    <span className="pixel-number">{pixel.number}</span>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Color Palette */}
      <div className="color-palette color-palette-yellow">
        {Object.entries(colorPalette).map(([number, color]) => (
          <div
            key={number}
            className={`color-square ${selectedColor == number ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(parseInt(number))}
          >
            <span className="color-number">{number}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PixelArtCanvasCat
