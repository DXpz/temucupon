import { useState } from 'react'
import './PixelArtCanvas.css'

function PixelArtTulip2() {
  // Color palette with numbers (tulip colors)
  const colorPalette = {
    1: '#006400', // Verde oscuro
    2: '#32CD32', // Verde claro  
    3: '#EA2E2E', // Amarillo
    4: '#B60000'  // Naranja
  }

  const [selectedColor, setSelectedColor] = useState(1)
  const [pixelColors, setPixelColors] = useState({})

  // Tulip 2 pattern - adjusted for standalone display (shifted to start from column 0)
  const tulip2Pattern = [
    // Top tulip head (row 0-3) - adjusted to start from column 0
    { row: 0, col: 4, number: 4 },
    { row: 0, col: 6, number: 4 },
    { row: 1, col: 3, number: 3 }, { row: 1, col: 4, number: 4 }, { row: 1, col: 5, number: 3 },
    { row: 1, col: 6, number: 4 }, { row: 1, col: 7, number: 3 },
    { row: 2, col: 3, number: 3 }, { row: 2, col: 4, number: 4 }, { row: 2, col: 5, number: 3 },
    { row: 2, col: 6, number: 4 }, { row: 2, col: 7, number: 3 },
    { row: 3, col: 5, number: 3 },
    { row: 3, col: 6, number: 3 },
    { row: 3, col: 4, number: 3 },
    { row: 3, col: 3, number: 4 },
    { row: 3, col: 7, number: 4 },
    { row: 4, col: 6, number: 3 },
    { row: 4, col: 4, number: 3 },
    
    // Upper stem (row 4-8)
    { row: 4, col: 5, number: 1 },
    { row: 5, col: 5, number: 1 },
    { row: 6, col: 5, number: 1 },
    { row: 7, col: 5, number: 1 },
    { row: 8, col: 5, number: 1 },
    
    // Left branch section (row 9-15) - adjusted
    { row: 9, col: 1, number: 2 },
    { row: 10, col: 1, number: 2 }, { row: 10, col: 2, number: 2 },
    { row: 11, col: 1, number: 2 }, { row: 11, col: 2, number: 1},
    { row: 12, col: 1, number: 1 }, { row: 12, col: 2, number: 2 },
    { row: 13, col: 1, number: 1 }, { row: 13, col: 2, number: 2 },
    { row: 14, col: 1, number: 2 }, { row: 14, col: 2, number: 1 },
    { row: 15, col: 1, number: 1 }, { row: 15, col: 2, number: 2 },
    { row: 15, col: 1, number: 2 }, { row: 15, col: 3, number: 1 },
    { row: 15, col: 1, number: 1 }, { row: 14, col: 3, number: 2 },
    { row: 15, col: 1, number: 2 }, { row: 13, col: 3, number: 2 },
    { row: 15, col: 1, number: 1 }, { row: 12, col: 3, number: 2 },
    { row: 15, col: 1, number: 1 }, { row: 15, col: 4, number: 1 }, 
    { row: 15, col: 0, number: 2 }, 
    
    // Right branch section (row 9-15) - adjusted
    { row: 9, col: 9, number: 1 },
    { row: 10, col: 8, number: 2 }, { row: 10, col: 9, number: 2 },
    { row: 11, col: 8, number: 2 }, { row: 11, col: 9, number: 2 },
    { row: 12, col: 8, number: 1 }, { row: 12, col: 9, number: 1 },
    { row: 13, col: 8, number: 2 }, { row: 13, col: 9, number: 2 },
    { row: 14, col: 8, number: 1 }, { row: 14, col: 9, number: 1 },
    { row: 15, col: 8, number: 2 }, { row: 15, col: 9, number: 1 },
    { row: 15, col: 8, number: 2 }, { row: 15, col: 7, number: 2 }, 
    { row: 15, col: 8, number: 1}, { row: 14, col: 7, number: 1 },
    { row: 15, col: 8, number: 2 }, { row: 13, col: 7, number: 1 },
    { row: 15, col: 10, number: 1 }, { row: 14, col: 10, number: 1 },
    { row: 13, col: 10, number: 1 }, { row: 12, col: 10, number: 1 },

    // Main stem continuation (row 9-23)
    { row: 9, col: 5, number: 1 },
    { row: 10, col: 5, number: 1 },
    { row: 11, col: 5, number: 1 },
    { row: 12, col: 5, number: 1 },
    { row: 13, col: 5, number: 1 },
    { row: 14, col: 5, number: 1 },
    { row: 15, col: 5, number: 1 },
    
    // Wide base section (row 16-23) - adjusted
    { row: 16, col: 0, number: 1 }, { row: 16, col: 1, number: 2 }, { row: 16, col: 2, number: 1 },
    { row: 16, col: 3, number: 2 }, { row: 16, col: 4, number: 1 }, { row: 16, col: 5, number: 1 },
    { row: 16, col: 6, number: 2 }, { row: 16, col: 7, number: 1 }, { row: 16, col: 8, number: 2 },
    { row: 16, col: 9, number: 1 }, { row: 16, col: 10, number: 2 },
    
    { row: 17, col: 0, number: 1 }, { row: 17, col: 1, number: 2 }, { row: 17, col: 2, number: 1 },
    { row: 17, col: 3, number: 2 }, { row: 17, col: 4, number: 2 }, { row: 17, col: 5, number: 1 },
    { row: 17, col: 6, number: 1 }, { row: 17, col: 7, number: 1 }, { row: 17, col: 8, number: 2 },
    { row: 17, col: 9, number: 1 }, { row: 17, col: 10, number: 2 }, 
    
    { row: 18, col: 1, number: 1 }, { row: 18, col: 2, number: 2 }, { row: 18, col: 3, number: 1 },
    { row: 18, col: 4, number: 2 }, { row: 18, col: 5, number: 1 }, { row: 18, col: 6, number: 1 },
    { row: 18, col: 7, number: 2 }, { row: 18, col: 8, number: 2 }, { row: 18, col: 9, number: 2 },
    
    { row: 19, col: 2, number: 1 }, { row: 19, col: 3, number: 1 }, { row: 19, col: 4, number: 1 },
    { row: 19, col: 5, number: 1 }, { row: 19, col: 6, number: 1 }, { row: 19, col: 7, number: 1 },
    { row: 19, col: 8, number: 2 }, { row: 20, col: 8, number: 1 },
    
    { row: 20, col: 3, number: 1 }, { row: 20, col: 4, number: 1}, { row: 20, col: 5, number: 1 },
    { row: 20, col: 6, number: 2 }, { row: 20, col: 7, number: 2 },
    
    { row: 21, col: 4, number: 1 }, { row: 21, col: 5, number: 1 }, { row: 21, col: 6, number: 2 },
    
    { row: 22, col: 5, number: 1 },
    
    { row: 23, col: 5, number: 1 }
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
        <div className="pixel-grid-tulip">
          {Array.from({ length: 24 }, (_, row) =>
            Array.from({ length: 11 }, (_, col) => {
              const pixel = tulip2Pattern.find(p => p.row === row && p.col === col)
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

export default PixelArtTulip2
