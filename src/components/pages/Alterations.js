import React from 'react';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu';
import Footer from '../other/Footer';
import Image from '../../img/home-2.jpeg';


function Alterations() {
    return(
        <div className="Home-Wrapper">
            <NavBar />
            <NavMenu />
            <div className="alterations_heading">
                    <img src={Image} alt="Alterations"/>
                <div className="a_t">
                    <div className="a_c">
                        <h2>Alterations</h2>
                    </div>
                </div>
            </div>
            <div className="page_header">
                <div className="page_container_two_top">
                    <p className="page_p_two">Since 2008, we've been providing professional alterations and tailoring services. From resizing suits to working with bridal dresses, we have built a reputation for high quality and reliability.</p>
                </div>
            </div>
            <div className="page_container">
                <div className="a_f">
                    <div className="a_i">
                        <h2>Shorten/lengthen hems</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Original jean hems</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Shorten/lengthen sleeves</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Take sides in/out</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Waist/seat adjustments</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Zipper replacements</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Dress straps</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Buttons</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                    <div className="a_i">
                        <h2>Bridal gown adjustments</h2>
                        <div className="a_li_con">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id saepe repellendus, explicabo consequuntur recusandae, quos velit numquam officia laudantium, maxime ullam esse! Sit eveniet impedit quis officia assumenda.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Alterations;