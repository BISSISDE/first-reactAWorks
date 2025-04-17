import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NameSaver from './AdvancedUseReduserHomework.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NameSaver/>
    {/* <App /> */}
    {/* <Director/> */}
    {/* <Login /> */}
  </StrictMode>
)
