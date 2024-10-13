import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MIDIProvider } from 'react-midi-context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MIDIProvider onError={console.error}>
      <App />
    </MIDIProvider>
  </StrictMode>,
)
