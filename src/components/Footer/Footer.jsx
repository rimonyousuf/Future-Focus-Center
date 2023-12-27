import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="social-section">
                    <h2 className='footer-title'>Future Focus Center</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="../../../assets/icons/social.png" alt="" />
                </div>
                
                <div className="company-section">
                    <h3 className='footer-title'>Company</h3>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>

                <div className="product-section">
                    <h3 className='footer-title'>Product</h3>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>

                <div className="support-section">
                    <h3 className='footer-title'>Support</h3>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>

                <div className="contact-section">
                    <h3 className='footer-title'>Contact</h3>
                    <p>524 Broadway,NYC</p>
                    <p>+1777-978-5570</p>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>@2023 Future Focus Center. All Rights Reserved</p>
                <p>Powered by <span className='text-power-by'>Future Focus Center</span></p>
            </div>
        </div>
    );
};

export default Footer;