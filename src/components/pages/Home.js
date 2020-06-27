import React ,{useState} from 'react';
import Carousel from '../other/Carousel';
import {Link} from 'react-router-dom';
import Footer from '../other/Footer'
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
            <div className="block_03">
                <div className="container_03">
                    <div className="about_container_03">
                        <div className="heading_03">
                            <h1>About</h1>
                            <span></span>
                        </div>
                        <div className="description_container_03">
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                        </div>
                        <div className="learn_more_03">
                            <Link className="learn_more_link_03" to={'/about'}>Learn More</Link>
                        </div>
                    </div>
                    <div className="video_container_03">
                        <div className="video_wrapper_03">
                            <div className="center_03">
                            <div class="wistia_responsive_padding"  style={{padding:"56.25% 0 0 0",position:"relative"}}>
                                <div className="wistia_responsive_wrapper" style={{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}>
                                    <iframe src="https://fast.wistia.net/embed/iframe/1xtfswqyqg?videoFoam=true&autoPlay=false" title="Business Card Video"
                                    allow="autoplay=false; fullscreen" 
                                    allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe>
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
                    <div className="heading_032">
                        <h1>Built around our customers</h1>
                    </div>
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
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse minima aperiam illo sunt architecto explicabo dolorem provident repellat deserunt, vero magnam ex voluptatem, vel doloremque eum atque! Sunt, vitae.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i class="fas fa-sitemap fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Fully Owned &amp; Operated</h3>
                                </div>
                                <div className="summary_032">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse minima aperiam illo sunt architecto explicabo dolorem provident repellat deserunt, vero magnam ex voluptatem, vel doloremque eum atque! Sunt, vitae.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i class="fas fa-handshake fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Reliable Service</h3>
                                </div>
                                <div className="summary_032">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse minima aperiam illo sunt architecto explicabo dolorem provident repellat deserunt, vero magnam ex voluptatem, vel doloremque eum atque! Sunt, vitae.</p>
                                </div>
                            </div>
                            <div className="item_container_032">
                            <div className="icon_container_032">
                                <i class="fas fa-leaf fa-lg"></i>
                                </div>
                                <div className="title_032">
                                    <h3>Eco-Friendly</h3>
                                </div>
                                <div className="summary_032">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse minima aperiam illo sunt architecto explicabo dolorem provident repellat deserunt, vero magnam ex voluptatem, vel doloremque eum atque! Sunt, vitae.</p>
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