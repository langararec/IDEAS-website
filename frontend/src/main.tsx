import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FormspreeProvider } from '@formspree/react'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const CHUNK_RELOAD_KEY = 'chunk-reload-at'
const CHUNK_RELOAD_COOLDOWN_MS = 10_000

window.addEventListener('vite:preloadError', (event) => {
  const lastReload = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY))
  if (Date.now() - lastReload < CHUNK_RELOAD_COOLDOWN_MS) return
  event.preventDefault()
  sessionStorage.setItem(CHUNK_RELOAD_KEY, String(Date.now()))
  window.location.reload()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormspreeProvider project="2769235073248001641">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </FormspreeProvider>
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)
