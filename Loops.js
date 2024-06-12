// <---------------  for of loop used for maps,arrays -------------->

const map = new Map();
map.set('IN', 'INDIA');
map.set('USA', 'UNITED STATES OF AMERICA');
map.set('FR', 'FRANCE');

// console.log(map);

// for (const key of map) {
//     console.log(key); //print as an array

// }

// for (const [key, value] of map) {
//     console.log(key, ':->', value);

// }

// const obj = { // obj is not iterable
//     obj1: 'kanpur',
//     obj2: 'lucknow',
//     obj3: 'kanpur dehat'
// }
// for (const key of obj) {
//     console.log(key)

// }


// <---------------  for in loop used for objects -------------->


// const obj = {
//     obj1: 'kanpur',
//     obj2: 'lucknow',
//     obj3: 'kanpur dehat'
// }
// for (const key in obj) {
//     // console.log(key) //print only keys
//     // console.log(obj[key]) //print only values
//     console.log(`${key} consist ${obj[key]}`);


// }

// const arr = ["Js","Ruby", "Cpp", "React", "Java"]
// for (const key in arr) {
//     // console.log(key);
//     // console.log(arr);
//     // console.log(arr[key]);

// }

//  <------------- for each --------------->
const arr = ["Js", "Ruby", "Cpp", "React", "Java"]

// arr.forEach((element) => { //arrow function
//     console.log(element)

// });

// arr.forEach(function (value) {
//     console.log(value);
// });

// function printme(item){
//     console.log(item);
// }

// arr.forEach(printme);

// arr.forEach((element, index, array) => {
//     console.log(element, index, array);
// });


const coding = [
    {
        programmingLanguage: "Java",
        programmingFileName: "java"
    },
    {
        programmingLanguage: "JavaScript",
        programmingFileName: "js"
    },
    {
        programmingLanguage: "C plus plus",
        programmingFileName: "cpp"
    }
]

coding.forEach((value) => {
    console.log(value.programmingFileName);
});





