import React from 'react';
import Map from '../other/GoogleMap';

function Locations() {
    return(
        <div className="Wrapper_locations">
            <div className="locations_app">
                <div className="flex_wrapper">
                    <Map className="Map"/>
                </div>
            </div>
        </div>
    )
}

export default Locations;