
import React, { useState } from "react";
import {Link} from "gatsby"
/* eslint-disable */ 
const NavBar = () => {

    const [isActive, toggleNavbar] = useState(false);
    const [isDropped, dropDown ] = useState(false);
    
    const toggleTrueFalse = () => toggleNavbar(!isActive);
    const dropTrueFalse = () => dropDown(!isDropped);
   
    return (
        <div style={{ zIndex: "1000"}} className={` navagation-wrap ${isActive ? 'mobile-wrap' : ''}`}>
            <div id="main-nav-wrap">
                <div className="logo-wrap">
                    <a href="/">
                        <span className="formal" >Botanical</span><span className="primary-color"> Backyard</span> </a>
                </div>
                <div >
                    <div className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                        <ul className="nav">

                            <li><Link className="hack" to="/">Home</Link></li>
                            <li><Link to="/about/" className="hack">About</Link></li>
                            <li><Link to="/blog/" className="hack">Blog</Link></li>
                          
                            <li  onClick={dropTrueFalse}><span style={{cursor: "pointer"}} className="hack drop">Butterflies<i className= {`arrow ${isDropped ? 'down' : ''}`}></i></span>
                                <ul className= {`dropdown ${isDropped ? '' : 'hide'}`} style={{paddingInlineStart: "0px"}} >
                                    <li><Link  to="/butterflies/monarch/" className="hack drop-link">Monarch</Link></li>
                                    <li><Link to="/butterflies/giantswallowtail/" className="hack drop-link">Giant Swallowtail</Link></li>
                                    <li><Link to="/butterflies/blackswallowtail/" className="hack drop-link">BlackSwallowtail</Link></li>
                                </ul>
                            
                            </li>
                            <li><Link to="/contact/" className="hack">Contact</Link></li>
                        </ul>
                    </div>

                </div>



                <div id="hamburger-wrap">
                    <div className={` burger-open ${isActive ? 'burger-close' : ''}`}

                        data-target='nav-menu'
                        
                        onClick={toggleTrueFalse}
                        aria-hidden={true}>
                        <span className="line line01"></span>
                        <span className="line line02"></span>
                        <span className="line line03"></span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default NavBar;