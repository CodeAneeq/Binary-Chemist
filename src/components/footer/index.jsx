import React from 'react'
import '../../components/footer/footer.css'
import logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <div id="foote" className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sd-12">
                <img className='footerLogo' src={logo} alt="" />
                </div>
                <div className="col-md-6 col-sd-12">
                <div className="footerContent">
                    <ul className='footerContentUL'>
                        <li>Home</li>
                        <li>About</li>
                        <li>FAQS</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
            <div className="hr">
              <hr />
            </div>
            <div class="copyright text-center py-4">©copyright Binary Chemist 2022 - All Right Reserved</div>
    </div>
  )
}
