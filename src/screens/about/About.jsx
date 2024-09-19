import React from 'react'
import "./styles.scss"
import watermark from "../../images/about-watermark.png"
import about2 from "../../images/about2.jpg"
import about3 from "../../images/about-img.jpg"

const About = () => {
    return (
        <div className='about'>
            <div className="intro">
                <img src={watermark} alt="" className='watermark' />
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim non ipsam mollitia, alias tempora rerum quo quae eos dolore odit aliquid, minima aliquam adipisci ratione optio eius cupiditate cum perferendis.</p>
            </div>
            <div className="sec1">
                <div className="left">
                    <div className="head">
                        <span>what we do</span>
                        <h2>Our Introduction</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti nobis quidem, nemo iste quam unde sint id accusantium consequatur voluptates neque asperiores! Harum maiores sunt, soluta autem asperiores voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sapiente error, provident est nesciunt eum atque suscipit explicabo nobis ipsam, deserunt impedit. Modi quod veritatis alias repellendus mollitia iure dolorum.</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti nobis quidem, nemo iste quam unde sint id accusantium consequatur voluptates neque asperiores! Harum maiores sunt, soluta autem asperiores voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sapiente error, provident est nesciunt eum atque suscipit explicabo nobis ipsam, deserunt impedit. Modi quod veritatis alias repellendus mollitia iure dolorum.</p>
                    <button>View More</button>
                </div>
            </div>
        </div>
    )
}

export default About
