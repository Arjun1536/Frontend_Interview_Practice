import { useReducer } from "react"

export const UseReducer = ()=>{
    const reducer = (state,action)=>{
        console.log(state,action)
        if (action.type === "incre"){
            return state+1
        }
        else{
            return state-1
        }
    }
    const [count,dispatch] = useReducer(reducer,0)
    //console.log(count)
    return <div>
        <h3>This is reducer function {count}</h3>
        
        <button onClick={()=>dispatch({type: "incre"})}>Increment</button>
        <button onClick={()=>dispatch({type: "decre"})}>Decrement</button>
    </div>
}