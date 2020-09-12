import React from 'react';
import image01 from '../../img/optimized01.jpg';
import image02 from '../../img/optimized11.jpg';


export default [
    {
        img: image01,
        alt: 'Dry Cleaning and Laundry Delivery Service',
        title: "Pick up & Delivery",
        content: (
            <p>Enjoy superior quality, full-service garment care without having to leave your home or office. We are now offering pick up and delivery service for Las Vegas and Henderson residents. Click on the link below to schedule a pick-up.</p>
        ),
        callToAction: (
            <div className="button_container">
                <a className="carousel_button schedule_link" href="https://www.sudzy.co/w/index.html?cleaner=deluxe-cleaners">Schedule Pick Up</a>
            </div>
        )
    },{
        img: image02,
        alt: 'Dry Clean',
        title: "Complete Garment Care",
        content: (
            <p>Since 2008, we've provided professional Dry Cleaning, Laundry, and Alteration services. A full range of garment care solutions for a seamless experience.</p>
        )
    }
]