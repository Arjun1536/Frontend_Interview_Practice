import { useEffect, useState } from "react"

const  useApi = (api)=>{
    const [data,setData] = useState([])
    const fetchApi = async ()=>{
        
        const data = await fetch(api)
        const json = await data.json()
        setData(json)


    }
    useEffect(()=>{
        fetchApi()
    },[api])
    return data
}
export default useApi;