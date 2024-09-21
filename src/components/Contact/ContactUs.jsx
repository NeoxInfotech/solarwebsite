import React from 'react'
import "./styles.scss"

const ContactUs = ({ formstate }) => {
    return (
        <div className="contact-us">
            <div className="left">
                <h2><span>Lets Connect</span>Contact Us Now!</h2>
                {
                    formstate ? <form className="form">
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="text" placeholder='Enter Your Email' />
                        <input type="text" placeholder='Enter Your Phone Number' />
                        <textarea type="text" placeholder='Enter Message' />
                        <button>Submit</button>
                    </form> : <div className="contact-details">
                        <h1>Phone Number - +91 7003813055</h1>
                        <h1>Phone Number - +91 9735003739</h1>
                        <h1>Email - rajpratip99@gmail.com</h1>
                        <h1>Address -  110 Madhyapara Deulpur, Panchla, Howrah -711411</h1>

                    </div>
                }

            </div>
            <div className="right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58926.080858404595!2d88.20442486843362!3d22.62095387021692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s110%20Madhyapara%20Deulpur%2C%20Panchla%2C%20Howrah%20-711411!5e0!3m2!1sen!2sin!4v1726921654302!5m2!1sen!2sin" className='frame'></iframe>
            </div>
        </div>
    )
}

export default ContactUs
