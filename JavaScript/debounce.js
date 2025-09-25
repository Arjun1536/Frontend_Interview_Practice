// let count = 0
// const Search = (count)=>{
//     console.log("Searching element ", count)
// }

// const debounce = (fn, delay)=>{
// let timerId;
// return function (...args){
//     clearTimeout(timerId) //cancel the last call

//     timerId =setTimeout(()=>{
//      fn(...args)
//     },delay)

// }
// }


// const debounceSearch = debounce(Search,100)
// debounceSearch("hard")
// debounceSearch("hard J")
// debounceSearch("hard JS")
// debounceSearch("hard JS Inter")
// debounceSearch("hard JS Interview")

const ele = document.querySelector("input")

function outcome(data){
  console.log("the outcome function")
}
// without debounce 
//ele.addEventListener("keyup",outcome). //keyup is important

function debounce(func,delay){
let timer;
  return function(...args){
    if (timer)
    clearTimeout(timer)
    timer = setTimeout(()=>{
        func()
    },delay)

  }
}
const result = debounce(outcome,300)
ele.addEventListener("keyup",result)


// Throttle
const sendComment = (msg)=>{
    console.log("New Message", msg)
}

const throttle = (fn,delay)=>{
let lastCall =0
return function (...args){
const now = Date.now()
 if (now-lastCall < delay){
    return
 }
 lastCall =now
  return fn(...args)
}

}

// const msgSend = throttle(sendComment,1*1000)
// msgSend("hey new ")
// msgSend("he this is second")
// msgSend("hey this is third")

