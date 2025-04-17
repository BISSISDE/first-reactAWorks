import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import NameSaver from './Takyriptar/AdvancedUseReduserHomework.jsx'
import App from "./CombiningUseRedUseContHomework";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <NameSaver/> */}
    <App/>
  </StrictMode>
)
