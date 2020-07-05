import React from 'react';
import {Link} from 'react-router-dom';
function Overlay({title ,address, phone, phoneLink, hours,services}) {
    function closeOverlay() {
        const objStyle = {
            "opacity": "0",
            "z-index": "-10"
        }
        let element = document.querySelector('.overlay');
        let locationList = document.querySelector('#locationList');
        let mapElement = document.querySelector('.Map');
        mapElement.style.display = "block";
        locationList.style.overflow = "scroll";
        Object.assign(element.style, objStyle);
    }
    return(
        <div className="overlay">
            <div className="flex_overlay">
                <div className="closeButtonContainer">
                    <button className="closeOverlay" onClick={closeOverlay}><i className="fas fa-times fa-2x"></i></button>
                </div>
                <div className="flex_store_info">
                    <div className="location_title">
                        <h2>{title}</h2>
                    </div>
                    <div className="index_info_container">
                        <div className="address_container">
                            <p>
                                <span className="address_line_one">{address.street}</span>
                                {address.suite && <span className="address_suite">{address.suite}</span>}
                                <span className="address_line_two">{address.city}</span>
                            </p>
                        </div>
                        <div className="index_links_container">
                            <div className="phone_container">
                                <a className="phone_link_1" href={phoneLink}><i className="fas fa-phone-alt "></i>{phone}</a>
                                <a className="getAddress" href="google.com"><i className="fas fa-directions"></i>Get Directions</a>
                            </div>
                        </div>
                    </div>
                    <div className="index_hours_container">
                        <div className="hours_heading_container">
                            <h2>Hours</h2>
                        </div>
                        <div className="hours_container">
                            <ul className="schedule">
                                <div className="scheduleItem">
                                    <span className="scheduleDay">Monday</span>
                                    <span className="scheduleTime">{hours.Monday}</span>
                                </div>
                                <div className="scheduleItem">
                                    <span className="scheduleDay">Tuesday</span>
                                    <span className="scheduleTime">{hours.Tuesday}</span>
                                </div>
                                <div className="scheduleItem">
                                    <span className="scheduleDay">Wednesday</span>
                                    <span className="scheduleTime">{hours.Wednesday}</span>
                                </div>
                                <div className="scheduleItem">
                                    <span className="scheduleDay">Thursday</span>
                                    <span className="scheduleTime">{hours.Thursday}</span>
                                </div>
                                <div className="scheduleItem">
                                    <span className="scheduleDay">Friday</span>
                                    <span className="scheduleTime">{hours.Friday}</span>
                                </div>
                                <div className="scheduleItem">
                                    <span className="scheduleDay">Saturday</span>
                                    <span className="scheduleTime">{hours.Saturday}</span>
                                </div>
                                <div className="scheduleItem">
                                    <span className="scheduleDay">Sunday</span>
                                    <span className="scheduleTime">{hours.Sunday}</span>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="location_services_container">
                        <div className="hours_heading_container">
                            <h2>Services</h2>
                        </div>
                        <div className="services_available_con">
                            <ul>
                                {services.map((service, index) => (
                                    <li className="service_list" key={index}><Link to={'/services'}>{service}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay;