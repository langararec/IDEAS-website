import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FormspreeProvider } from '@formspree/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormspreeProvider project="2769235073248001641">
      <App />
    </FormspreeProvider>
  </StrictMode>,
)
