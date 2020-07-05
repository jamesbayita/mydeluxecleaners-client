import React, {useEffect, useRef} from 'react';
import { useState } from 'react';
import Item from '../other/locationItem';
import stores from '../helpers/stores.json';
import Overlay from '../other/Overlay';
// VARIABLES
const GOOGLE_MAP_API_KEY = 'AIzaSyATje7L6rUQO7t2CT-HjdW7vSrqIL8kos4';
const zoomLevel = window.screen.width < 700 ? 11 : 12

function Map({options, className,stores}) {
    const ref = useRef();
    const [map, setMap] = useState();
    const [info, setInfo] = useState({
        title: '',
        address: '',
        phone: '',
        phoneLink: '',
        hours: '',
        services: []
    });
    
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
    function showOverlay() {
        const objStyle = {
            "opacity": "1",
            "z-index": "100"
        }
        let element = document.querySelector('.overlay');
        let mapElement = document.querySelector('.Map');
        let locationList = document.querySelector('#locationList');
        mapElement.style.display = "none";
        locationList.style.overflow = "hidden";
        Object.assign(element.style, objStyle);
    }
    
    // once map is displayed, add markers to map
    if(map) {   
        map.data.addGeoJson(stores);
        map.data.addListener('click', function (event) {
            const position = event.feature.getGeometry().get();
            map.panTo(position);
            toggleActive(event.feature.j.storeid);
            const objStyle = {
                "opacity": "0",
                "z-index": "-10"
            }
            let element = document.querySelector('.overlay');
            Object.assign(element.style, objStyle);
        });
    }
    function handleOnClick(coordinates){
        map.panTo({lat: coordinates[1], lng: coordinates[0]});
    }
    function handleOverlay({title, address, phone, phoneLink, hours, services}){
        showOverlay();
        setInfo({title, address,phone, phoneLink,hours, services})
    }
    return(
        <>  
            <div id="locationList" className="location_container">
                {stores.features.map((store, index)=> (
                        <Item 
                            key={index}
                            title={store.properties.crossing}
                            coordinates={stores.features[index].geometry.coordinates}
                            handleOnClick={handleOnClick}
                            toggleSelector={toggleActive}
                            id={store.properties.storeid}
                            city={store.properties.city}
                            handleOverlay={handleOverlay}
                            address={store.properties.address}
                            phone={store.properties.displayPhone}
                            phoneLink={store.properties.phoneLink}
                            hours={store.properties.hours}
                            services={store.properties.services}
                    ></Item>
                ))}
            </div>
            <Overlay
                    title={info.title}
                    address={info.address}
                    phone={info.phone}
                    phoneLink={info.phoneLink}
                    hours={info.hours}
                    services={info.services}
                />
            <div {...{ref, className}}></div>
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