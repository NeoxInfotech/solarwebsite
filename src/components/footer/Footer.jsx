import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
    const linkClicks = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='footer'>
            <div className="f-1">
                <div className="detail">
                    <h3>Sri Sri Hareshwar Machinery Limited</h3>
                    <span>As pioneers in the solar energy industry, Sri Sri Hareshwar Machinery Limited has been delivering high-quality, energy-efficient solar solutions for years. We specialize in providing tailored solar energy systems that meet the demands of both domestic and industrial sectors.</span>
                </div>
                <div className="links">
                    <Link className='link' to={"/"} onClick={linkClicks}>Home</Link>
                    <Link className='link' to={"/about"} onClick={linkClicks}>About</Link>
                    <Link className='link' to={"/services"} onClick={linkClicks}>Services</Link>
                </div>
                <div className="contact-details">
                    <h4>SSHM</h4>
                    <h4>Contact No - 7003813055</h4>
                    <h4>Alt Contact No - 9735003739</h4>
                    <h4>Email - rajpratip99@gmail.com</h4>
                    <h4>110 Madhyapara Deulpur, Panchla, Howrah -711411</h4>
                </div>
            </div>
            <div className="f-2">
                <h4>Designed and developed by <a href="https://neoxinfotech.com/">NeoxInfotech</a>  © All Copyright reserved 2024</h4>
            </div>
        </div>
    )
}

export default Footer
