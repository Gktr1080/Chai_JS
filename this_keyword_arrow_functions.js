const user = {
    username: "gaurav",
    age: 22,

    welcomemssg: function () {
        console.log(`welcome ${this.username}`)
        // console.log(this); //print the values in current context;
    }

}
// user.welcomemssg();
// user.username = "Katiyar";
// user.welcomemssg();

// console.log(this); //  return an empty block of scope or empty object  because there is no code in global space

// function chai() {
//     let username = "saurabh";
//     // console.log(this) //print many things
//     console.log(this.username) //print undefined .....we can not use this in functions ....only we can use this keyword in object
// }
// chai();


// const chai = function(){
//     let username = "saurabh";   
//      console.log(this.username) //print undefined

// }
// chai();

// ------- arrow functions -------

// const chai = () => {
//     let username = "saurabh";
//      console.log(this.username); //print undefined
// }
// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2; //explicit
// }
// console.log(addTwo(5,6));

// const addTwo = (num1, num2) =>  num1 + num2; //implicit

// const addTwo = (num1, num2) =>  (num1 + num2);  //implicit

// ------ if you use {}, you will have to use return keyword -------

// console.log(addTwo(5,6));


const printvalue = (num1, num2) => ({
    username: "gaurav"

})
console.log(printvalue(6, 7));