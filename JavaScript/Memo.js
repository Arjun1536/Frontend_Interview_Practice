
//Normal JS to memo the function

function memorized(fn){
const context ={}

return function (...args){
    const key = JSON.stringify(args) //JSON.stringify converts a JavaScript value (object, array, number, string, etc.) into a string representation.
    if (context[key]){
        console.log("cache value")
        return context[key]
    }
    let  result = fn(...args)
    context[key] = result
    console.log("not cached")
    return result

}
}

function  add(a,b){
    return a+b
}
//call the function 
// const memo = memorized(add)
// console.log(memo(4,5))
// console.log(memo(4,5))
// console.log(memo(4,5))

//Use Map here better than plain JS object

function Map_Memorized(fn){
    const context = new Map()
    return function (...args){
        const key = JSON.stringify(args)
        if (context.has(key)){
            console.log("cache value")
            return context.get(key)
        }
        let result  = fn.apply(this,args)
        context.set(key,result)
        console.log("not cached")
        return result
    }
}
function  add(a,b){
    return a+b
}
//call the function 
// const memo = Map_Memorized(add)
// console.log(memo(4,5))
// console.log(memo(4,5))
// console.log(memo(4,5))


//Closure basic

function parent(){
    var localvar = 30;
    function child(){
        console.log(localvar)
        
    }
    return child
}
const close = parent()
//console.log(close())

//call apply bind 

function user(skils1,skill2){
    return ("my name id "+ this.name + " " + this.role + " "+skils1 +" "+ skill2)
}

//use call here to pass to refernce of this context
const info = {
    name: "Arjun",
    role: "Developer"
}
//console.log(user.call(info,"React","JS"))

// now for apply we pass array of arguments
const userSkill  = ["reactJS","Python"]
//console.log(user.apply(info,userSkill)). 

//bind function it return a function

function cart(price){
    return ("this is "+ this.product +" "+ "and description "+ this.description +" "+ price)
}
const productInfo ={
    product: "Apple",
    description:"apple care"
}
const cartDetails = cart.bind(productInfo)
//console.log(cartDetails(100)) // call gain as it is return a function


// create a polyfill of bind function

function greetings(role){
console.log("this is "+this.name +" "+ this.city)
console.log(role)
}

const user_details ={
    name:"super",
    city:"kanpur"
}
// bind create
//const greeetingBind = greetings.bind(user_details)
//Polyfill create
Function.prototype.myBind = function(context,...args1){
    const self = this
    return function(...args2){
        self.apply(context,[...args1,...args2])
    }
}
const greeetingBind = greetings.myBind(user_details)
console.log(greeetingBind('developer'))

