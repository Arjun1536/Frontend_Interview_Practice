import { useRef, useState } from "react"

const Hooks2 = ()=>{

    // const username = document.getElementById("username")
// console.log(username)

    //useRef for accessing dom element
    const username = useRef(null)
    const password = useRef(null)
    const [user,setUser] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const userName = username.current.value
        const passWord = password.current.value
        setUser([userName, passWord])
        console.log(user)
        // Clear inputs
    username.current.value = "";
    password.current.value = "";
        
    }
    return <div>
        <form onSubmit={handleSubmit}>

            <span>
                <input type="text" id="username" ref={username}/>
                <br />
                <input type="password" id="password" ref={password}  />
            </span>
            <button>Submit</button>
        </form>
        <span>
            {/* {username.current.value} */}
            {user}
        </span>
    </div>
}
export default Hooks2;