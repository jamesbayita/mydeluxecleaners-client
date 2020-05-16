import React from 'react';
import {Link} from 'react-router-dom';
import logoDeluxe from '../img/deluxeLogo.svg';

function NavBar() {
    let handleClick = (e) => {
        e.preventDefault();
        document.body.classList.add('nav-sidebar-open');
    }
    return(
        <header id="header">
            <div className="header-main">
                <div className="box-left">
                    <div className="item bt-menu" onClick={handleClick}>
                            <div className="ico-menu">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>MENU</span>
                    </div>
                </div>
                <div className="boxright">
                    <div className="item has-tablet" id="bt-delivery">
                        <a className="button button-large" href="https://www.sudzy.co/w/index.html?cleaner=deluxe-cleaners"><span>SCHEDULE PICKUP</span></a>
                    </div>
                </div>
                <div className="logo-header"><Link className="logo-link" to={'/'}><img src={logoDeluxe} alt=""/></Link></div>
            </div>
        </header>
    )
}

export default NavBar;