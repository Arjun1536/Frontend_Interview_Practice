
// split -> string to array
// reverse -> reverse the array
// join -> array to string

const input = "I love javaScript"
// op -> I evol tpircSavaj
function revserseString(data){
    const arrayData = data.split(" ")
    //console.log(arrayData)
    const result = arrayData.map((d)=>{
        return (d.split("").reverse().join(""))
    })
    console.log(result.join(" "))
}
//revserseString(input)

const data = "javascript is a cool lang"
// op -> a is cool lang javascript
function sortArray(data){
const ArrayData = data.split(" ")
ArrayData.sort((a,b)=>{
    return a.length - b.length
})
console.log(ArrayData.join(" "))
}
sortArray(data)