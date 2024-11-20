import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BankingContextProvider from './context/context.js'

createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* <BankingContextProvider> */}
         <App />
      {/* </BankingContextProvider> */}
   </StrictMode>,
)
