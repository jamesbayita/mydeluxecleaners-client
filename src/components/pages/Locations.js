import React, {useEffect} from 'react';
import Map from '../other/GoogleMap';

function Locations() {
    return(
        <main className="Locations_main">
        <div className="location-top" />
            <div className="locations_flex_wrapper">
                <Map/>
            </div>
        </main>
    )
}

export default Locations;