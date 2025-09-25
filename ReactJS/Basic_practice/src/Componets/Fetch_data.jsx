import { useEffect, useState } from "react"

const Fetch_data = ()=>{
const [data,setData] = useState([])
    const fetch_json = async ()=>{
        try{
            const data = await fetch("https://dummyjson.com/quotes")
            const json =await  data.json()
            setData(json.quotes)
            console.log(json)
        }
        catch(err){
            console.log("data not fetched",err)
        }
       
    }
    useEffect(()=>{
        fetch_json()
    },[])
    return <div>
        <h3>this data fetched by inbuld fetched</h3>
        {data?.map((d)=>{
            return <div key={d.id}> 
                {d.quote}
            </div>
        })}
    </div>
}
export default Fetch_data;