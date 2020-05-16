import React, { useReducer, useEffect, useRef } from 'react';
import slides from '../helpers/slides';
// useReducer PARAMS
const SLIDE_DURATION = 4000;
const initialState = {
    currentIndex: 0,
    isPlaying: true,
    takeFocus: false
}
function reducer(state, action){
    switch(action.type){
        case "PROGRESS":
        case "NEXT":
            return {
                ...state,
                takeFocus: false,
                isPlaying: action.type === "PROGRESS",
                currentIndex: (state.currentIndex + 1) % slides.length
            };
        case "PREVIOUS": 
            return {
                ...state,
                takeFocus: false,
                isPlaying: false,
                currentIndex:
                (state.currentIndex - 1 + slides.length) % slides.length
            };
        case "PLAY":
            return {
                ...state,
                takeFocus: false,
                isPlaying: true
            }
        case "PAUSE":{
            return {
                ...state,
                takeFocus:false,
                isPlaying: false
            }
        }
        case "GOTO": 
            return {
                ...state,
                takeFocus: true,
                currentIndex: action.index
            }
        default:
            return state;
    }
}
// END

// CHILDREN COMPONENTS
function Carousel(props) {
    return <section className="Carousel" {...props}></section>
}
function Slides(props) {
    return <ul {...props}></ul>
}
function Slide({isCurrent, takeFocus, image, id, title, content, callToAction}) {
    let ref = useRef();

    useEffect(()=>{
        if(isCurrent && takeFocus) {
            ref.current.focus();
        }
    },[isCurrent, takeFocus]);

    return (
        <li
            ref={ref}
            aria-hidden={!isCurrent}
            tabIndex="-1"
            aria-labelledby={id}
            className="Slide"
            style={{backgroundImage: `url(${image})`}}
        >
        <div className="SlideContent">
            <h2 id={id}>{title}</h2>
            {content}
            {callToAction}
        </div>

        </li>
    )

}
function SlideNav(props){
    return <ul className="SlideNav" {...props} />
}
function SlideNavItem({isCurrent, ...props}){
    return (
        <li className="SlideNavItem">
            <button {...props} aria-current={isCurrent}>
                <span />
            </button>
        </li>
    )
}
// END
export default function Section(){
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        if(state.isPlaying){
            let timeout = setTimeout(()=>{
                dispatch({type: "PROGRESS"});
            }, SLIDE_DURATION);
            return ()=>clearTimeout(timeout);
        }
}, [state.currentIndex, state.isPlaying]);

    return(
        <Carousel aria-label="Image Carousel">
            <Slides className="Slides-ul">
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        id={`image-${index}`}
                        image={slide.img}
                        title={slide.title}
                        isCurrent={index === state.currentIndex}
                        takeFocus={state.takeFocus}
                        content={slide.content}
                        callToAction={slide.callToAction}
                    />
                ))}
            </Slides>
            <SlideNav>
                {slides.map((slide,index) => (
                    <SlideNavItem
                        key={index}
                        isCurrent={index === state.currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={()=>{
                            dispatch({type: "GOTO", index});
                        }}
                    />
                ))}
            </SlideNav>
        </Carousel>
    )
}