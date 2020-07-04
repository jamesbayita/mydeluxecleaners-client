import React, {useReducer, useEffect, useRef} from 'react';
import slides from '../helpers/slides';
import reducer from './reducer';
import initialState from './initialState';
import DateComponent from './DateComponent'
const SLIDE_DURATION = 6000;


function Container(props){
    return (
        <div {...props}/>
    )
}
function BoxBackground(props){
    return(
        <div {...props}></div>
    )
}
function Image({isCurrent, takeFocus, image,id, title, callToAction, content}){
    let ref = useRef();
    useEffect(()=>{
            if(isCurrent && takeFocus){
                ref.current.focus();
            }},[isCurrent, takeFocus])
    return(
        <div aria-hidden={!isCurrent} className="showBG">
            <img 
                alt={`Background ${id}`}
                ref={ref} 
                src={image}
                tabIndex="-1"
                aria-labelledby={id}
                className="backgroundImage"
            />
            <BoxContent
                title={title}
                content={content}
                callToAction={callToAction}
            />
            <DateComponent/>
        </div>
    )
}
function BoxContent({title, callToAction, content}){
    return(
        <div className="box-content">
            <div className="inner verticle-center">
                <div className="box-info">
                    <div className="row">
                        <h1>{title}</h1>
                    </div>
                    <div className="row">
                    {content}
                    </div>
                    <div className="row">
                    {callToAction}
                    </div>
                </div>
            </div>
        </div>
    )
}
function SlideNav(props){
    return(
        <ul className="SlideNav" {...props}/>
    )
}
function SlideNavItem({isCurrent, ...props}){
    return(
        <li className="SlideNavItem">
            <button {...props} aria-current={isCurrent}>
                <span/>
            </button>
        </li>
    )
}
export default function Carousel(){
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(
        ()=>{
            let timeout = setTimeout(()=>{
                dispatch({type: "PROGRESS"});
            },SLIDE_DURATION);
            return () => clearTimeout(timeout);
        },[state.isPlaying, state.currentIndex])

    return(
        <Container className="carousel-container">
            <BoxBackground className="box-bg has-tablet">
                {slides.map((slide, index)=>(
                    <Image
                        key={index}
                        id={`image-${index}`}
                        image={slide.img ? slide.img : null}
                        isCurrent={index === state.currentIndex}
                        takeFocus={state.takeFocus}
                        callToAction={slide.callToAction}
                        title={slide.title}
                        content={slide.content}
                    />
                ))}
            </BoxBackground>
            <SlideNav>
                {slides.map((slide, index) => (
                    <SlideNavItem
                        key={index}
                        isCurrent={index === state.currentIndex}
                        aria-label={`Slide-${index + 1}`}
                        onClick={()=>{
                            dispatch({type: "GOTO", index});
                        }}
                    />
                ))}
            </SlideNav>
        </Container>
    )
}