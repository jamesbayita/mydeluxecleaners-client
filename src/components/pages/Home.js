import React ,{useState} from 'react';
import Carousel from '../other/Carousel';
import {Link} from 'react-router-dom';
import Footer from '../other/Footer'
import Form from '../other/Form';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu';
import Services from '../../img/optimized06.png';
import Locations from '../../img/optimized09.jpg';
import image04 from '../../img/optimized04.jpg';
import about_image from '../../img/optimized08.jpg';
import webm from '../../img/media/services.webm';
import mp4 from '../../img/media/services.mp4';
import {Helmet} from 'react-helmet';

// HOME PAGE
export default function Home(){
    const [res, setRes] = useState();
    let [isLoading, setIsLoading] = useState(false);

    return(
        <div className="Home-Wrapper">
             <Helmet>
                <title>Deluxe Cleaners and Alterations</title>
                <meta charSet="utf-8" name="Deluxe Cleaners &amp; Alterations" content="Professional Dry Cleaning and Alterations in Henderson and Las Vegas. High quality alterations and tailoring. Pickup and Delivery service available."/>
            </Helmet>
            <NavBar/>
            <NavMenu />
            <div className="block_01">
                <Carousel/>
            </div>
            <div className="block_02">
                <div className="block_wrapper">
                    <div className="box_content flex_one">
                        <div className="image_contain">
                            <img className="locations_img" src={about_image} alt="Dry Cleaning and Alterations"/>
                        </div>
                        <div className="description_flex">
                            <div className="description_heading">
                                <h2>Locations</h2>
                            </div>
                            <div className="description_p">
                                <p>We offer four locations across Las Vegas and Henderson. Each with the same superior quality, service, and convenience. Find a location near you with our store locator.</p>
                            </div>
                            <div className="description_link" >
                                <Link to={'/locations'} className="learn_more_link_03">View Locations</Link>
                            </div>
                        </div>
                    </div>
                    <div className="box_content flex_two">
                        <div className="image_contain">
                            <img className="services_img" src={Services} alt="Dry Cleaning Service"/>
                        </div>
                        <div className="description_flex">
                            <div className="description_heading">
                                <h2>Services</h2>
                            </div>
                            <div className="description_p">
                                <p>Deluxe provides you with a full range of garment care solutions for most garment types. Including but not limited to bridal gowns, suits, and comforters. Learn more about our services.</p>
                            </div>
                            <div className="description_link">
                                <Link to={'/services'} className="learn_more_link_03">View Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="box_content flex_three">
                        <div className="image_contain">
                            <img className="delivery_img" src={image04} alt="Alterations"/>
                        </div>
                        <div className="description_flex">
                            <div className="description_heading">
                                <h2>Alterations</h2>
                            </div>
                            <div className="description_p">
                                <p>Alterations is one of our core services. From resizing suits to adjusting bridal gowns, we have built a reputation for quality and reliability. Learn more about our Alterations service.</p>
                            </div>
                            <div className="description_link">
                                <Link to={'/alterations'} className="learn_more_link_03">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block_03">
                <div className="container_03">
                    <div className="about_container_03">
                        <div className="heading_03">
                            <h1>Who we are</h1>
                            <span></span>
                        </div>
                        <div className="description_container_03">
                            <p>Deluxe Cleaners is built around three core beliefs. Customer-Centric Service, Commitment to operational excellence, and reputation for reliability. These principles have helped us cultivate a loyal customer base that believes and trusts in our service. For over 10 years, we have proudly served and grown with our customers. From high school students bringing in their prom dresses to new college graduates getting their robes ready for a graduation ceremony. Deluxe Cleaners has built a reputation for excellence, and we are here to continue this tradition into the future.</p>
                        </div>
                    </div>
                    <div className="about_container_032">
                        <div className="image-container">
                            <img className="about_image" src={Locations} alt="Deluxe Cleaners &amp; Alterations Locations"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-video">
                <div className="content-wrapper">
                    <div className="video-wrapper">
                        <video className="webmVideo" playsInline={true} autoPlay={true} muted={true} loop={true}>
                            <source src={webm} />
                            <source src={mp4} />
                        </video>
                    </div>
                    <div className="flex-wrapper">
                        <div className="action-container">
                            <div className="content-div">
                                <h2>Our Process</h2>
                                <p>Learn more about our garment care process, from beginning to end.</p>
                                    <span className="wistia_embed wistia_async_1xtfswqyqg popover=true popoverContent=link" style={{display:"inline",position:"relative"}}>
                                    <button >
                                        <div className="flex-container-button">
                                            <div className="fa-icon-container">
                                                <i className="fas fa-play-circle fa-6x"></i>
                                            </div>
                                            <div className="span-wrapper">
                                                <span>Click to watch</span>
                                            </div>
                                        </div>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block_032">
                <div className="wrapper_032">
                    <div className="items_032">
                        <div className="items_wrapper_032">
                            <div className="item_container_032">
                                <div className="icon_container_032">
                                    <i className="fas fa-calendar-day fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Next Day Service</h3>
                                </div>
                                <div className="summary_032">
                                    <p>We offer a standard next day return on Dry Cleaning and Laundry orders <span className="bold">(Monday - Friday)</span>. Our system will automatically send you a text message notification once your order is complete and ready for pickup.</p>
                                    
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i className="fas fa-sitemap fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>No Outsourcing</h3>
                                </div>
                                <div className="summary_032">
                                    <p>All aspects of our services, including locations and fulfillment centers, are privately owned and managed. <span className="bold">We do not</span> outsource your garments to third-party service providers. This allows us to maintain quality and reliability.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i className="fas fa-handshake fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Reliability</h3>
                                </div>
                                <div className="summary_032">
                                    <p>At Deluxe, providing and maintaining high standards for our customers is paramount. Our superior customer service and on-time delivery has cemented us as a top-rated business in our community.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i className="fas fa-leaf fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Family Owned &amp; Operated</h3>
                                </div>
                                <div className="summary_032">
                                    <p>We strive to make a difference. Since 2008 we have impacted the lives of our customers, employees, and our neighbors. As a small local business, we will continue to provide essential services for our community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    <div className="coupon_container">
                            <div className="inner_container">
                                <div className="coupon_flex">
                                    <div className="coupon_image">
                                    <i className="fas fa-money-check-alt fa-5x"></i>
                                    </div>
                                    <h2 className="coupons_heading">Coupons</h2>
                                    <p className='coupons_p'>Take advantage of our online savings. New offers listed monthly.</p>
                                    <Link className="coupons_link_cont" to={'/coupons'}>View Coupons</Link>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div> 
    )
}