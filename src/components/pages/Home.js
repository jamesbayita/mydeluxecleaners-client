import React ,{useState} from 'react';
import Carousel from '../other/Carousel';
import {Link} from 'react-router-dom';
import Footer from '../other/Footer'
import Form from '../other/Form';
import DryClean from '../../img/DryClean.svg';
import Bridal from '../../img/BridalTwo.svg';
import LaundryShirt from '../../img/LaundryShirt.svg';
import Alterations from '../../img/Alterations.svg'
import Bedding from '../../img/Bedding.svg'


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
                <div className="block_wrapper">
                    <div className="row_flex_wrapper">
                        <div className="s_container">
                            <div className="s_item_container">
                                <img className="iconImage" src={DryClean} alt="service icon"/>
                            </div>
                            <div className="component_title">
                                <span className="andSpan">Dry Cleaning</span>
                            </div>
                        </div>
                        <div className="s_container">
                            <div className="s_item_container">
                            <img className="iconImage" src={Bridal} alt="service icon"/>
                            </div>
                            <div className="component_title">
                                <span className="andSpan">Bridal Care</span>
                            </div>
                        </div>
                        <div className="s_container">
                            <div className="s_item_container">
                            <img className="iconImage" src={LaundryShirt} alt="service icon"/>
                            </div>
                            <div className="component_title">
                                <span className="andSpan">Shirt Laundry</span>
                            </div>
                        </div>
                        <div className="s_container">
                            <div className="s_item_container">
                            <img className="iconImage" src={Bedding} alt="service icon"/>
                            </div>
                            <div className="component_title">
                                <span className="andSpan">Bedding</span>
                            </div>
                        </div>
                        <div className="s_container">
                            <div className="s_item_container">
                            <img className="iconImage" src={Alterations} alt="service icon"/>
                            </div>
                            <div className="component_title">
                                <span className="andSpan">Alterations</span>
                            </div>
                        </div>
                        <div className="s_container">
                            <div className="s_item_container">
                            <img className="iconImage" src={Bridal} alt="service icon"/>
                            </div>
                            <div className="component_title">
                                <span className="andSpan">Specialty Items</span>
                            </div>
                        </div>
                        <div className="s_container">
                            <div className="s_item_container">
                            <img className="iconImage" src={Bridal} alt="service icon"/>
                            </div>
                            <div className="component_title">
                                <span className="andSpan">Fine Linens</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block_03">
                <div className="container_03">
                    <div className="about_container_03">
                        <div className="heading_03">
                            <h1>About</h1>
                            <span></span>
                        </div>
                        <div className="description_container_03">
                            <p>Since 2008, we have been providing garment care services for our community. Ranging from Dry Cleaning, Alterations, and Laundry, we have built a customer base that trusts in our service and mission. We do things differently and believe in building a personal relationship with all of our customers. As well as maintaining high standards from the second you walk into our stores. When it comes to our operations, we believe quality and customer service go hand in hand. All of these factors have cemented us as a top-rated business in our industry. We will continue to work off of these values and hopefully serve our community for the next 10 years.</p>
                        </div>
                        <div className="learn_more_03">
                            <Link className="learn_more_link_03" to={'/about'}>Learn More</Link>
                        </div>
                    </div>
                    <div className="video_container_03">
                        <div className="video_wrapper_03">
                            <div className="center_03">
                            <div className="wistia_responsive_padding"  style={{padding:"56.25% 0 0 0",position:"relative"}}>
                                <div className="wistia_responsive_wrapper" style={{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}>
                                    <iframe src="https://fast.wistia.net/embed/iframe/1xtfswqyqg?videoFoam=true&autoPlay=false" title="Business Card Video"
                                    allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen msallowfullscreen="true" width="100%" height="100%"></iframe>
                                    </div>
                                </div>
                            <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
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
                                    <h3>Two Day Return</h3>
                                </div>
                                <div className="summary_032">
                                    <p>Enjoy a two-day return on Dry Cleaning and Laundry items. Our system will automatically send you a text message notification letting you know your items are racked and ready to be picked up.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i className="fas fa-sitemap fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Fully Owned &amp; Operated</h3>
                                </div>
                                <div className="summary_032">
                                    <p>All aspects of our business including locations and fulfillment centers are privately owned and operated. <span className="bold">We do not</span> send your garments out to third party vendors. This allows us to maintain quality and reliability.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i className="fas fa-handshake fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Reliable Service</h3>
                                </div>
                                <div className="summary_032">
                                    <p>At Deluxe, we pride ourselves on maintaining high standards for your garments. Our superior customer service and on-time delivery has cemented us as a top-rated business in our industry.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i className="fas fa-leaf fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Eco-Friendly</h3>
                                </div>
                                <div className="summary_032">
                                    <p>We believe in taking care of our community. Deluxe places top priority on providing a healthy environment for our employees and customers. Ask us about our process on your next visit.</p>
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
                </section>
            </div>
            <Footer/>
        </div> 
    )
}