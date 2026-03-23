 import React,{useState,useEffect} from 'react'

export default function UseEffectHook() {
    const [sec,setSec]=useState(0)
    const[isRun,setIsRun]=useState(false)

    useEffect(()=>{
        let intervalId;
        if(isRun){
            intervalId=setInterval(()=>{
                setSec((prev) =>prev+1)
            },1000)
            return()=>clearInterval(intervalId)
        }

    },[isRun])
    console.log(isRun);
    const handleStart=()=>{
        setIsRun(true)
    }
    const handleStop=()=>{
        setIsRun(false)
    }
    const handleReset=()=>{
        setIsRun(false)
        setSec(0)
    }
    

  return (
    <div className='Main'>
      <h1>StopWatch</h1>
      <h2>Timer:{sec}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
