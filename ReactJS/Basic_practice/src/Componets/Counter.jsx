import { useEffect, useRef, useState } from "react"

const Counter = ()=>{
    const [count,setCount] = useState(0)
    const countRef = useRef(null)

    // const handleStart = ()=>{
    //     let val = 0
    //     if (countRef.current){
    //         // handle double triple clicks
    //         clearTimeout(countRef.current)
    //     }
    //     countRef.current = setInterval(()=>{
    //         if (val >10){
    //             clearTimeout(countRef.current)

    //             countRef.current = null
    //             return
    //         }
    //         val =val +1
    //         setCount(val)
    //     },1000)
    // }

    // better way 
    const handleStart = ()=>{
        if (countRef.current) return // handle double triple click
        countRef.current = setInterval(()=>{
            setCount((prev)=> {
                if (prev>=10){
                    clearInterval(countRef.current)
                    countRef.current =null
                    return prev
                }
                
               return  prev+1})
        },1000)
    }
    const handleReset = ()=>{
        clearInterval(countRef.current)
        setCount(0)
    }
    const handlepauseStop = ()=>{
        clearInterval(countRef.current)
        countRef.current =null

    }
    useEffect(()=>{
        return (()=>clearInterval(countRef.current))
    })
    

    return <div>
        <p>counter: {count}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlepauseStop}>Stop</button>
        <button onClick={handleReset}>reset</button>
    </div>
}
export default Counter;