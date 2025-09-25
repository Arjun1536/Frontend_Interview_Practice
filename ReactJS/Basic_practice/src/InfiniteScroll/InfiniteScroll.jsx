import { useEffect, useState } from "react"

const InfiniteScroll = ()=>{
    const [data,setData] = useState([])
    const [page,setPage] = useState(0)
    const infiniteData = async ()=>{
        const response = await fetch(`https://dummyjson.com/quotes?limit=99&skip=${page}`)
        const json = await response.json()
        setData((prev)=>[...prev,...json.quotes])
        console.log(json)
    }
    

    const handleIinfiniteScroll = ()=>{
        // console.log("scroll",document.documentElement.scrollHeight)
        // console.log("innerheight",window.innerHeight)
        // console.log("scroll top",document.documentElement.scrollTop)
        if (document.documentElement.scrollHeight <= window.innerHeight + document.documentElement.scrollTop +1){
            setPage((prev)=>prev+100)
        }else{
            console.log("data end")
        }

    }
    useEffect(()=>{
        infiniteData()
    },[page])
    //curson Postion
    useEffect(()=>{
        window.addEventListener("scroll",handleIinfiniteScroll)

        return (()=> window.removeEventListener("scroll",handleIinfiniteScroll))
    })
    return <div>
    {data.map((d)=>{
        return <div key={d.id}> <span >
            {d.quote}
            </span>
            <span>
            {d.author}
                </span></div>
    })}
    </div>
}

export default InfiniteScroll
