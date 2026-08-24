import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import context from './context.jsx'

createRoot(document.getElementById('root')).render(

<StrictMode>
  <BrowserRouter>
    <context>
    <App />
  </context>
  </BrowserRouter>
</StrictMode>
)
