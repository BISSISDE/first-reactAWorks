import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from "./App.tsx";
// import App from './Exam2.tsx';
import App from './AppTwo.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Director/> */}
    {/* <Login /> */}
  </StrictMode>
)
