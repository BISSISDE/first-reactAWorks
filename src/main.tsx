import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import NameSaver from './Takyriptar/AdvancedUseReduserHomework.jsx'
// import App from "./Takyriptar/CombiningUseRedUseContHomework";
import App from './TODOAPP'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <NameSaver/> */}
    {/* <App/> */}
    <App />
  </StrictMode>
)
