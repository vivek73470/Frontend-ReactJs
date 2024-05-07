import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';

function Footer() {
  const footerSections = [

    {
      title: 'Account',
      links: [
        {  title: 'Home' },
        {  title: 'Login' },
        {  title: 'Register' },
        {  title: 'Cart' },
      ],
    },
    {
      title: 'Policies',
      links: [
        {  title: 'Terms of Service' },
        {  title: 'Privacy Policy' },
        { title: 'FAQ' },
      ],
    },
  ];

  return (
    <footer className='footer-container'>
      <div className='footer-content'>
    
<div>
    <span>Exclusive</span>
</div>
<div>
    <span>Support</span>
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
