import React from 'react'
import "./styles.scss"
import ContactUs from '../../components/Contact/ContactUs'
import ChatCard from '../../components/cards/chatCard/ChatCard'

const Contact = () => {
    return (
        <div className='contact'>
            <ChatCard />
            <div className="intro">
                <h1>Contact Us</h1>
                <p>Be a part of the renewable energy revolution! At Sri Sri Hareshwar Machinery Limited, we’re always looking for passionate individuals who share our vision for a sustainable future. Join our team and help us drive the change towards cleaner, greener energy for all.</p>
            </div>
            <ContactUs />
        </div>
    )
}

export default Contact

