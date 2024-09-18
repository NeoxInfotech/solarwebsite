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
    return (
        <div className='header'>
            <div className="desk-header">
                <div className="logo">
                    <img src={solarlogo} alt="" className='logo-img' />
                    <h2>Company Name</h2>
                </div>
                <div className="head-links">
                    <div className="contact">
                        <h4><IoMailSharp className='c-mail' />yourgmail@gmail.com</h4>
                        <h4><FaPhone className='c-phone' /> 91 800451234</h4>
                    </div>
                    <div className="links">
                        <Link className='link' to={"/"}>HOME</Link>
                        <Link className='link'>ABOUT</Link>
                        <Link className='link'>SERVICES</Link>
                        <Link className='link'>CONTACT</Link>
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
