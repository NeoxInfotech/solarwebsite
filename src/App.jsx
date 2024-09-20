import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Footer from './components/footer/Footer'
import About from './screens/about/About'
import Services from './screens/services/Services'
import Contact from './screens/contact/Contact'
import Blog from './screens/blogs/Blog'
import SingleBlog from './screens/singleblog/SingleBlog'
import Loading from './components/loader/Loading'

const App = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  }, [])
  return (
    <>
      {
        loader ? <Loading /> : <div>
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
        </div>
      }

    </>
  )
}

export default App
