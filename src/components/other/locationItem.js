import React from 'react';

function locationItem(props) {
    function handleOnClick(event) {
        event.preventDefault();
        props.handleOnClick(props.coordinates);
        props.toggleSelector(props.id);
    }
    return(
        <div className={`location_li location_${props.id}`} onClick={handleOnClick}>
            <div className="flex_wrapper_li">
                <div className="information_flex">
                    <div className="city_conatiner">
                        <p className="store-city">{props.city}</p>
                    </div>
                    <div className="store_title_container">
                        <p className="store_title">{props.crossing}</p>
                    </div>
                </div>
                <div className="info_conainer">
                    <button><i className="fas fa-info-circle fa-2x"></i></button>
                </div>
            </div>
        </div>
    )
}
export default locationItem;