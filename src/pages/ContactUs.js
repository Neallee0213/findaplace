import React from 'react'
import Hero from "../components/hero/Hero";
import heroVideo from '../images/video.mp4'
import "./ContactUs.scss"

const ContactUs = () => {
    return (
        <>
            <div className="contact-container">

                <video id="bg-vid" className="cover" autoPlay mute loop>
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="container">

                    <div className="contact-form">
                        <h3>Any question?</h3>
                        <p>Please, Feel free to ask questions at any point!</p>
                        <br />
                        <div className="txtb">
                            <label>Full Name :</label>
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                        </div>
                        <div className="txtb">
                            <label>Email :</label>
                            <input className="form-control" id="email" name="email" placeholder="Email" type="text" required />
                        </div>
                        <div className="txtb">
                            <label>Phone Number :</label>
                            <input className="form-control" id="Phone" name="Phone" placeholder="Phone Number" type="text" required />
                        </div>
                        <div className="txtb">
                            <textarea name="message" id="message" rows="5" className="form-control" placeholder="Message"></textarea>
                        </div>

                        <button className="btn">
                            Send
                        </button>

                    </div>


                </div>
            </div>
        </>
    )
}

export default ContactUs
