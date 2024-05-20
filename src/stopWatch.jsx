import React,{useState, useEffect} from 'react';

function StopWatch(){
    const [time, setTime]=useState(0);
    const [isRunning, setIsRunning]=useState(false);
    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{
                setTime(prevTime=>prevTime+1);
            },1000);
        }
        else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[isRunning]);

    const startStop=()=>{
        setIsRunning(!isRunning);};
        const reset =()=>{
            setTime(0);
            setIsRunning(false);
        };
        const formatTime=(time)=>{
            
            const minutes = Math.floor((time%3600)/60);
            const seconds=time%60;
            return`${minutes}:${seconds <10 ? '0':''}${seconds}`;
        }
        return(
            <div >
                <h1>Stopwatch</h1>
                <div style={{marginTop:"50px"}}>
                    <div style={{fontSize:"40"}}> Time: {formatTime(time)}</div>
                    <div style={{marginTop:"25px"}}>
                        <button onClick={startStop}>{isRunning ?'Stop':'Start'}</button>
                        <button onClick={reset}>Reset</button>
                    </div>

                </div>

            </div>
        )
    };
    export default StopWatch;