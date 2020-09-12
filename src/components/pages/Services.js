import React from 'react';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu'
import Footer from '../other/Footer';
import DryClean from '../../img/optimized11.jpg';
import Laundry from '../../img/optimized06.png';
import Bridal from '../../img/optimized02.jpg';
import Bedding from '../../img/optimized12.jpg';
import Linen from '../../img/optimized05.jpg';
import {Helmet} from 'react-helmet';

function Services() {
    return(
        <div className="Home-Wrapper">
            <Helmet>
                <title>Services</title>
                <meta charSet="utf-8" name="Services" content="Deluxe Cleaners & Alterations offers cleaning solutions for a range of garment types. We believe quality means treating each garment individually according to its specifications."/>
            </Helmet>
            <NavBar />
            <NavMenu />
            <div className="services-wrapper">
                <div className="page_heading">
                    <h1>Services</h1>
                </div>
                <div className="services-container">
                    <div className="services-heading">
                        <h2>We give your garments the attention they deserve</h2>
                        <div className="s-heading-p">
                            <p>Deluxe Cleaners & Alterations offers cleaning solutions for a range of garment types. We believe quality means treating each garment individually according to its specifications.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="s-body-container">
                        <div className="border-container">
                        <div className="s-flex-cont">
                                <div className="service-container description">
                                    <div className="align-vertical">
                                        <h2>Dry Cleaning</h2>
                                        <div className="s-cont-p">
                                            <p>At Deluxe, we understand that no two garments are the same. Our process considers textiles, colors, designs, etc. Combined with a 100% green cleaning solvent, your garments are guaranteed to be delivered in pristine condition every time.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-container">
                                    <img 
                                        className="service-image"
                                        src={DryClean}
                                        alt="Professional Dry Cleaning"
                                    />
                                </div>
                            <div className="flex-reverse">
                                <div className="service-container">
                                    <img 
                                        className="service-image"
                                        src={Laundry}
                                        alt="Laundered Shirts"
                                    />
                                </div>
                                <div className="service-container description">
                                    <div className="align-vertical">
                                        <h2>Laundered Shirts</h2>
                                        <div className="s-cont-p">
                                            <p>Laundered shirts are a staple in every wardrobe. We make sure to keep these items clean, pressed, and ready to wear for you. With special attention to cuffs and collars, our promise is to prolong the longevity of your shirts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-container description">
                                <div className="align-vertical">
                                    <h2>Bridal Care</h2>
                                    <div className="s-cont-p">
                                        <p>Our experts provide the highest quality of care for the most important dress you'll ever wear. We offer a full range of services for bridal gowns, professional cleaning, preservations, and alterations. You can trust your bridal gown is in the right hands.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-container">
                                <img 
                                    className="service-image"
                                    src={Bridal}
                                    alt="Bridal Care"
                                />
                            </div>
                            <div className="flex-reverse">
                                <div className="service-container">
                                    <img 
                                        className="service-image"
                                        src={Bedding}
                                        alt="Comforters"
                                    />
                                </div>
                                <div className="service-container description">
                                    <div className="align-vertical">
                                        <h2>Household Items</h2>
                                        <div className="s-cont-p">
                                            <p>We aren't limited to just everyday clothing. Comforters, duvets, and sheets are a staple in every household. Since bedding items come in different shapes and sizes, we assess the materials of your items to provide the proper cleaning method.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-container description">
                                <div className="align-vertical">
                                    <h2>Fine Linens</h2>
                                    <div className="s-cont-p">
                                        <p>Our experts identify textiles and fabrics that require special care. You can trust your linens will be treated according to their specific requirements. They are returned pressed and packaged neatly, particularly to prevent creases or unwanted marks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-container">
                                <img 
                                className="service-image"
                                src={Linen}
                                alt="Fine Linenes"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;