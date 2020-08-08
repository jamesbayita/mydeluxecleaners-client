import React from 'react';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu'
import Footer from '../other/Footer';
import DryClean from '../../img/DryClean.jpeg';
import Laundry from '../../img/shirts.jpg';
import Leather from '../../img/leather.jpg';
import Linen from '../../img/linen.jpg';
import Bridal from '../../img/home-3.jpeg';
import Wash from '../../img/wash.jpg';


function Services() {
    return(
        <div className="Home-Wrapper">
            <NavBar />
            <NavMenu />
            <div className="services-wrapper">
                <div className="services-jumbotron">
                    <div className="j-intro">
                        <div className="verticle-align">
                        <h2 className="j-heading">Services</h2>
                        </div>
                    </div>
                    <div className="j-flex-wrapper">
                        <div className="j-image-container">
                            <img id="Bridal" className="service_image" src={Laundry} alt="Laundry"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-info">
                <div className="s-container-two">
                    <div className="section-heading">
                        <p className="j-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti similique nostrum dolore, neque pariatur eius dolorum enim. Corporis illo, dolorum, et libero accusamus dolor voluptatum hic, reprehenderit vitae modi esse.</p>
                    </div>
                    <div className="s-flex-wrapper">
                        <div className="feature-item">
                            
                            <div className="f-row">
                                <h1 className="f-number">01</h1>
                            </div>
                            <div className="f-row">
                                <h2 className="feature-heading">Dry Cleaning</h2>
                            </div>
                            <div className="f-row">
                                <p className="feature-paragraph">Our highly trained staff follows strict Multi Point Inspection Guidelines beginning with stain inspection and treatment. Followed by cleaning using our environmentally friendly solvent.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="f-row">
                                <h1 className="f-number">02</h1>
                            </div>
                            <div className="f-row">
                                <h2 className="feature-heading">Laundered Shirts</h2>
                            </div>
                            <div className="f-row">
                                 <p className="feature-paragraph">Our shirt cleaning specialist inspect and treat every shirt for stains paying special attention to collars and cuffs. Shirts are then washed and pressed to perfection.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="f-row">
                                <h1 className="f-number">03</h1>
                            </div>
                            <div className="f-row">
                                <h2 className="feature-heading">Bridal</h2>
                            </div>
                            <div className="f-row">
                                 <p className="feature-paragraph">Before your big day count on our alterations specialist to make sure your dress fits and looks perfect. Our preservation technique protects from yellowing, permanent creasing, mildew and mold, oxidation spots, and dust.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="f-row">
                                <h1 className="f-number">04</h1>
                            </div>
                            <div className="f-row">
                                <h2 className="feature-heading">Linens &amp; Leather</h2>
                            </div>
                            <div className="f-row">
                                 <p className="feature-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate iure, id vitae eligendi optio praesentium voluptatem maxime fuga. Corrupti quam odit ab voluptatem ratione aliquid illo laudantium facere soluta?</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="f-row">
                                <h1 className="f-number">05</h1>
                            </div>
                            <div className="f-row">
                                <h2 className="feature-heading">Bedding</h2>
                            </div>
                            <div className="f-row">
                                 <p className="feature-paragraph">We specialize in cleaning and pressing a variety of households items such as drapes, bedspreads, table cloths and shams. Let us help you keep your home clean.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="f-row">
                                <h1 className="f-number">06</h1>
                            </div>
                            <div className="f-row">
                                <h2 className="feature-heading">More Services</h2>
                            </div>
                            <div className="f-row">
                                 <p className="feature-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate iure, id vitae eligendi optio praesentium voluptatem maxime fuga. Corrupti quam odit ab voluptatem ratione aliquid illo laudantium facere soluta?</p>
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