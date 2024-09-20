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
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3688.46658481754!2d87.8644411!3d22.411457799999997!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726645264480!5m2!1sen!2sin" className='frame'></iframe>
            </div>
        </div>
    )
}

export default ContactUs
