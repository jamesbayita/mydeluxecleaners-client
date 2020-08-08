import React from 'react';

function Overlay({hideOverlay, title, hours, phone, phoneLink, storeid, address, directions, services}) {
    return(
        <div id="Overlay">
            <div className="overlay_container">
                <div className="flex_container_overlay">
                    <div className="overlay_header">
                        <button className="bt-close-two"><i className="fas fa-times fa-2x" onClick={hideOverlay}></i></button>
                    </div>
                    <div className="flex_grow">
                        <article className="more_info_article">
                            <section className="pb pb1">
                                <div className="header_block">
                                    <h1>{title}</h1>
                                </div>
                                <div className="address_block">
                                    <div className="address_container_two">
                                        <p>
                                            <span>{address.street}</span>
                                            {address.suite && <span>{address.suite}</span>}
                                            <span>{address.city}</span>
                                        </p>
                                    </div>
                                    <div className="address_links">
                                        <a className="call_phone_link" href={phoneLink}><i className="fas fa-phone fa-md"></i>{phone}</a>
                                        <a className="getDirectionsLink" href={directions} target="_blank" rel="noopener noreferrer"><i className="fas fa-directions fa-md"></i>Get Directions </a>
                                    </div>
                                </div>
                            </section>
                            <section className="pb pb2">
                                <div>
                                    <h2 className="hours_heading">Hours</h2>
                                    <hr className="sb_rule"/>
                                    <ul className="operations_hours">
                                        <li className="list_item_hours">
                                            <span className="scheduleDay">Monday</span>
                                            <span className="scheduleTime">{hours.Monday}</span>
                                        </li>
                                        <li className="list_item_hours">
                                            <span className="scheduleDay">Tuesday</span>
                                            <span className="scheduleTime">{hours.Tuesday}</span>
                                        </li>
                                        <li className="list_item_hours">
                                            <span className="scheduleDay">Wednesday</span>
                                            <span className="scheduleTime">{hours.Wednesday}</span>
                                        </li>
                                        <li className="list_item_hours">
                                            <span className="scheduleDay">Thursday</span>
                                            <span className="scheduleTime">{hours.Thursday}</span>
                                        </li>
                                        <li className="list_item_hours">
                                            <span className="scheduleDay">Friday</span>
                                            <span className="scheduleTime">{hours.Friday}</span>
                                        </li>
                                        <li className="list_item_hours">
                                            <span className="scheduleDay">Saturday</span>
                                            <span className="scheduleTime">{hours.Saturday}</span>
                                        </li>
                                        <li className="list_item_hours">
                                            <span className="scheduleDay">Sunday</span>
                                            <span className="scheduleTime">{hours.Sunday}</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section className="pb pn3">
                                <div>
                                    <h2 className="hours_heading">Services</h2>
                                    <hr className="sb_rule"/>
                                    <ul className="services_ul">
                                        {services.map((service, index) => (
                                            <li className="feature_service" key={index}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay;