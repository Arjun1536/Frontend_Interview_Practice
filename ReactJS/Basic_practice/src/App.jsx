import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import RandomCode from "./Componets/RandomCode"
// import  { BioProvider } from './Componets/ContextApi'
// import { UseReducer } from './Componets/UseReducer'
// import Hooks2 from './Componets/Hooks2'
import Hooks from './Componets/Hooks'
// import Todo from './Componets/Todo'
import Search from './Componets/Search'
import Fetch_data from './Componets/Fetch_data'
import useApi from './customHooks/useApi'
import InfiniteScroll from './InfiniteScroll/InfiniteScroll'
// import Counter from './Componets/Counter'
// import {ContactForm} from './Componets/ContactForm'
//import { getPost } from './api/AxiosApi'
function App() {
  //const [count, setCount] = useState(0)
  //console.log(getPost())
//   const getPostData = async()=>{
//     let res = await getPost()
//     console.log(res)
//   }
//   useEffect(()=>{
// getPostData()
//   },[])

const jsonData = useApi("https://dummyjson.com/users")
console.log(jsonData)
  return (
    <>
    <h2>TODO</h2>
    <InfiniteScroll />
    {/* <Counter /> */}
      {/* <ContactForm /> */}
      {/* <Todo /> */}
      {/* <Hooks /> */}
      {/* < Fetch_data /> */}
      {/* <Search /> */}
      {/* <Hooks2 /> */}
      {/* <BioProvider>
      <RandomCode />
      </BioProvider>
      <UseReducer /> */}
      {/* <ContactForm /> */}
      {/* <getPost /> */}

    </>
  )
}

export default App
