import React, {useEffect} from 'react';
import Map from '../other/GoogleMap';

function Locations() {
    useEffect(()=> {
        let header = document.querySelector('#header');
        let wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('location_active');
        header.style.position = 'relative';
        return function () {
            header.style.position = 'fixed';
            wrapper.classList.remove('location_active');
        }
    })
    return(
        <main className="Locations_main">
            <div className="locations_flex_wrapper">
                <Map/>
            </div>
        </main>
    )
}

export default Locations;