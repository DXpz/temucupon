import { useState } from 'react'
import Login from './components/Login'
import HomeType1 from './components/HomeType1'
import HomeType2 from './components/HomeType2'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('login')
  const [homeType, setHomeType] = useState(null)

  const handleLogin = (code) => {
    // Define which codes lead to which home type
    if (code === 'TEMUCUPONMEL' || code === 'amarillo1') {
      setHomeType('type1')
      setCurrentView('home')
    } else if (code === 'TEMUCUPONSAR' || code === 'amarillo2') {
      setHomeType('type2')
      setCurrentView('home')
    } else {
      alert('Código incorrecto')
    }
  }

  const handleLogout = () => {
    setCurrentView('login')
    setHomeType(null)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <Login onLogin={handleLogin} />
      case 'home':
        return homeType === 'type1' ? 
          <HomeType1 onLogout={handleLogout} /> : 
          <HomeType2 onLogout={handleLogout} />
      default:
        return <Login onLogin={handleLogin} />
    }
  }

  return (
    <div className="app">
      {renderCurrentView()}
    </div>
  )
}

export default App
