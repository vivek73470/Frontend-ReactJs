// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import '../Header/header.css';
// import { RxHamburgerMenu } from "react-icons/rx";

// const links =[
//     {path:  '/',title:'Home'},
//     {path:  '/Aboutus',title:'Aboutus'},
//     // subLinks, which represent dropdown menus under specific links.
//     {title:'Products',
//      subLinks:[
//       {path: '/womencloths',title: 'Womens Collection'},
//       {path: '/mencloths',title: 'Mens Collection'},
//       {path: '/mobilecover',title: 'Mobile Cover'},
//      ]
//   },
//     {path:  '/contact-us',title:'Contact Us'},
//     {path:  '/signin',title:'Login'},
//     // {path: '/signup', title:'SignUp'}
    
// ];

// function Navbar() {
//   const [showProductsMenu, setShowProductsMenu] = useState(false);
// const[showMenu,setShowMenu]=useState(false);

// const toggleMenu =()=>{
//   setShowMenu(!showMenu)
// }
// const toggleProductsMenu = () => {
//   setShowProductsMenu(!showProductsMenu);
// }
//   return (
//     <>
//       <div className='vax'>
//       {/* Loop through each item in the 'links' array */}
//         {links.map((elem) => (
//           // key={elem.path}: In React, the key attribute is used to uniquely identify elements when rendering lists of items. 
//           <div key={elem.path} className="nav-item">

//               {/* Check if the current item has sub-links (dropdown options)  */}
//             {elem.subLinks ? (

//                 // If there are sub-links, create a dropdown menu 
//               <div className="parent-link">

//                  {/* Display the main link title */}
//                 <span className='none-decrt'>{elem.title}</span>

//                 {/* Create a container for sub-links */}
//                 <div className="sub-links">
                  
//                 {/* Loop through and create sub-link components */}
//                   {elem.subLinks.map((subLink) => (

//                     // to={subLink.path}: The to attribute specifies the destination URL or path 
//                     // where the user will be redirected when they click on this link.
//                     <Link key={subLink.path} to={subLink.path}>
                      
//                       {/* {subLink.title}: This part renders the visible text for the link.  */}
//                       {subLink.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               // If there are no sub-links, create a regular link
//               <Link className='none-decrt' to={elem.path}>
//                 {elem.title}
//               </Link>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className='header-hamburger'>
//       <div className='hamburger-imageee'>
//         <p>Bewkoof</p>
//         </div>
//       <div className='hamburger-icon' onClick={toggleMenu} >
//       < RxHamburgerMenu  size={37} />
//       </div>
//       </div>
//       {showMenu && (
//                 <div className='mobile-menu'>
//                     {links.map((elem) => (
//                       if(elem.path==="products"){
//                         console.log("hii")
//                       }
//                         <div key={elem.path} className='mobile-nav-item'>
//                             <Link to={elem.path} onClick={toggleMenu}>
//                                 {elem.title}---{elem.path}
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {showProductsMenu && (
//               <div>
//                 {links[2].subLinks.map((item)=>(
//                   <div>
//                     <Link to={item.path} onClick={toggleProductsMenu}>
//                       {item.title}
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             )}
//       <hr className='horint-line' />
   
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
    { path: '/', title: 'Home' },
    { path: '/Aboutus', title: 'Aboutus' },
    {
        title: 'Products',
        subLinks: [
            { path: '/womencloths', title: 'Womens Collection' },
            { path: '/mencloths', title: 'Mens Collection' },
            { path: '/mobilecover', title: 'Mobile Cover' },
        ]
    },
    { path: '/contact-us', title: 'Contact Us' },
    { path: '/signin', title: 'Login' },
];

function Navbar() {
    const [showProductsMenu, setShowProductsMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const toggleProductsMenu = () => {
        setShowProductsMenu(!showProductsMenu);
    }

    return (
        <>
            <div className='vax'>
                {/* Loop through each item in the 'links' array */}
                {links.map((elem) => (
                    // key={elem.path}: In React, the key attribute is used to uniquely identify elements when rendering lists of items. 
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
                                        <Link key={subLink.path} to={subLink.path} onClick={toggleMenu}>

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
                    {links.map((elem) => (
                        <div key={elem.path} className='mobile-nav-item'>
                            <Link to={elem.path} onClick={toggleMenu}>
                                {elem.title}---{elem.path}
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {showProductsMenu && (
                <div className='mobile-menu'>
                    {links[2].subLinks.map((item) => (
                        <div key={item.path} className='mobile-nav-item'>
                            <Link to={item.path} onClick={toggleProductsMenu}>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            <hr className='horint-line' />
        </>
    );
}

export default Navbar;

