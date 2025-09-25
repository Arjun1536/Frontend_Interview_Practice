import axios from 'axios'

const api = axios.create({Url:"https://dummyjson.com/quotes"})

export const getPost = ()=>{
    return api.get("/")
}