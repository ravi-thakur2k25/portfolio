import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {



    const [showMenu, setshowMenu] = useState(false)

    const handleToggle = () => {
        setshowMenu(!showMenu)
    }

    return (
        <>
            <header className='fixed-top' >
                <div className="container nav-bar  ">
                    <div className="grid navbar-grid">

                        <div className="logo">
                            <h5>Portfolio</h5>
                        </div>




                        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                            <ul>
                                <li>
                                    <AnchorLink className='anchor-link' offset={50} href='#home'> <p>Home</p>   </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink className='anchor-link' offset={50} href='#about'> <p>About me</p>   </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink className='anchor-link' offset={50} href='#projects'> <p>Projects</p>   </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink className='anchor-link' offset={50} href='#contact'> <p>Contact</p>   </AnchorLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="ham-menu">
                            <button className='nav-button' onClick={handleToggle}>
                                <GiHamburgerMenu className='nav-icon' />
                            </button>
                        </div>


                    </div>

                </div>
            </header>

        </>
    )
}

export default Navbar