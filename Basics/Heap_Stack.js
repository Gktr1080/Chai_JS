// Primitive Datatypes 

// 7 types : String, Number, Boolean , null, undefined, Symbol, BigInt

// Reference ( Non primitive)

// Array, Objects, Functions


// Stack(Primitive)  , Heap (Non=primitive)

let myYoutubename = "guarav.com"
let anothername = myYoutubename
anothername = "chai aur code"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email:"gaurav@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne

userTwo.email = "gaurav@gaurav.com"

console.log(userOne.email);
console.log(userTwo.email)
