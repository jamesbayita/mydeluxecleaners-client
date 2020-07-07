import React, {useEffect, useRef} from 'react';
import { useState } from 'react';
import stores from '../helpers/stores.json';

// export api key as environment variable
const GOOGLE_MAP_API_KEY = 'AIzaSyATje7L6rUQO7t2CT-HjdW7vSrqIL8kos4';

// zoom level depends on window size
const zoomLevel = window.screen.width < 700 ? 11 : 12

function Map({options,stores}) {
    const ref = useRef();
    const [map, setMap] = useState()
    
    useEffect(() => {
        const onLoad = () => setMap(new window.google.maps.Map(ref.current, options));
        if(!window.google) {
            const script = document.createElement(`script`);
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
            document.head.append(script);
            script.addEventListener('load', onLoad)
        } else onLoad()
    }, [options])

    // once map is displayed, add markers to map
    if(map) {   
        map.data.addGeoJson(stores);
        map.data.addListener('click', function (event) {
            const position = event.feature.getGeometry().get();
            map.panTo(position);
        });
    }
    return(
        <>
            <div {...{ref}} className="Map"></div>
            <div className="list_container">
                <section className="base">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>    
            </div>
        </>
    )
}

Map.defaultProps = {
    options: {
        center: {lat: 36.054218, lng: -115.1363914},
        zoom: zoomLevel,
        mapTypeControl: false,
        streetViewControl: false,
    },
    stores
}

export default Map;