import React from 'react';

export default function LeftArrow(props) {
    return(
        <div className="left-button-container">
            <button 
                className="left-link"
                onClick={props.onClick}>
                <i className="fas fa-arrow-left"></i>
            </button>
        </div>
    )
}