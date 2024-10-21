import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import reactdom from 'react-dom/client'

reactdom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>    
  </StrictMode>,
)
