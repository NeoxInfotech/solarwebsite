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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim non ipsam mollitia, alias tempora rerum quo quae eos dolore odit aliquid, minima aliquam adipisci ratione optio eius cupiditate cum perferendis.</p>
            </div>
            <ContactUs />
        </div>
    )
}

export default Contact

