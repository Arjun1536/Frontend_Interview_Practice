// const data_fetch = ()=>{
//     return new Promise ((resolve,reject)=>{
//         const user = {
//             Name:'Arjun',
//             role: 'Developer'
//         }
//         statusCode= 400
//         if (statusCode === 200){
            
//             resolve("user data will refelect" + JSON.stringify(user))
//         }
//         else{
//             reject('not resolved Promise')
//         }
//     })
// }

// // data_fetch()
// // .then((res)=>console.log("promise will be resolve",res))
// // .catch((err)=>{console.log(err)})


// // code for timer try for three time if not successful then give error.
// const retrydata = (retry =3)=>{
//     return data_fetch().then((res)=>{
//         console.log("Successfully fetched data from user")
//         return res
//     })
//     .catch((err)=>{
//         console.log(`retry fetching data ${retry -1}`)
//         if (retry >0){
//             return new Promise((res)=>{
//                 setTimeout(() => {
//                     res(retrydata (retry-1))
//                 }, 1000);
//             })
//         }

//         else{
// console.log("retry finished")
//         }
//             return err

//     })
// }
// retrydata().then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })


// Just check event Loop

console.log("start 1")
setTimeout(()=>{
    console.log("setime out 1")

    Promise.resolve().then(()=>{
        console.log("promise inside setimeOut 1")
        })
        })

    Promise.resolve().then(()=>{
        console.log("Promise 1")
        setTimeout(()=>{
            console.log("time out 3")
        },
        0)
    })
    
// start 1
// Promise 1
// setime out 1
// promise inside setimeOut 1
// time out 3