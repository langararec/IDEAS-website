import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FormspreeProvider } from '@formspree/react'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormspreeProvider project="2769235073248001641">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </FormspreeProvider>
    <Analytics />
  </StrictMode>,
)
