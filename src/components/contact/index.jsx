import React from 'react'
import '../contact/contact.css'

export const Contact = () => {
  return (
    <div id='Con' className="contact">
        <div className="container">
        <div className="content">
        <h2 className="text-danger main">LET'S START WORKING TOGETHER ON YOUR AMAZING PROJECT</h2>
        </div>
        <form>
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-lg-0 mb-4">
                <input type="text" className="ab" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col-lg-6 col-md-12">
                <input type="text" className="ba" placeholder="Last name" aria-label="Last name"/>
                </div>
                <div className="col-lg-12">
                <textarea name="message" cols="30" className="mt-4 message-sec" rows="10" placeholder="Write your message here"></textarea>
                </div>
                <div className="col-12 mt-4">
                <button className="submit-btn">SUBMIT</button>
                </div>
            </div>
        </form>
        </div>
    </div>
  )
}
