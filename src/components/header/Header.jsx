import React, { useState } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import solarlogo from "../../images/solarlogo.png"
import { RxHamburgerMenu } from 'react-icons/rx'
import Menu from './Menu'
import { RxCross1 } from "react-icons/rx";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Header = () => {
    const [showmenu, setShowMenu] = useState(false)
    const linkClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='header'>
            <div className="desk-header">
                <div className="logo">
                    <img src={solarlogo} alt="" className='logo-img' />
                    <div className='c-name'>
                        <h2>SSHM</h2>
                        <span>Sri Sri Hareshwar Machinery Limited</span>
                    </div>
                </div>
                <div className="head-links">
                    <div className="contact">
                        <h4><IoMailSharp className='c-mail' />rajpratip99@gmail.com</h4>
                        <h4><FaPhone className='c-phone' /> 7003813055</h4>
                        <button>Get a quote</button>
                    </div>
                    <div className="links">
                        <Link className='link' to={"/"} onClick={linkClick}>HOME</Link>
                        <Link className='link' to={"/about"} onClick={linkClick}>ABOUT</Link>
                        <Link className='link' to={"/services"} onClick={linkClick}>SERVICES</Link>
                        <Link className='link' to={"/blogs"} onClick={linkClick}>BLOGS</Link>
                        <Link className='link' to={"/contact"} onClick={linkClick}>CONTACT</Link>
                    </div>
                </div>
                <div className="menu">
                    {!showmenu ? <RxHamburgerMenu onClick={() => setShowMenu(!showmenu)} /> : <RxCross1 onClick={() => setShowMenu(false)} />}
                </div>
            </div>
            {showmenu ? <Menu setShowMenu={setShowMenu} /> : null}
        </div>
    )
}

export default Header
