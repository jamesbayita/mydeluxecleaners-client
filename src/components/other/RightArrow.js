import React from 'react';

export default function RightArrow(props) {
    return(
        <div className="right-button-container">
            <button 
                className="right-link"
                onClick={props.onClick}>
            <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}