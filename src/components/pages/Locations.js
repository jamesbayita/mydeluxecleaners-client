import React, {useEffect} from 'react';
import Map from '../other/GoogleMap';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu'

function Locations() {
    useEffect(()=> {
        let wrapper = document.querySelector('.wrapper');
        setTimeout(() => {
            wrapper.classList.add('locations_active');
        }, 600)
        return function () {
            wrapper.classList.remove('locations_active');
        }
    })
    function removeClass() {
        let wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('locations_active');
    }
    function addClass() {
            let wrapper = document.querySelector('.wrapper');
            wrapper.classList.add('locations_active');   
    }
    return(
        <>
            <NavMenu addClass={addClass}/>
            <NavBar removeClass={removeClass}/>
            <div className="offsetContainer">
                <Map />
            </div>
        </>
    )
}

export default Locations;