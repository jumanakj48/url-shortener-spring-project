import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AboutPage from './Components/AboutPage'
import Navbar from './Components/NavBar'
import RegisterPage from './Components/RegisterPage'
import Login from './Components/Login'
import { ToastBar, Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Toaster position='bottom-center'/>
        <Routes>
          <Route path = '/' element = {<LandingPage />}/>
          <Route path = '/about' element = {<AboutPage />}/>
          <Route path = '/register' element = {<RegisterPage />}/>
          <Route path = '/login' element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App