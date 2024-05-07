import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';
import { IoSendSharp } from "react-icons/io5";

function Footer() {
    const footerSections = [

        {
            title: 'Account',
            links: [
                { title: 'Home' },
                { title: 'Login' },
                { title: 'Register' },
                { title: 'Cart' },
            ],
        },
        {
            title: 'Policies',
            links: [
                { title: 'Terms of Service' },
                { title: 'Privacy Policy' },
                { title: 'FAQ' },
            ],
        },
    ];

    return (
        <footer className='footer-container'>
            <div className='footer-content'>

                <div>
                    <span className='footer-esclusive'>Exclusive</span>
                    <p className='footer-subscribe-aa'>Subscribe</p>
                    <p className='footer-subscribe-aa'>Get 10% off your first order</p>
                    <div class="your-events-searchstyle-footer">
              <span className='span-search-header'>
                <input type="email" class="your-events-searchbox-head-footer" placeholder="Enter your email" />
              <IoSendSharp />
              </span>

            </div>
                </div>
                <div>
                    <span className='footer-esclusive'>Support</span>
                    <p className='footer-subscribe-aa'>111 Bijoy sarani, Dhaka,<br />
                        DH 1515, Bangladesh.</p>
                        <p className='footer-subscribe-aa'>exclusive@gmail.com</p>
                        <p className='footer-subscribe-aa'>+88015-88888-9999</p>
                </div>
                {footerSections.map((section) => (
                    <div key={section.title} className="footer-section">
                        <h3>{section.title}</h3>
                        <ul>
                            {section.links.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footer-bottom">
                {/* Additional content for the bottom of the footer */}
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
