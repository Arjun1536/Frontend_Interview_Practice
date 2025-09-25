import { useState } from "react"

export const ContactForm = ()=>{

    const [input,setinput] = useState({
        username:"",
        password:""
    })

    const handleOnchange =(e)=>{
        const {name,value} = e.target;
        setinput((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = ()=>{

    }
return <div>
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Name</label>
    <input name="username" type="text" value={input.username} onChange={handleOnchange} />
    <label htmlFor="password">Password</label>
    <input type="password" value={input.password} />
    <button>Submit</button>
    </form>
</div>
}