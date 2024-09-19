import React, { useState } from 'react'
import "./styles.scss"
import servicebg from "../../images/servicebg.mp4"
import { cards2 } from '../../data/data'
import Homecard from '../../components/cards/HomeCard/Homecard'
import ServicePop from '../../components/popup/ServicePop'
import ChatCard from '../../components/cards/chatCard/ChatCard'

const Services = () => {

    return (
        <div className='services'>
            <ChatCard />
            <div className="intro">
                <video className='imgvid' id="background-video" autoPlay preload='true' loop muted >
                    <source src={servicebg} type="video/mp4" />
                </video>
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae alias, neque harum obcaecati debitis assumenda? Expedita, mollitia. Sequi natus a distinctio fugit quae! Earum, voluptas ipsum. Earum nam veritatis blanditiis inventore asperiores magni quia totam delectus dignissimos, numquam fugit facere!</p>
            </div>
            <div className="cards">
                {
                    cards2.map((e) => (
                        <Homecard data={e} key={e.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services
