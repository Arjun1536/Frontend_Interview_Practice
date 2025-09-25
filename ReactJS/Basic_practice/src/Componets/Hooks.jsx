//UseEffect hooks practice

import { useEffect, useState } from "react"

const Hooks = ()=>{
    const [count,setCount] = useState(0)
    const [text,setText] = useState("")
    const [isRunning,setisRunning] = useState(false)

    // const increment = ()=>{
    //     setCount((prev)=>(prev+1))
    // }
    useEffect(()=>{
console.log(text)
    },[text])

    //set Title in top
    useEffect(()=>{
        document.title = `count is ${count}`
    },[count])

    // Timer with useEffect
    useEffect(()=>{
        let timer;
        if (isRunning){
        timer = setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
    }
        return ()=>clearInterval(timer)
    },[isRunning])

    const handleStart = ()=>{
        setisRunning(true)
    }
    const handleReset = ()=>{
        // setCount(0)
        setisRunning(false)
        setCount(0)
    }

    const handlePauseRestart = ()=>{
        setisRunning((prev)=>!prev)

    }
    return <div>
        <span>
            <h4>count value: {count}</h4>
            <p>{text}</p>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleStart}>Increment{count}</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handlePauseRestart}>pause</button>

        </span>
    </div>
}

export default Hooks;