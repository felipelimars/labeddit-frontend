import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import App from './App'
import { LoginFormProvider } from './contexts/LoginFormContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)