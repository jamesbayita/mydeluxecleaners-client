import React, {useEffect, useState} from 'react';
import getTimeStamp from '../helpers/getTimeStamp';

function CurrentTime(){
    let [time, setTime] = useState();

    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(getTimeStamp());
        },1000);
        return () => {clearInterval(id)};
    },[]);

    return(
        <>
        {time ?
            <div className="bottom-box-container">
                <span>{`${time.dn}, ${time.mo} ${time.da}, ${time.ye}`}</span>
                <br/>
                <span>{`${time.h}:${time.m} ${time.ampm}`}</span>
            </div>
            : null
        }
        </>
    )
}

export default CurrentTime;