import React,{useState,useEffect} from "react";
function StopWatch(){
    const [time,setTime]=useState(0);
    const[isRunning,setIsRunning]=useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{
                setTime(prevTime=>prevTime+1);
            },1000);
        }
        else {
            clearInterval(interval);
        }
        return()=>clearInterval(interval);
    },[isRunning]);

    const startStop=()=>{
        setTime(0);
        setIsRunning(true);
    };

    const reset=()=>{
       
        setIsRunning(!isRunning);
    };

    const formatTime=(time)=>{
        
        const minutes=Math.floor(time/60);
        const seconds = time%60;
        return `${minutes}:${seconds <10 ? '0':''}${seconds}`;
    }
    return(
        <div>
            <h1>Stop Watch</h1>
            <div>
                <div>{formatTime(time)}</div>
                <div>
                    <button onClick={startStop}>{isRunning?'Stop':'Start'}</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>

        </div>
    )
};
export default StopWatch;