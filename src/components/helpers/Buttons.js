import React from 'react';

function Play() {
   return <button className="far fa-play-circle fa-2x"></button>
}

function Pause() {
    return <button className="far fa-pause-circle fa-2x"></button>
}
function Forward() {
    return <button className="fas fa-arrow-right fa-2x"></button>
}
function Backward() {
    return <button className="fas fa-arrow-left fa-2x"></button>
}
export {
    Play,
    Pause,
    Forward,
    Backward
}