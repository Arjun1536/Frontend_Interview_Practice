const memorized = function(fn){ 
const context ={}

return function(...args){
    const key = JSON.stringify(args)
    if (context[key]){
        console.log("cache")
        return context[key]
    }
    let result = fn(...args)
    context[key] = result
    console.log("not cached")
    return result
}

}

function add(a,b){
    return a + b
}

const memo = memorized(add);
// console.log(memo(3,5))
// console.log(memo(3,5))
// console.log(memo(3,3))
// console.log(memo(3,9))



// Bind Method
const user2 = {
  name: "Arjun",
  showName: function () {
    setTimeout(function () {
      console.log(this.name); // ✅ "Arjun"
    }.bind(this), 1000); // bind outer this
  },
};

//user2.showName();

let user = {
    name:"Rishi",
    role: "Developer"
}
function userData(hometown,country){
    console.log (`this is ${this.name} and ${this.role} my ${hometown} and ${country} `)
}

// let data = userData.bind(user) //userData.bind(user) does not execute the function.It returns a new function with this bound to user.
//                                 //So data is a function,
// data() //call this function

//Function.prototypes.function_name
//basic implementation
Function.prototype.myBind = function(...args){
    let obj = this  // actually refer to userData
    return function(){
        obj.call(args[0])
    }
}

let showBindProto = userData.myBind(user)
//showBindProto()

// problem with mutiple arguments so handle with this function

Function.prototype.myBind2 = function(...args){
    let obj = this
    param = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...param, ...args2])
}
}
let showBindProto1 = userData.myBind2(user,'kanpur')
showBindProto1( 'india')

