import React, {useEffect, useState} from 'react';
import getTimeStamp from '../helpers/getTimeStamp';

function CurrentTime(){
    let [time, setTime] = useState();

    useEffect(()=>{
        setTime(getTimeStamp());
    },[]);

    return(
        <>
        {time ?
        <div className="dateComponent">
            <div className="bottom-box-container">
                <span><span className="bold">{`${time.dn}`}</span> {`${time.mo} ${time.da}, ${time.ye}`}</span>
            </div>
        </div>
            : null
        }
        </>
    )
}

export default CurrentTime;