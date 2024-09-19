import React, { useState } from 'react'
import "./styles.scss"
import imglogo from "../../../images/solarlogo.png"
import { RiChatSmile3Line } from "react-icons/ri";
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';


const ChatCard = () => {
    const [openForm, setOpenForm] = useState(false)
    const [raiseTicket, setRaiseTicket] = useState(false)

    const handleticket = () => {
        setOpenForm(false);
        setRaiseTicket(true);
    }
    const closeCard = () => {
        setOpenForm(false);
        setRaiseTicket(false);
    }
    return (
        <div className='chat-card'>

            {
                openForm && !raiseTicket ? <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,

                    }}
                    className="contact-box">
                    <img src={imglogo} alt="" />
                    <h4>Contact With Me</h4>
                    <form className='form'>
                        <input type="text" placeholder=' Your Name' />
                        <input type="text" placeholder=' Your Contact' />
                        <input type="text" placeholder=' Your Query' />
                        <button>Message</button>
                        <button onClick={handleticket}>Raise a Ticket</button>
                    </form>
                </motion.div> : null
            }
            {
                raiseTicket && !openForm ? <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="contact-box">
                    <img src={imglogo} alt="" />
                    <h4>Raise Ticket</h4>
                    <form className='form'>
                        <input type="text" placeholder=' Your Name' />
                        <input type="number" placeholder=' Your Number' />
                        <input type="text" placeholder=' Your Query' />
                        <button>Message</button>
                    </form>
                </motion.div> : null
            }
            {openForm || raiseTicket ? <RxCross1 className="chat-icon-cross" onClick={closeCard} /> : <RiChatSmile3Line className='chat-icon' onClick={() => setOpenForm(true)} />}
        </div>
    )
}

export default ChatCard
