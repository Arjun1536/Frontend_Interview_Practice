import { useContext } from "react";
import { Context } from "./ContextApi";

const RandomCode = ()=>{
    const {mydata,role} = useContext(Context)
    
    return <div>
        <h3>Hey my name is {mydata} </h3>
        <p>my role is {role}</p>
    </div>
}

export default RandomCode;