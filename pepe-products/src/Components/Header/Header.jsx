import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/header.css';

const links =[
    {path:  '/',title:'Home'},
    {path:  '/Aboutus',title:'Aboutus'},
    // subLinks, which represent dropdown menus under specific links.
    {title:'Products',
     subLinks:[
      {path: '/womencloths',title: 'Womens Collection'},
      {path: '/mencloths',title: 'Mens Collection'},
     ]
  },
    {path:  '/contact-us',title:'Contact Us'},
    {path:  '/signin',title:'SignIn'},
    {path: '/signup', title:'SignUp'}
    
];

function Navbar() {
  return (
    <>
      <div className='vax'>
      {/* Loop through each item in the 'links' array */}
        {links.map((elem) => (

          // key={elem.path}: In React, the key attribute is used to uniquely identify elements when rendering lists of items. 
          // Here, elem.path is being used as a unique identifier. Each elem in the links array has a path,
          //  and React uses this path as a unique key to efficiently manage and update these elements.
          <div key={elem.path} className="nav-item">

              {/* Check if the current item has sub-links (dropdown options)  */}
            {elem.subLinks ? (

                // If there are sub-links, create a dropdown menu 
              <div className="parent-link">

                 {/* Display the main link title */}
                <span className='none-decrt'>{elem.title}</span>

                {/* Create a container for sub-links */}
                <div className="sub-links">
                  
                {/* Loop through and create sub-link components */}
                  {elem.subLinks.map((subLink) => (

                    // to={subLink.path}: The to attribute specifies the destination URL or path 
                    // where the user will be redirected when they click on this link.
                    <Link key={subLink.path} to={subLink.path}>
                      
                      {/* {subLink.title}: This part renders the visible text for the link.  */}
                      {subLink.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              // If there are no sub-links, create a regular link
              <Link className='none-decrt' to={elem.path}>
                {elem.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
