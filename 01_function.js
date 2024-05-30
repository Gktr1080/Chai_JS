// function calculateCartPrice(...num1){   //...work as a rest operator
//     return num1
// }
// console.log(calculateCartPrice(200,300,400))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,300,500,400,2000))


const user = {
    username : "Gaurav",
    prices : 199
}

// function handleObjects(anyobject){
//     console.log(`Username is ${anyobject.username} and Price is ${anyobject.prices}`);
// }
// handleObjects(user);

// --------OR---------

// function handleObjects(user){
//     console.log(`Username is ${user.username} and Price is ${user.prices}`)
// }

// handleObjects(user);