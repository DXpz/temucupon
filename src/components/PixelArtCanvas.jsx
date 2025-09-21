import { useState } from 'react'
import './PixelArtCanvas.css'

function PixelArtCanvas() {
  // Color palette with numbers
  const colorPalette = {
    1: '#006400', // Verde oscuro
    2: '#32CD32', // Verde claro  
    3: '#EFE81D', // Amarillo
    4: '#E18F20'  // Naranja
  }

  const [selectedColor, setSelectedColor] = useState(1)
  const [pixelColors, setPixelColors] = useState({})

  // Two tulip patterns - duplicating the original complete tulip structure
  const tulipPatterns = {
    // Tulip 1 (left side)
    tulip1: [
      // Top tulip head (row 0-3)
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
      
      // Left branch section (row 9-15)
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
      
      
      // Right branch section (row 9-15)
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
      
      // Wide base section (row 16-23)
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
    ],

    // Tulip 2 (right side) - same pattern but shifted right by 15 columns
    tulip2: [
      // Top tulip head (row 0-3) - shifted 15 columns to the right
      { row: 0, col: 19, number: 4 },
      { row: 0, col: 21, number: 4 },
      { row: 1, col: 18, number: 3 }, { row: 1, col: 19, number: 4 }, { row: 1, col: 20, number: 3 },
      { row: 1, col: 21, number: 4 }, { row: 1, col: 22, number: 3 },
      { row: 2, col: 18, number: 3 }, { row: 2, col: 19, number: 4 }, { row: 2, col: 20, number: 3 },
      { row: 2, col: 21, number: 4 }, { row: 2, col: 22, number: 3 },
      { row: 3, col: 20, number: 3 },
      { row: 3, col: 21, number: 3 },
      { row: 3, col: 19, number: 3 },
      { row: 3, col: 18, number: 4 },
      { row: 3, col: 22, number: 4 },
      { row: 4, col: 21, number: 3 },
      { row: 4, col: 19, number: 3 },
      
      
      // Upper stem (row 4-8)
      { row: 4, col: 20, number: 1 },
      { row: 5, col: 20, number: 1 },
      { row: 6, col: 20, number: 1 },
      { row: 7, col: 20, number: 1 },
      { row: 8, col: 20, number: 1 },
      
      // Left branch section (row 9-15) - shifted 15 columns
      { row: 9, col: 16, number: 2 },
      { row: 10, col: 16, number: 2 }, { row: 10, col: 17, number: 2 },
      { row: 11, col: 16, number: 2 }, { row: 11, col: 17, number: 1},
      { row: 12, col: 16, number: 1 }, { row: 12, col: 17, number: 2 },
      { row: 13, col: 16, number: 1 }, { row: 13, col: 17, number: 2 },
      { row: 14, col: 16, number: 2 }, { row: 14, col: 17, number: 1 },
      { row: 15, col: 16, number: 1 }, { row: 15, col: 17, number: 2 },
      { row: 15, col: 16, number: 2 }, { row: 15, col: 18, number: 1 },
      { row: 15, col: 16, number: 1 }, { row: 14, col: 18, number: 2 },
      { row: 15, col: 16, number: 2 }, { row: 13, col: 18, number: 2 },
      { row: 15, col: 16, number: 1 }, { row: 12, col: 18, number: 2 },
      { row: 15, col: 16, number: 1 }, { row: 15, col: 19, number: 1 }, 
      { row: 15, col: 15, number: 2 }, 
      
      
      // Right branch section (row 9-15) - shifted 15 columns
      { row: 9, col: 24, number: 1 },
      { row: 10, col: 23, number: 2 }, { row: 10, col: 24, number: 2 },
      { row: 11, col: 23, number: 2 }, { row: 11, col: 24, number: 2 },
      { row: 12, col: 23, number: 1 }, { row: 12, col: 24, number: 1 },
      { row: 13, col: 23, number: 2 }, { row: 13, col: 24, number: 2 },
      { row: 14, col: 23, number: 1 }, { row: 14, col: 24, number: 1 },
      { row: 15, col: 23, number: 2 }, { row: 15, col: 24, number: 1 },
      { row: 15, col: 23, number: 2 }, { row: 15, col: 22, number: 2 }, 
      { row: 15, col: 23, number: 1}, { row: 14, col: 22, number: 1 },
      { row: 15, col: 23, number: 2 }, { row: 13, col: 22, number: 1 },
      { row: 15, col: 25, number: 1 }, { row: 14, col: 25, number: 1 },
      { row: 13, col: 25, number: 1 }, { row: 12, col: 25, number: 1 },

      // Main stem continuation (row 9-23)
      { row: 9, col: 20, number: 1 },
      { row: 10, col: 20, number: 1 },
      { row: 11, col: 20, number: 1 },
      { row: 12, col: 20, number: 1 },
      { row: 13, col: 20, number: 1 },
      { row: 14, col: 20, number: 1 },
      { row: 15, col: 20, number: 1 },
      
      // Wide base section (row 16-23) - shifted 15 columns
      { row: 16, col: 15, number: 1 }, { row: 16, col: 16, number: 2 }, { row: 16, col: 17, number: 1 },
      { row: 16, col: 18, number: 2 }, { row: 16, col: 19, number: 1 }, { row: 16, col: 20, number: 1 },
      { row: 16, col: 21, number: 2 }, { row: 16, col: 22, number: 1 }, { row: 16, col: 23, number: 2 },
      { row: 16, col: 24, number: 1 }, { row: 16, col: 25, number: 2 },
      
      { row: 17, col: 15, number: 1 }, { row: 17, col: 16, number: 2 }, { row: 17, col: 17, number: 1 },
      { row: 17, col: 18, number: 2 }, { row: 17, col: 19, number: 2 }, { row: 17, col: 20, number: 1 },
      { row: 17, col: 21, number: 1 }, { row: 17, col: 22, number: 1 }, { row: 17, col: 23, number: 2 },
      { row: 17, col: 24, number: 1 }, { row: 17, col: 25, number: 2 }, 
      
      { row: 18, col: 16, number: 1 }, { row: 18, col: 17, number: 2 }, { row: 18, col: 18, number: 1 },
      { row: 18, col: 19, number: 2 }, { row: 18, col: 20, number: 1 }, { row: 18, col: 21, number: 1 },
      { row: 18, col: 22, number: 2 }, { row: 18, col: 23, number: 2 }, { row: 18, col: 24, number: 2 },
      
      { row: 19, col: 17, number: 1 }, { row: 19, col: 18, number: 1 }, { row: 19, col: 19, number: 1 },
      { row: 19, col: 20, number: 1 }, { row: 19, col: 21, number: 1 }, { row: 19, col: 22, number: 1 },
      { row: 19, col: 23, number: 2 }, { row: 20, col: 23, number: 1 },
      
      { row: 20, col: 18, number: 1 }, { row: 20, col: 19, number: 1}, { row: 20, col: 20, number: 1 },
      { row: 20, col: 21, number: 2 }, { row: 20, col: 22, number: 2 },
      
      { row: 21, col: 19, number: 1 }, { row: 21, col: 20, number: 1 }, { row: 21, col: 21, number: 2 },
      
      { row: 22, col: 20, number: 1 },
      
      { row: 23, col: 20, number: 1 }
    ],
  }

  // Combine both tulip patterns
  const allPixels = [
    ...tulipPatterns.tulip1,
    ...tulipPatterns.tulip2
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
    <div className="pixel-art-container">
      {/* Canvas Grid */}
      <div className="pixel-canvas">
        <div className="pixel-grid">
          {Array.from({ length: 24 }, (_, row) =>
            Array.from({ length: 26 }, (_, col) => {
              const pixel = allPixels.find(p => p.row === row && p.col === col)
              const key = `${row}-${col}`
              const isColored = pixelColors[key]
              
              return (
                <div
                  key={key}
                  className={`pixel ${pixel ? 'pixel-active' : ''} ${isColored ? 'pixel-filled' : ''}`}
                  style={{
                    backgroundColor: isColored || 'transparent',
                    border: pixel ? '1px solid #333' : '1px solid transparent'
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
      <div className="color-palette">
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

export default PixelArtCanvas
