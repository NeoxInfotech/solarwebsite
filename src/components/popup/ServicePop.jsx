import React from 'react'
import "./styles.scss"
import about2 from "../../images/about2.jpg"

const ServicePop = ({ data, setOpenModal }) => {
    return (
        <div className='pops'>
            <div className="left">
                <div className="head">
                    <img src={data?.img} alt="" />
                    <h2>{data?.head}</h2>
                </div>
                <p>{data?.body}</p>
                <button onClick={() => setOpenModal(false)}>Close</button>
            </div>
            <div className="right">
                <img src={about2} alt="" />
            </div>
        </div>
    )
}

export default ServicePop
