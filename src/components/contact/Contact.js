import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import React from 'react';

const Contact = () => {
  return (
    <div className="c">
        <div className="c-wrapper">
            <div className="left-border"></div>
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info-item">
                    <img src={phone} alt="" class="c-icon" />
                    +1 1234 556 75
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={email} alt="" />
                    contact@lama.dev
                </div>
                <div className="c-info-item">
                    <img class="c-icon" src={address} alt="" />
                    245 King Street, Touterie Victoria 8520 Australia
                </div>
            </div>
            <div className="c-right">
                <p className="c-heading"><span className="text-bold">What's your story?</span> Get in touch. Always available for freelancing if the right project comes along me.</p>
                <form type="submit" className="c-form">
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message">
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Contact