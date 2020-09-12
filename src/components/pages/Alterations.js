import React from 'react';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu';
import Footer from '../other/Footer';
import {Link} from 'react-router-dom';
import image from '../../img/optimized03.jpg';
import {Helmet} from 'react-helmet';

function Alterations() {
    return(
        <div className="Home-Wrapper">
            <Helmet>
                <title>Alterations</title>
                <meta
                    charSet="utf-8"
                    name="Alterations and Tailoring"
                    content="We are in the business of providing confidence through the peices we alter for our customers."
                />
            </Helmet>
            <NavBar />
            <NavMenu />
            <div className="alterations-container">
                <div className="page_heading">
                    <h1>Alterations</h1>
                </div>
                <div className="alterations-wrapper">
                    <div className="copy-wrapper">
                        <div className="copy-container">
                            <h2 id="copy-heading">A history for quality work</h2>
                            <p>There is a certain feeling you get when a piece of clothing fits you perfectly. It's a feeling of security that the piece you are wearing fits just right, complimenting your body type. As if that garment was specifically made just for you.</p>
                            <br/>
                            <p id="quote">"We are in the business of providing confidence through the peices we alter for our customers."</p>
                            <br/>
                            <p>Our process begins by identifying our customer's vision for their clothing piece. After that, we begin adjustments with pins that will not damage even the most gentle fabrics. Once you are 100% satisfied with what you see, we get to work. It's that simple!</p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alt02-section">
                <div className="alt-flex-wrapper">
                    <div className="alt-half">
                        <img className="alterations-image" src={image} alt="Alterations and Tailoring"/>
                    </div>
                    <div id="right-copy" className="alt-half">
                        <div className="copy-align-middle">
                            <h2>We believe in the quality our service, which is why we ensure our customers with 100% guaranteed satisfaction.</h2>
                            <p>We understand the value of our relationships with customers. If you are not completely satisfied with our work, we will redo your garment until we get it right, 100% free of charge.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alterations-wrapper">
                <div className="copy-wrapper">
                    <h2 className="heading-sect03">Appointments, question, concerns</h2>
                    <p className="copy-sect03">Deluxe offers Alteration and Tailoring services at all of our locations. You may come in at your convenience. If you'd like to schedule an appointment ahead of time you are more than welcome to do so. For any questions regarding turn around times, pricing, or to schedule an appointment please give us a call at any of our four locations. Click the link below to find a location near you.</p>
                    <Link className="button-style" to={'/locations'}>View Locations</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Alterations;