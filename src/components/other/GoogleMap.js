import React, {useEffect, useRef, useState} from 'react';
import stores from '../helpers/stores.json';
import Locations from '../other/locationItem';
import Overlay from '../other/Overlay'
// API KEY
import {GOOGLE_MAP_API_KEY} from '../../config';
// zoom level depends on window size
const zoomLevel = window.screen.width < 700 ? 11 : 12

function Map({options,stores}) {
    const ref = useRef();
    const [map, setMap] = useState()
    const [activeID, setActiveID] = useState();
    const [storeData, setStoreData] = useState();
    
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
            setActiveID(event.feature.j.storeid);
            if(document.querySelector('#Overlay.invisible')){
                hideOverlay();
            }
        });
    }

    function handleOnClick(id,coordinates) {
        if(coordinates){
            map.panTo({lat: coordinates[1], lng: coordinates[0]});
        }
        setActiveID(id);
    }

    function showOverlay(storeIndex){
        let overlay = document.querySelector('#Overlay');
        let container = document.querySelector('#Overlay .overlay_container');
        container.classList.add('visible');
        overlay.classList.add('invisible');
        overlay.style.zIndex = '2';
        setStoreData(stores.features[storeIndex].properties)
    }
    function hideOverlay() {
        let overlay = document.querySelector('#Overlay');
        let container = document.querySelector('#Overlay .overlay_container');
        container.classList.remove('visible');
        overlay.classList.remove('invisible');
        overlay.style.zIndex = '0';
    }
    return(
        <div className="app_flex_container">
            <div {...{ref}} className="Map"></div>
            <div className="list_container">
                <section className="base">
                    <ul className="locations_ul">
                        {stores.features.map((data, index)=> (
                            <Locations
                                key={index}
                                storeIndex={index}
                                id={data.properties.storeid}
                                className={`location_article store_id_${data.properties.storeid} ${activeID === data.properties.storeid ? "active": ""}`}
                                title={data.properties.crossing}
                                city={data.properties.city}
                                coordinates={data.geometry.coordinates}
                                showOverlay={showOverlay}
                                handleOnClick={handleOnClick}
                            />
                        ))}
                    </ul>
                </section>    
            </div>
            <span>
                <Overlay
                    hideOverlay={hideOverlay}
                    title={storeData ? storeData.crossing : ''}
                    hours={storeData ? storeData.hours : ''}
                    phone={storeData ? storeData.displayPhone : ''}
                    phoneLink={storeData ? storeData.phoneLink : ''}
                    storeid={storeData ? storeData.storeid : ''}
                    address={storeData ? storeData.address : ''}
                    directions={storeData ? storeData.getDirections : ''}
                    services={storeData ? storeData.services : []}
                />
            </span>
        </div>
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