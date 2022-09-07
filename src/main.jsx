import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from './assets/app/App'
import { AuthProvider } from './providers/auth'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>
)
