import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/app/app'
import './index.css'


if (!import.meta.env.DEV) {
  console.log = () => { };
  console.debug = () => { };
  console.warn = () => { };
  console.error = () => { };
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

