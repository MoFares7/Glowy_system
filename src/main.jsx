import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './core/error.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter>, */}
    </ErrorBoundary>
  </StrictMode>,
)
