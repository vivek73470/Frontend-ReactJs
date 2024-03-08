
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';
import { RxHamburgerMenu } from "react-icons/rx";

const headerSections = [
    {
        links: [
            { path: '/mencloths', title: 'Mens Collection' },
            { path: '/womencloths', title: 'Womens Collection' },
            { path: '/mobilecover', title: 'Mobile Cover' },

        ]
    },
    {
        links: [
            { path: '/', title: 'Bewakoof' },

        ],
    },
    {
        links: [
            { path: '/Aboutus', title: 'Aboutus' },
            { path: '/contact-us', title: 'Contact Us' },
            { path: '/signin', title: 'Login' },
        ],
    }


];

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }


    return (
        <>
            <div className='vax'>
                {/* Loop through each item in the 'links' array */}
                {headerSections.map((elem) => (
                    // key={elem.path}: In React, the key attribute is used to uniquely identify elements when rendering lists of items. 
                    <div key={elem.path} className="nav-item">
                        {elem.links.map((elem) => (
                            <Link className={elem.title === 'Bewakoof' ? 'none-decrt title-home' : 'none-decrt'} to={elem.path}>
                            {elem.title}
                        </Link>
                        ))}

                    </div>
                ))}

            </div>

            <div className='header-hamburger'>
                <div className='hamburger-imageee'>
                    <p>Bewkoof</p>
                </div>
                <div className='hamburger-icon' onClick={toggleMenu}>
                    <RxHamburgerMenu size={37} />
                </div>
            </div>
            {showMenu && (
                <div className='mobile-menu'>
                    {headerSections.map((elem) => (
                        <div key={elem.path} className='mobile-nav-item'>
                            {elem.links.map((item) => (
                                <Link to={item.path} onClick={toggleMenu}>
                                {item.title}
                            </Link> 
                            ))}

                        </div>
                    ))}
                </div>
            )}
            {/* <hr className='horint-line' /> */}
        </>
    );
}

export default Navbar;

