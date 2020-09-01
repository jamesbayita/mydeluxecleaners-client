import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/full_logo.svg';

function Footer() {
    return (
        <>
        <div className="footer-widgets">
                <div className="wrap">
                    <div className="widget-area footer-widgets-1 footer-widget-area">
                        <section className="widget widget_text">
                            <div className="widget-wrap">
                                <h4>Savings</h4>
                                <div className="textwidget">
                                    <ul className="menu">
                                        <li><Link className="widget-link" to={'/coupons'}>Coupons</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className="widget widget_nav_menu widget_text">
                            <div className="widget-wrap">
                                <h4>Locations</h4>
                                <div className="menu-footer-menu-locations-container">
                                    <ul className="menu">
                                        <li><Link className="widget-link credit_link" to={'/locations'}>West Horizon Ridge</Link></li>
                                        <li><Link className="widget-link credit_link" to={'/locations'}>North Stephanie</Link></li>
                                        <li><Link className="widget-link credit_link" to={'/locations'}>South Jones Blvd</Link></li>
                                        <li><Link className="widget-link credit_link" to={'/locations'}>Windy Rd</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="widget-area footer-widgets-2 footer-widget-area">
                        <section className="widget widget_nav_menu widget_text">
                            <div className="widget-wrap">
                                <h4 className="widget-title widgettitle">Services</h4>
                                <div className="menu-footer-menu-services-container">
                                    <ul className="menu">
                                        <li className="menu-item menu-item-type-post"><Link className="widget-link" to={'/services'}>Dry Clean</Link></li>
                                        <li className="menu-item menu-item-type-post"><Link className="widget-link" to={'/services'}>Laundry</Link></li>
                                        <li className="menu-item menu-item-type-post"><Link className="widget-link" to={'/services'}>Alterations & Tailoring</Link></li>
                                        <li className="menu-item menu-item-type-post"><Link className="widget-link" to={'/services'}>Bedding</Link></li>
                                        <li className="menu-item menu-item-type-post"><Link className="widget-link" to={'/services'}>Bridal Care</Link></li>
                                        <li className="menu-item menu-item-type-post"><Link className="widget-link" to={'/services'}>Wash & Fold</Link></li>
                                        <li className="menu-item menu-item-type-post"><Link className="widget-link" to={'/services'}>Linens</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="widget-area footer-widgets-3 footer-widget-area">
                        <section className="widget widget_nav_menu widget_text">
                            <div className="widget-wrap">
                                <h4 className="widget-title widgettitle">Delivery</h4>
                                <div className="menu-footer-menu-delivery-container">
                                    <ul className="menu">
                                        <li><a className="widget-link" href={'https://www.sudzy.co/w/index.html?cleaner=deluxe-cleaners'}>Pick Up & Delivery</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="widget-area footer-widgets-4 footer-widget-area">
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer_container">
                    <div className="credits">
                        <img className="credits_logo"  src={logo} alt="credits"/>
                        <p className="copy">&copy; 2020 RMC & S Corp. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;