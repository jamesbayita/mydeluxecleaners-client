import React from 'react';
import Footer from '../other/Footer';
// import {Link} from 'react-router-dom';
import jones from '../../img/jones.jpg'
import windy from '../../img/windy.jpg'
import stephanie from '../../img/stephanie.jpg'
import horizon from '../../img/horizon.jpg'


function Locations() {
    return(
        <div className="Home-Wrapper">
            <div className="locations_block_01">
                <div className="locations_h1_container">
                    <h1>Locations</h1>
                    <span></span>
                </div>
                <div className="locations_p_container">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam tempora odit id quo! Error labore quae voluptatum non cupiditate unde deserunt illo tenetur aliquid, ducimus laboriosam rem iste aspernatur itaque?</p>
                    <br/>
                    <span></span>
                </div>
                <div className="background">
                <div className="stores_wrapper">
                    <div className="s_wrapper_01">
                        <div className="store_container">
                            <div className="flex_container_image">
                                <div className="store_img_container">
                                    <img src={stephanie} alt="stephani"/>
                                </div>
                                <div className="info_box_locations">
                                    <div className="store_name_container">
                                        <h2>Stephanie @ Sunset</h2>
                                    </div>
                                    <div className="store_info_container">
                                        <div className="center_info_01">
                                            <p className="line_one">651 N Stephanie St.</p>
                                            <p className="line_two">Henderson NV 89014</p>
                                            <a className="phoneNumber" href="tel:+1(702)982-7668">(702) 982-7668</a>
                                            <a className="addressLine" href="https://flaircleaners.com/locations/">Get Directions</a>
                                        </div>
                                    </div>
                                    <div className="store_page_link">
                                        <a href="https://flaircleaners.com/locations/">More Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="store_container">
                            <div className="flex_container_image">
                                <div className="store_img_container">
                                    <img src={horizon} alt="horizon"/>
                                </div>
                                <div className="info_box_locations">
                                    <div className="store_name_container">
                                        <h2>Horizon Ridge @ Arroyo Grande</h2>
                                    </div>
                                    <div className="store_info_container">
                                        <div className="center_info_01">
                                            <p className="line_one">1550 W Horizon Ridge Pkwy</p>
                                            <p className="line_two">Henderson NV 89012</p>
                                            <a className="phoneNumber" href="tel:+1(702)260-8567">(702) 260-8567</a>
                                            <a className="addressLine" href="https://flaircleaners.com/locations/">Get Directions</a>
                                        </div>
                                    </div>
                                    <div className="store_page_link">
                                        <a href="/home">More Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="store_container">
                            <div className="flex_container_image">
                                <div className="store_img_container">
                                    <img src={jones} alt="jones"/>
                                </div>
                                <div className="info_box_locations">
                                    <div className="store_name_container">
                                        <h2>Jones @ Robindale</h2>
                                    </div>
                                    <div className="store_info_container">
                                        <div className="center_info_01">
                                            <p className="line_one">7720 S Jones Blvd</p>
                                            <p className="line_two">Las Vegas NV 89139</p>
                                            <a className="phoneNumber" href="tel:+1(702)242-5326">(702) 242-5326</a>
                                            <a className="addressLine" href="https://flaircleaners.com/locations/">Get Directions</a>
                                        </div>
                                    </div>
                                    <div className="store_page_link">
                                        <a href="/home">More Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="store_container">
                            <div className="flex_container_image">
                                <div className="store_img_container">
                                    <img src={windy} alt="windy"/>
                                </div>
                                <div className="info_box_locations">
                                    <div className="store_name_container">
                                        <h2>Las Vegas Blvd @ Sunset</h2>
                                    </div>
                                    <div className="store_info_container">
                                        <div className="center_info_01">
                                            <p className="line_one">6436 Windy Rd</p>
                                            <p className="line_two">Las Vegas NV 89119</p>
                                            <a className="phoneNumber" href="tel:+1(702)270-3160">(702) 270-3160</a>
                                            <a className="addressLine" href="https://flaircleaners.com/locations/">Get Directions</a>
                                        </div>
                                    </div>
                                    <div className="store_page_link">
                                        <a href="/home">More Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Locations;