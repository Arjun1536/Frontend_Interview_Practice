import { useState } from "react";

const Todo = ()=>{
const saveTodo = "saveTodos"
const [input,setInput] = useState({id:"", content:"", checked:false})
const [user,setUser] = useState(()=> {
    
    const newvalue = localStorage.getItem(saveTodo)
    if (!newvalue) return
    return JSON.parse(newvalue)
})


const handleChange = (value)=>{
    setInput({
        id:value, content:value, checked:false
    })
    //console.log(value)
}

const handleSubmit = (e)=>{
    e.preventDefault()
    
    const {id,content,checked} = input
    // repeated value
    const repeatedVal = user.find((prev)=>prev.content===content)
    //console.log(repeatedVal)
    if (repeatedVal){
        //return alert("repeted val")
          setInput({ id: "", content: "", checked: false }); 
        return
    }

    setUser((prev=>[...prev,{id,content,checked}]))
    // save data in localStorage 
    localStorage.setItem(saveTodo,JSON.stringify(user))
    setInput({ id: "", content: "", checked: false }); 

    console.log(user)
}

const handleDelete = (val)=>{
    const updatedVal = user.filter((prev)=>(prev.id !== val.content))
    setUser(updatedVal)
}

const handleCheck = (val)=>{
    const updatedVal = user.map((u)=>{
       return  u.id === val.id ? {...u, checked : !u.checked}: u
    })
    setUser(updatedVal)

}

    return <div>
        <form action="">
            <span>
                <input type="text" value={input.content} onChange={(e)=>handleChange(e.target.value)} />
            </span>
            <button onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
        <span>
            {user.map((u)=>{
                return <div>
                    <li key={u.id} style={{backgroundColor : u.checked ? "greenYellow": "transparent"}}>
                        {u.content}
                        <span style={{ marginLeft: "10px" }}>
                            <button onClick={()=>{handleCheck(u)}}>✅</button>
                            <button onClick={()=>handleDelete(u)}>❌</button>
                        </span>
                    </li>
                </div>
            })}
        </span>
    </div>
}

export default Todo;