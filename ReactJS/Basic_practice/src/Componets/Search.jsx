// import { useEffect, useState } from "react";

import { useEffect, useState } from "react"

// const Search = ()=>{
//     const [data,setData] = useState([])
//     const [input,setInput] = useState("")
//     const [query,setQuery] = useState("")
//     const [cache,setCache] = useState({})

//     const data_fetch = async()=>{
//         if (cache[input]){
//             console.log("cache call", cache)
//             setData(cache[input])
//             return
//         }
//         const recipse = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
//         const json = await recipse.json()
//         setData(json.recipes)
//         console.log("API call")
//         setCache((prev)=>({...prev,[input]:json.recipes || []}))
//         //console.log(data)
//         //console.log(cache)
//     }
//     useEffect(()=>{

//         // debounce function
//         const timer = setTimeout(()=>{
//                 data_fetch()
//         },300)
        
//         return ()=>clearTimeout(timer)
        
//     },[input])
//     return <div>

//     <span>
//                 <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
//                 {/* <button onClick={()=>setQuery(input)}>Search</button> */}
//             </span>
//             {

//                 data.length > 0 ? (
//     data.map((d)=>{
//         return <div> 
            
//             <span>
//             {d.name}

//             </span>
//         </div>
//     }) ):(input && <p>No result found</p>)
// }
//     </div>
// }
// export default Search;

const Search = ()=>{
    const [input ,setInput] = useState("")
    const [data,setData] = useState([])
    const fecth_api = async()=>{
        try{
            const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
            const reci = await data.json()
            setData(reci.recipes)
            console.log(data)
        }
        catch{(err)=>{
            console.log("fetching api error")
        }}
    }

    useEffect(()=>{
        fecth_api()
    },[input])
    return <div>
        <input  value={input} onChange={(e)=>setInput(e.target.value)}/>
        <span>
            {data.length>0 ? (data.map((d)=>{
                return <div>{d.name}</div>
            })):(input && "no data found")}
            
        </span>
    </div>
}
export default Search