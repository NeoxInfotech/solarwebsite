import React from 'react'
import "./styles.scss"
import watermark from "../../images/about-watermark.png"
import about2 from "../../images/about2.jpg"
import about3 from "../../images/about-img.jpg"
import ChatCard from '../../components/cards/chatCard/ChatCard'

const About = () => {
    return (
        <div className='about'>
            <ChatCard />
            <div className="intro">
                <img src={watermark} alt="" className='watermark' />
                <h1>About Us</h1>
                <p>As a leader in solar manufacturing and supply, we are dedicated to providing efficient and innovative solar energy systems for homes and industries.</p>
            </div>
            <div className="sec1">
                <div className="left">
                    <div className="head">
                        <span>what we do</span>
                        <h2>Our Introduction</h2>
                    </div>
                    <p>At Sri Sri Hareshwar Machinery Limited, we believe in the transformative power of solar energy. As one of the leading solar manufacturing and supply companies, we are committed to making renewable energy accessible to everyone. Whether you need a small system for your home or a large-scale industrial installation, we have the expertise, resources, and dedication to provide sustainable energy solutions that meet your unique needs. Our journey is powered by innovation, and our goal is to help our clients transition to a cleaner, greener future.</p>
                    <button>View More</button>
                </div>
                <div className="right">
                    <img src={about2} alt="" className='bg' />
                </div>
            </div>

            <div className="sec1">
                <div className="left">
                    <img src={about3} alt="" className='bg' />
                </div>
                <div className="right-rev">

                    <div className="head">
                        <span>our professionalism</span>
                        <h2>Our Experience</h2>
                    </div>
                    <p>With over 10 Years of experience, Sri Sri Hareshwar Machinery Limited has been at the forefront of the solar industry, providing cutting-edge solutions that meet the growing demand for renewable energy. Our team of experts is dedicated to delivering top-notch services, from system design and installation to aftercare and support, ensuring that our customers receive the best possible energy solutions.</p>
                    <button>View More</button>
                </div>
            </div>
        </div>
    )
}

export default About
