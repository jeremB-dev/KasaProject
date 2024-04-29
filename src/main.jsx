import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './assets/sass/app.scss'
import './assets/sass/header.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
