import React, {useEffect} from 'react';
import Map from '../other/GoogleMap';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu'

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
            <NavMenu/>
            <NavBar/>
            <div className="offsetContainer">
                <Map />
            </div>
        </>
    )
}

export default Locations;