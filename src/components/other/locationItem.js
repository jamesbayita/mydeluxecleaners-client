import React from 'react';

function locationItem(props) {
    function handleOnClick(event) {
        event.preventDefault()
        props.handleOnClick(props.id, props.coordinates)
    }
    function showOverlay(e) {
        e.preventDefault();
        props.showOverlay(props.storeIndex)
    }
    return(
        <article className={props.className}>
            <button className="button_overlay" onClick={handleOnClick}></button>
            <div className="flex_container_locations">
                <div className="button_overlay_header">
                    <p className="location_title">{props.title}</p>
                    <div className="location_city_container">
                        <p>{props.city}</p>
                    </div>
                </div>
                <div className="items_icons">
                    <button className="info_button" onClick={showOverlay}><span className="moreInfoButton">More Info</span></button>
                </div>
            </div>
        </article>
    )
}
export default locationItem;