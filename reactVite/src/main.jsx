import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <App name="Raja"/>
  <App name="Raj"/>
  </>
  // will will have to use <></> these
)
