import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutsApp from './RoutsApp.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <RoutsApp />
    </BrowserRouter>
  </React.StrictMode>,
)
