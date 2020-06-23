import React ,{useState} from 'react';
import Carousel from '../other/Carousel';
import {Link} from 'react-router-dom';
import logo from '../../img/full_logo.svg'
import Form from '../other/Form';
import imageOne from '../../img/home-3.jpeg';
import imageTwo from '../../img/dryCleaningImg.jpeg';
import imageThree from '../../img/home-2.jpeg';
import imageFour from '../../img/home-1.png';
// HOME PAGE



export default function Home(){
    const [res, setRes] = useState();
    let [isLoading, setIsLoading] = useState(false);
    return(
        <div className="Home-Wrapper">
            <div className="block_01">
                <Carousel/>
            </div>
            <div className="block_02">
                <div className="block_heading">
                    <h1>Our Services</h1>
                </div>
                <div className="services-container-home">
                    <div className="s-container">
                        <div className="s-image-container">
                            <img src={imageOne} alt="wedding" />
                        </div>
                        <div className="s-description-container">
                            <div className="s-header-container">
                                <h2>Bridal Care</h2>
                            </div>
                            <div className="s-description">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis id molestiae? Atque voluptate quas repellat ad dicta consectetur accusantium, voluptas animi minima aliquam beatae possimus assumenda inventore aspernatur aut?</p>
                            </div>
                        </div>
                    </div>
                    <div className="s-container">
                        <div className="s-image-container">
                            <img src={imageTwo} alt="dry clean"/>
                        </div>
                        <div className="s-description-container">
                            <div className="s-header-container">
                                <h2>Dry Cleaning</h2>
                            </div>
                            <div className="s-description">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis id molestiae? Atque voluptate quas repellat ad dicta consectetur accusantium, voluptas animi minima aliquam beatae possimus assumenda inventore aspernatur aut?</p>
                            </div>
                        </div>
                    </div>
                    <div className="s-container">
                        <div className="s-image-container">
                            <img src={imageThree} alt="alterations"/>
                        </div>
                        <div className="s-description-container">
                         <div className="s-header-container">
                                <h2>Alterations</h2>
                            </div>
                            <div className="s-description">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis id molestiae? Atque voluptate quas repellat ad dicta consectetur accusantium, voluptas animi minima aliquam beatae possimus assumenda inventore aspernatur aut?</p>
                            </div>
                        </div>
                    </div>
                    <div className="s-container">
                        <div className="s-image-container">
                            <img src={imageFour} alt="laundry"/>
                        </div>
                        <div className="s-description-container">
                         <div className="s-header-container">
                                <h2>Laundry</h2>
                            </div>
                            <div className="s-description">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis id molestiae? Atque voluptate quas repellat ad dicta consectetur accusantium, voluptas animi minima aliquam beatae possimus assumenda inventore aspernatur aut?</p>
                            </div>
                        </div>
                    </div>
                </div>
                   <div className="more-services">
                        <div className="jusitfy-container">
                            <Link className="view-more" to={'/services'}>view more</Link>
                        </div>
                    </div>
            </div>
            <div className="block_03"></div>
            <div className="block_04">
                <section className="home-form">
                    {res ? 
                    <div className="form201">
                        <h2>{`Thank you ${res.first_name},`}</h2>
                        <p>You have successfully subscribed to our mailing list!</p>
                    </div>
                    : 
                    <Form
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        setRes={setRes}
                    />
                    }
                    <div className="right-content">
                        <div className="coupon">
                            <h2 className="coupon-h2">Coupons</h2>
                            <div className="coupon-container">
                                <p>Save on your next visit with our coupons.</p>
                                <p>Restrictions may apply.</p>
                            </div>
                            <div className="coupon-link-container">
                                <Link className="coupon-link" to={'/coupons'}>View Coupons</Link>
                            </div>
                        </div>
                    </div>
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