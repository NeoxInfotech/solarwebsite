import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import sshm from "../../images/solarlogo.png"

const Loading = () => {
    return (
        <div className='init-loader'>
            <img src={sshm} alt="" className='load-img' />
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#eb722e"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loading
