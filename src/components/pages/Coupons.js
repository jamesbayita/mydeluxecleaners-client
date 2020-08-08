import React from 'react';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu';
import Footer from '../other/Footer';
import logo from '../../img/logo.svg';

function Coupons() {
    return(
        <div className="Home-Wrapper">
            <NavBar />
            <NavMenu />
            <div className="page_heading">
                <h1>Coupons</h1>
            </div>
            <div className="page_wrapper">
                <div className="page_container">
                    <div className="page_description">
                        <p className="page_p">Print coupons, or show on your phone. Redeem at any participating location. Restrictions may apply.</p>
                    </div>
                    <div className="coupons_main">
                        <div className="page_flex">
                            <div className="flex_box">
                                <div className="coupon_logo">
                                    <img src={logo} alt="Deluxe Cleaners"/>
                                </div>
                                <div className="coupon_expiration">
                                    <span className="expiration">No expiration</span>
                                </div>
                                <h2 className="coupon_heading">10% OFF</h2>
                                <h3 className="coupon_title">Heroes Discount</h3>
                                <p className="coupon_description">Must present during drop off. Must Present a valid Badge or ID. May not be combined with other coupons or offers. Dry Cleaning and Laundry Only.</p>
                            </div>
                            <div className="flex_box">
                                <div className="coupon_logo">
                                    <img src={logo} alt="Deluxe Cleaners"/>
                                </div>
                                <div className="coupon_expiration">
                                    <span className="expiration">No expiration</span>
                                </div>
                                <h2 className="coupon_heading">15% OFF</h2>
                                <h3 className="coupon_title">First Time Customer</h3>
                                <p className="coupon_description">Must present during drop off. First-time customers only. May not be combined with any other coupon or offers. Dry Cleaning and Laundry Only.</p>
                            </div>
                            <div className="flex_box">
                                <div className="coupon_logo">
                                    <img src={logo} alt="Deluxe Cleaners"/>
                                </div>
                                <div className="coupon_expiration">
                                    <span className="expiration">No expiration</span>
                                </div>
                                <h2 className="coupon_heading">5$ off 40$ or more</h2>
                                <p className="coupon_description">Must present during drop off. One coupon per customer may not be combined with any other coupons or offers. Dry Cleaning and Laundry Only.</p>
                            </div>
                            <div className="flex_box">
                                <div className="coupon_logo">
                                    <img src={logo} alt="Deluxe Cleaners"/>
                                </div>
                                <div className="coupon_expiration">
                                    <span className="expiration">No expiration</span>
                                </div>
                                <h2 className="coupon_heading">20$ OFF</h2>
                                <h3 className="coupon_title">Wedding Gowns</h3>
                                <p className="coupon_description">Must present during drop off. One coupon per customer. May not be combined with any other coupons or offers.</p>
                            </div>
                            <div className="flex_box">
                                <div className="coupon_logo">
                                    <img src={logo} alt="Deluxe Cleaners"/>
                                </div>
                                <div className="coupon_expiration">
                                    <span className="expiration">No expiration</span>
                                </div>
                                <h2 className="coupon_heading">10% OFF</h2>
                                <h3 className="coupon_title">Comforters</h3>
                                <p className="coupon_description">Must present during drop off. One coupon per customer. May not be combined with any other coupons or offers.</p>
                            </div>
                            <div className="flex_box">
                                <div className="coupon_logo">
                                    <img src={logo} alt="Deluxe Cleaners"/>
                                </div>
                                <div className="coupon_expiration">
                                    <span className="expiration">No expiration</span>
                                </div>
                                <h2 className="coupon_heading">10% OFF</h2>
                                <h3 className="coupon_title">Wednesdays &amp; Thurdsdays</h3>
                                <p className="coupon_description">Must present during drop off. Incoming orders of $20 or more. One coupon per customer. May not be combined with any other coupons or offers. Dry Cleaning and Laundry Only.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )    
}
export default Coupons;