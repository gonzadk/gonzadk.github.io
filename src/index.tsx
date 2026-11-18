import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppComponent } from './app'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>
)
