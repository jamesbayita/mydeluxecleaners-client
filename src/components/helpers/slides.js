import React from 'react';

import img01 from '../../img/home-4.jpeg';
import img02 from '../../img/home-2.jpeg';
import img03 from '../../img/home-3.jpeg';
import img04 from '../../img/home-1.png';

export default [
    {
        img: img01,
        title: "Home Pickup & Delivery",
        content: (
            <p>In response to these uncertain times, we are now offering home pickup and delivery. For more information click on the link below.</p>
        ),
        callToAction: (
            <button onClick={((e)=>console.log('hello'))}>Learn More</button>
        )
    },{
        img: img02,
        title: "Alterations & Tailoring",
        content: (
            <p>We've built a team of professional tailors and seamstresses that will work on your garments with care and attention to detail. ADD MORE...</p>
        ),
        callToAction: (
            <button>Learn More</button>
        )
    },{
        img: img03,
        title: "Professional Bridal Care",
        content: (
            <p>We specialize in cleaning, tailoring, and preserving bridal dresses. ADD MORE...</p>
        ),
        callToAction: (
            <button>Learn More</button>
        )
    }, {
        img: img04,
        title: "Serving Our Community",
        content: (
            <p>Since 2008, we have been serving our community with professional Dry Cleaning & Alterations. Our mission has always been to provide a superior customer experience, and the rest will continue to be history.</p>
        ),
        callToAction: (
            <button>Learn More</button>
        )
    }
]