import React, { useEffect, useState } from 'react'
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
import ContactUs from '../../components/Contact/ContactUs'
import { Link } from 'react-router-dom'



const Home = () => {
    const linkClicks = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>

            <div className='home'>
                <div className="socials">
                    <div className="iconwrap">
                        <a href="https://wa.me/+917003813055"> <IoLogoWhatsapp className='icons' id='whatsapp' /></a>

                    </div>
                    <div className="iconwrap">
                        <a href="https://www.facebook.com/profile.php?id=61559571530270&mibextid=ZbWKwL"><FaFacebook className='icons' id='whatsapp' /></a>

                    </div>
                    <div className="iconwrap">
                        <a href=""><MdEmail className='icons' id='whatsapp' /></a>

                    </div>

                </div>
                <ChatCard />
                <div className="hero">
                    <motion.h1 initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>Sri Sri Hareshwar  <br />Machinery Limited</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>Welcome to Sri Sri Hareshwar Machinery Limited, your trusted partner in sustainable energy solutions. As a leader in solar  supply, we are dedicated to providing efficient and innovative solar energy systems for homes and industries.</motion.p>
                    <Link to={"/services"} onClick={linkClicks} className='button'>Explore Now</Link>
                    <img loading='lazy' src={downarrow} alt="" className='down-arrow' />
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
                        transition={{ duration: 1 }}>ABOUT US & OUR EXPERTISE</motion.h1>
                    <motion.h4 initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}>we are the ideal choice for powering a greener future.</motion.h4>
                    <motion.div initial={{ opacity: 0, rotateY: 90 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 1 }} className="about-box">
                        <div className="left">
                            <p>At Sri Sri Hareshwar Machinery Limited, we are driven by a mission to harness the power of the sun for a sustainable tomorrow. Founded with the vision to lead the solar revolution in both domestic and industrial sectors, we specialize in the  supply of high-quality solar systems. Our team combines years of experience, cutting-edge technology, and a deep commitment to renewable energy to deliver solutions that are both cost-effective and environmentally friendly. </p>
                            <div className="know-more">
                                <h2>Know More</h2>
                                <Link to={"/about"} onClick={linkClicks}><GoArrowRight className='arrow-right' /></Link>
                            </div>
                        </div>
                        <div className="right">
                            <img src={aboutimg} alt="" className='img' loading='lazy' />
                        </div>
                    </motion.div>
                </div>
                <div className="services">
                    <h1>EXPERT SOLAR CONSULTING</h1>
                    <div className="sub-head">
                        <h4>Empowering your solar journey with tailored advice and innovative strategies.</h4>
                        <div className="sub-butts">
                            <Link className='button' to={"/services"} onClick={linkClicks}>Learn More</Link>
                            <Link className='button' to={"/contact"} onClick={linkClicks}>Get Started</Link>
                        </div>
                    </div>
                    <div className="cards">
                        {cards2.map((data) => (
                            <Homecard data={data} key={data.id} />
                        )).slice(0, 3)
                        }
                    </div>
                </div>
                <div className="consult">
                    <video className='img' id="background-video" autoPlay preload='true' loop muted >
                        <source src={vid} type="video/mp4" />
                    </video>
                    <h2>Consult With Us</h2>
                    <p>Our team combines years of experience, cutting-edge technology, and a deep commitment to renewable energy to deliver solutions that are both cost-effective and environmentally friendly. With a strong emphasis on quality, reliability, and customer satisfaction, we are proud to empower homes and businesses with clean energy.</p>
                    <Link className='button' to={"/contact"} onClick={linkClicks}>Contact Now</Link>
                </div>
                <ContactUs formstate={true} />
            </div>





        </>
    )
}

export default Home
