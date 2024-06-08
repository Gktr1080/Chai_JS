//IIFE (immediately invoked function expression) used because the problem due to pollution of global scope

// function chai(){ //normal function
//     console.log(`DB CONNECTED`)
// }

// chai();



(function chai() {
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`DB CONNECTED ${name}`)
})('gaurav');