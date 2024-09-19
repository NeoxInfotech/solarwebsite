import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import cardwatermark from "../../../images/card-watermark.png"
import "./styles.scss"
import { motion } from 'framer-motion';
import ServicePop from '../../popup/ServicePop';


const Homecard = ({ data }) => {
    const [openmodal, setOpenModal] = useState(false)
    return (
        <>
            {openmodal ? <ServicePop data={data} setOpenModal={setOpenModal} /> : null}
            <motion.div
                initial={{ rotateY: 90 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
                className="card" style={{ background: data.bg, color: data.color }}>
                {data.img ? <img src={data.img} alt="" className='introimg' /> : null}
                <h2>{data.head}</h2>
                <p>{data.body}</p>
                <div className='readmore'>
                    {!data.watermark ? <h2 onClick={() => setOpenModal(true)}>Read More</h2> : null}
                    <GoArrowRight className='arrow' style={{ fontSize: data.buttsize, background: data.buttbg, color: data.buttcolor }} />
                </div>

                {data.watermark ? <img src={cardwatermark} alt="" className="watermark" /> : null}
            </motion.div>
        </>
    )
}

export default Homecard
