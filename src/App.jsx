import React from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Footer from './components/footer/Footer'
import About from './screens/about/About'
import Services from './screens/services/Services'
import Contact from './screens/contact/Contact'
import Blog from './screens/blogs/Blog'
import SingleBlog from './screens/singleblog/SingleBlog'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
