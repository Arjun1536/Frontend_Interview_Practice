import { createContext, useContext } from "react";

export const Context = createContext()
// C should be captial

// const ContextApi = ({children})=>{
//     const mydata = "Arjun"
//     return
    
//         <Context.Provider value = {mydata}>
// {children}
//         </Context.Provider>
    
// }
// export default ContextApi;
export const BioProvider = ({children})=>{
    const mydata = "Arjun"
    const role = "frontend developer"
    return <Context.Provider value={{mydata, role}}>{children} </Context.Provider>
}