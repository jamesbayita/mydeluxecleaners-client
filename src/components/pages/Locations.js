import React, {useEffect} from 'react';
import Map from '../other/GoogleMap';

function Locations() {
    useEffect(()=> {
        let wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('location_active');
        return function () {
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