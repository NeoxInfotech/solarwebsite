import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="f-1">
                <div className="detail">
                    <h3>Company name</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque delectus necessitatibus nesciunt voluptatum consectetur illum doloribus eum modi corporis cumque, ut, aspernatur possimus ullam.</span>
                </div>
                <div className="links">
                    <Link className='link'>Home</Link>
                    <Link className='link'>Home</Link>
                    <Link className='link'>Home</Link>
                </div>
                <div className="contact-details">
                    <h4>Nameofperson</h4>
                    <h4>Contact No - 800000000</h4>
                    <h4>Email - Nameofperson@gmail.com</h4>
                    <h4>Address, District, State, 12345</h4>
                </div>
            </div>
            <div className="f-2">
                <h4>Designed and developed by NeoxInfotech © All Copyright reserved 2024</h4>
            </div>
        </div>
    )
}

export default Footer
