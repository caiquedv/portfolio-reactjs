import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
)
