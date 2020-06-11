import React from 'react';
import Carousel from '../other/Carousel';
import {Link} from 'react-router-dom';
import logo from '../../img/full_logo.svg'
import Form from '../other/Form';
export default function Home(){    
    return(
        <div className="Home-Wrapper">
            <div className="block_01">
                <Carousel/>
            </div>
            <div className="block_02">
                <div className="feature">
                    <Link className="block_02_link" to={'/locations'}> <i className="fas fa-map-marked-alt fa-5x"></i>
                    </Link>
                    <h3 className="feature_title">Locations</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum magnam dolores asperiores.</p>
                    <Link className="feature_link" to={'/locations'}>View Locations</Link>
                </div>
                <div className="feature">
                <Link className="block_02_link" to={'/coupons'}> <i className="fas fa-money-check-alt fa-5x"></i>
                    </Link>
                    <h3 className="feature_title">Coupons</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum magnam dolores asperiores.</p>
                    <Link className="feature_link" to={'/coupons'}>View Coupons</Link>
                </div>
                <div className="feature">
                <Link className="block_02_link" to={'/services'}> <i className="fab fa-black-tie fa-5x"></i>
                    </Link>
                    <h3 className="feature_title">Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum magnam dolores asperiores.</p>
                    <Link className="feature_link" to={'/services'}>Our Services</Link>
                </div>
                <div className="feature">
                <Link className="block_02_link" to={'/alterations'}> <i className="fas fa-cut fa-5x"></i>
                    </Link>
                    <h3 className="feature_title">Alterations</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum magnam dolores asperiores.</p>
                    <Link className="feature_link" to={'/alterations'}>Learn More</Link>
                </div>
            </div>
            <div className="block_03"></div>
            <div className="block_04">
                <section className="home-form">
                    <Form/>
                    <div className="right-content"></div>
                </section>
            </div>
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
                                        <li><Link className="widget-link" to={'/delivery'}>Pick Up & Delivery Info</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className="widget widget_nav_menu widget_text">
                            <div className="widget-wrap">
                                <h4 className="widget-wrap">About Deluxe</h4>
                                <div className="menu-footer-menu-about-flair-container">
                                    <ul className="menu">
                                        <li><Link className="widget-link" to={'/about'}>Our Story</Link></li>
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
        </div> 
    )
}