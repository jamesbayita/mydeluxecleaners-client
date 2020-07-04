import React from 'react';
import {Link} from 'react-router-dom'
import img01 from '../../img/windy.jpg'
import img02 from '../../img/home-2.jpeg';
import img03 from '../../img/home-4.jpeg'

export default [
    {
        img: img01,
        title: "Response to COVID-19",
        content: (
            <p>We’re in a situation, unlike anything we’ve faced before. We have taken the necessary precautions to protect you and your loved ones. Click on the link below for more information about our actions in response to these unprecedented times.</p>
        ),
        callToAction: (
            <Link className="covid_link" to={'/covid-info'}>More Info</Link>
        )
    },{
        img: img02,
        title: "Alterations & Tailoring",
        content: (
            <p>Since 2008, we've been providing professional alterations and tailoring services. It is the backbone of our core services. From resizing garments to working on bridal dresses, we have built a reputation for quality and reliability.</p>
        ),
        callToAction: (
            <Link className="carousel_button" to={'/alterations'}>More Info</Link>
        )
    }, {
        img: img03,
        title: "Pick up & Delivery",
        content: (
            <p>Enjoy superior quality, full-service garment care without having to leave your home or office. We are now offering pick up and delivery service for Las Vegas residents. Click on the link below for more information, or if you're ready to schedule a pick-up.</p>
        ),
        callToAction: (
            <div className="button_container">
                <Link className="carousel_button space_between" to={'/delivery'}>More Info</Link>
                <a className="carousel_button schedule_link" href="https://www.sudzy.co/w/index.html?cleaner=deluxe-cleaners">Schedule Pick Up</a>
            </div>
        )
    }
]