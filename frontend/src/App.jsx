import { useState } from 'react'
import './App.css'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {

  // Controls which page is currently displayed
  const [page, setPage] = useState('login')


  // =========================
  // LOGIN PAGE
  // =========================

  if (page === 'login') {

    return (
      <Login
        onRegister={() => setPage('register')}
        onLogin={() => setPage('home')}
      />
    )

  }


  // =========================
  // REGISTER PAGE
  // =========================

  if (page === 'register') {

    return (
      <Register
        onLogin={() => setPage('login')}
        onRegister={() => setPage('home')}
      />
    )

  }


  // =========================
  // HOME PAGE
  // =========================

  if (page === 'home') {

    return (
      <Home />
    )

  }


  // Fallback
  return null
}

export default App