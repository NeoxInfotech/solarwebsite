import React from 'react'
import "./styles.scss"
import downarrow from "../../images/downarrow.png"
import aboutimg from "../../images/about-img.jpg"
import vid from "../../images/vid1.mp4"
import Homecard from '../../components/cards/HomeCard/Homecard'
import { cards, cards2 } from '../../data/data'
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ChatCard from '../../components/cards/chatCard/ChatCard'



const Home = () => {
    return (
        <div className='home'>
            <div className="socials">
                <div className="iconwrap">
                    <a href=""> <IoLogoWhatsapp className='icons' id='whatsapp' /></a>

                </div>
                <div className="iconwrap">
                    <a href=""><FaFacebook className='icons' id='whatsapp' /></a>

                </div>
                <div className="iconwrap">
                    <a href=""><MdEmail className='icons' id='whatsapp' /></a>

                </div>

            </div>
            <ChatCard />
            <div className="hero">
                <motion.h1 initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>Improving Solar  Energy <br /> Products</motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis excepturi animi voluptate facere. Autem quisquam earum aut, numquam aperiam consequuntur ipsum! Consectetur, laborum distinctio.</motion.p>
                <button>Explore Now</button>
                <img src={downarrow} alt="" className='down-arrow' />
            </div>
            <div className="home-cards">
                {
                    cards.map((data) => (
                        <Homecard data={data} key={data.id} />
                    ))
                }
            </div>
            <div className="about">
                <motion.h1 initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>HEADING OF SECOND SCETION, ABOUT US</motion.h1>
                <motion.h4 initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}>SUB-HEADING OF SECOND SCETION, ABOUT US</motion.h4>
                <motion.div initial={{ opacity: 0, rotateY: 90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1 }} className="about-box">
                    <div className="left">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .simply dummy text of the printing and typesetting industry. </p>
                        <div className="know-more">
                            <h2>Know More</h2>
                            <GoArrowRight className='arrow-right' />
                        </div>
                    </div>
                    <div className="right">
                        <img src={aboutimg} alt="" className='img' />
                    </div>
                </motion.div>
            </div>
            <div className="services">
                <h1>HEADING OF THIRD SECTION, CONSULT</h1>
                <div className="sub-head">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae cum fugit, odio enim nihil quae. Id, odio.</h4>
                    <div className="sub-butts">
                        <button>Learn More</button>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="cards">
                    {cards2.map((data) => (
                        <Homecard data={data} key={data.id} />
                    ))}
                </div>
            </div>
            <div className="consult">
                <video className='img' id="background-video" autoPlay preload='true' loop muted>
                    <source src={vid} type="video/mp4" />
                </video>
                <h2>Consult With Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aperiam, <br />impedit debitis ipsum aut ex doloribus at minima laboriosam vitae!</p>
                <button>Contact Now</button>
            </div>
            <div className="contact">
                <div className="left">
                    <h2><span>Lets Connect</span>Contact Us Now!</h2>
                    <form className="form">
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="text" placeholder='Enter Your Email' />
                        <input type="text" placeholder='Enter Your Phone Number' />
                        <textarea type="text" placeholder='Enter Message' />
                        <button>Submit</button>
                    </form>
                </div>
                <div className="right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3688.46658481754!2d87.8644411!3d22.411457799999997!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726645264480!5m2!1sen!2sin" className='frame'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Home
