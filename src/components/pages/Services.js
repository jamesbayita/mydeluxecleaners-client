import React from 'react';
import Footer from '../other/Footer';
import Bridal from '../../img/home-3.jpeg';
import Bedding from '../../img/bedding.jpg';
import DryClean from '../../img/dryCleaningImg.jpeg';
import Laundry from '../../img/shirts.jpg';
import Alterations from '../../img/home-2.jpeg';
import Delivery from '../../img/home-4.jpeg';
import WashAndFold from '../../img/wash.jpg';
import Linen from '../../img/linen.jpg';
import Leather from '../../img/leather.jpg'

function Services() {
    return(
        <div className="Home-Wrapper">
            <div className="service_h1_container">
                <h1 className="servicesTitle">Services</h1>
            </div>
            <div className="services_container">
                <div className="services_flex">
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={DryClean} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Dry Cleaning</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={Laundry} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Laundry</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={Bridal} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Bridal Care</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={Alterations} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Alterations</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={Linen} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Fine Linens</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={Bedding} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Bedding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={Leather} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Leather &amp; Suede</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={WashAndFold} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Wash &amp; Fold</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="image_container_services">
                            <img src={Delivery} alt="Dry Clean"/>
                        </div>
                        <div className="description_container_services">
                            <h2>Pick Up &amp; Delivery</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;