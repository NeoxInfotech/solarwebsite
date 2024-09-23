import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Menu = ({ setShowMenu }) => {
    const linkClicks = () => {
        setShowMenu(false)
        window.scrollTo(0, 0)
    }
    return (
        <div className="mobile-header">
            <Link className='link' to={"/"} onClick={linkClicks}>HOME</Link>
            <Link className='link' to={"/about"} onClick={linkClicks}>ABOUT</Link>
            <Link className='link' to={"/services"} onClick={linkClicks}>SERVICES</Link>
            <Link className='link' to={"/blogs"} onClick={linkClicks}>BLOGS</Link>
            <Link className='link' to={"/loadcalculator"} onClick={linkClicks}>LOAD CALCULATOR</Link>
            <Link className='link' to={"/contact"} onClick={linkClicks}>CONTACT</Link>
            <h4><IoMailSharp className='c-mail' />rajpratip99@gmail.com</h4>
            <h4><FaPhone className='c-phone' /> +91 7003813055</h4>
            <button>Get a quote</button>

        </div>
    )
}

export default Menu
