import './about.modular.css'
import aboutIMG from '../../assets/aboutwrapper.png'
import about from '../../assets/about.png'

import React from 'react'

export const About = () => {
  return (
    <div id='a' className="about">
    <div className='container'>
        <h4 className='text-danger'>ABOUT US</h4>
        <img className="aboutWrapper" src={aboutIMG} alt="" />
        <h1 className='ultimte'>ULTIMATE EPERIENCES WITH STORY, EMOTION AND PURPOSE</h1>
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <figure className='imgAboutFigure container'>
                    <img src={about} alt="" />
                </figure>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="text">
                  <p className="big">
                   “ Our mission is to produce the highest quality work for every clients, on every project with full of energy we have ”
                  </p>
                  <p className='text-danger smalll'>Binjamin Kao</p>
                  <p className='smalll'><b>DIRECTOR</b></p>
                  <p className='small'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                </div>
            </div>
            {/* <div className="col-lg-6"></div> */}
        </div>
        </div>
    </div>
  )
}
