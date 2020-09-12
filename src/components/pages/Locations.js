import React, {useEffect} from 'react';
import Map from '../other/GoogleMap';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu'
import {Helmet} from 'react-helmet';

function Locations() {
    useEffect(()=> {
        let htmlElement = document.querySelector('html');
        htmlElement.classList.add('locations_overflow');
        let body = document.body;
        body.classList.add('locations_overflow');
        return function () {
            htmlElement.classList.remove('locations_overflow');
            body.classList.remove('locations_overflow');
        }
    },[])
    return(
        <>
             <Helmet>
                <title>Locations</title>
                <meta charSet="utf-8" name="Locations" content="We offer four locations across Las Vegas and Henderson. Each with the same superior quality, service, and convenience. Find a location near you with our store locator."/>
            </Helmet>
            <NavMenu/>
            <NavBar/>
            <div className="offsetContainer">
                <Map />
            </div>
        </>
    )
}

export default Locations;