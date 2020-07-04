import React, {useEffect, useRef} from 'react';
import { useState } from 'react';
import Item from '../other/locationItem';
import stores from '../helpers/stores.json';

// VARIABLES
const GOOGLE_MAP_API_KEY = 'AIzaSyATje7L6rUQO7t2CT-HjdW7vSrqIL8kos4';

function Map({options, className,stores}) {
    const ref = useRef();
    const [map, setMap] = useState();
    
    useEffect(() => {
        const onLoad = () => setMap(new window.google.maps.Map(ref.current, options));
        if(!window.google) {
            const script = document.createElement(`script`);
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
            document.head.append(script);
            script.addEventListener('load', onLoad)
        } else onLoad()
    }, [options])

    function toggleActive(id) {
        if(document.querySelector('#locationList .location_li.active') !== null ) {
            document.querySelector('#locationList .location_li.active').classList.remove('active');
        }
        let element = document.querySelector(`.location_li.location_${id}`);
        element.classList.add('active');
    }
    // once map is displayed, add markers to map
    if(map) {   
        map.data.addGeoJson(stores);
        map.data.addListener('click', function (event) {
            const position = event.feature.getGeometry().get();
            map.panTo(position);
            toggleActive(event.feature.j.storeid);
        });
    }

    function handleOnClick(coordinates){
        map.panTo({lat: coordinates[1], lng: coordinates[0]});
    }

    return(
        <>
            <div id="locationList" className="location_container">
                {stores.features.map((store, index)=> (
                        <Item 
                            key={index}
                            crossing={store.properties.crossing}
                            coordinates={stores.features[index].geometry.coordinates}
                            handleOnClick={handleOnClick}
                            toggleSelector={toggleActive}
                            id={store.properties.storeid}
                            city={store.properties.city}
                    ></Item>
                ))}
            </div>
            <div {...{ref, className}}></div>
        </>
    )
}

Map.defaultProps = {
    options: {
        center: {lat: 36.054218, lng: -115.1363914},
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
    },
    stores
}

export default Map;