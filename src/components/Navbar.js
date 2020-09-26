
import React, { useState } from "react";
import {Link} from "gatsby"

const NavBar = () => {

    const [isActive, toggleNavbar] = useState(false);
    const setActive = () => { toggleNavbar(true); }
    return (
        <div style={{position: "absolute"}} className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}>
            <div id="main-nav-wrap">
                <div className="logo-wrap">
                    <a href="/">
                        <span className="formal" >Formal</span><span className="primary-color">Flamingo</span> </a>
                </div>
                <div >
                    <div className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                        <ul className="nav">

                            <li><Link className="hack" to="/">Home</Link></li>
                            <li><Link to="/about/" className="hack">About</Link></li>
                            <li><Link to="/blog/" className="hack">Blog</Link></li>
                            <li><Link to="/products/" className="hack">Products</Link></li>
                            <li><Link to="/contact/" className="hack">Contact</Link></li>



                        </ul>
                    </div>

                </div>



                <div id="hamburger-wrap">
                    <div className={` burger-open ${isActive ? 'burger-close' : ''}`}

                        data-target='nav-menu'
                        onClick={setActive}
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