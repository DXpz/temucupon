import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [code, setCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.trim()) {
      onLogin(code.trim())
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="code" className="form-label">
              INGRESA EL CÓDIGO
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="form-input"
              placeholder="Código..."
              autoFocus
            />
          </div>
          <button type="submit" className="login-button">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
