import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg';

function NavMenu() {
    let onClick_closeButton = () => {
        document.body.classList.remove('nav-sidebar-open')
    }
    return(
        <div className="nav-main" id="nav-main">
            <div className="top">
                <div className="header">
                    <div className="pull-left">
                        <img src={logo} alt="LOGO"/>
                    </div>
                    <div className="pull-right">
                        <div className="bt-close js-close-menu" onClick={onClick_closeButton}>CLOSE</div>
                    </div>
                </div>
                <ul className="menu">
                    <li className="li link-list"><Link className="link-item" to="/"  onClick={onClick_closeButton}>Home</Link></li>
                    <li className="li link-list"><Link className="link-item" to="/about" onClick={onClick_closeButton}>About</Link></li>
                    <li className="li link-list"><Link className="link-item" to="/services" onClick={onClick_closeButton}>Services</Link></li>
                    <li className="li link-list"><Link className="link-item" to="/locations" onClick={onClick_closeButton}>Locations</Link></li>
                    <li className="li link-list"><Link className="link-item" to="/" onClick={onClick_closeButton}>Pickup / Delivery Info</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu;