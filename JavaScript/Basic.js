function repeatedVal(obj){
    let value = Object.values(obj)
    let count ={}

    //count of occurence
    value.forEach(val =>{
        count[val] = (count[val] || 0) + 1

    })
    console.log(count)
    let repeated ={}
    for (let i in count){
        if (count[i]>2){
            repeated[i] = count[i]
        }
    }
    console.log(repeated.value)
}

const myObj = {
    a:"role",
    b:"role",
    c:"react",
    d:"node",
    e:"node"
}
//repeatedVal(myObj)


// Palindrome Check
function isPalindrome(str){
    str = str.toLowerCase()
    //let reverse = str.split("").reverse().join("")
    //console.log(reverse)
    
    if (str === reverse){
        console.log("palindrome")
    }
    else{
        console.log("not a palindrome")
    }
}

//isPalindrome("arjun")
//isPalindrome("Nitin")

// reverse a String

function reverse(str){
    let rev = ""
    for (let char of str){
        rev = char +str // first char then put str
    }
    console.log(rev)
}
//reverse("abcds")


// count the value of vowel & consonants

function countVowel_Consonants(str){
let vowel ='aeiou';
let vCount =0, cCount =0

for (let char of str.toLowerCase()){
    if (vowel.includes(char)){
        vCount+=1

    }
    else{
        cCount +=1

    }
}
    console.log("vowel count", vCount +"consonant count", cCount)


}
//countVowel_Consonants("Hello this is Arjun")

//first non repeated character

function nonRepeated(str){
    let freq ={}
    str = str.toLowerCase()
    for (let char of str){
        if (char !==" "){
        freq[char] = (freq[char] || 0)+1
        }
    }
    console.log(freq)

}
nonRepeated("hello Aaa")