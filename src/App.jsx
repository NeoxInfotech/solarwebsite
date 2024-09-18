import React from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
