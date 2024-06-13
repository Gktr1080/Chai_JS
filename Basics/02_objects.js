// const tinderUser = new Object() // singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Gaurav Katiyar";
tinderUser.email = "gauravkatiyar1080@gmail.com";
isLoggedIn = false;
// console.log(tinderUser) // both method will print same result

const regularUser = {
    email : "gaurav@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Gaurav",
            lastname : "Katiyar"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4)


const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// const user = [{
//     id1 : "123",
//     email1 : "g@gmail.com"
// },
// {
//     id2 : "124",
//     email2 : "k@gmail.com"
// },
// {
//     id3 : "125",
//     email3 : "s@gmail.com"
// }]

// console.log(user[2].email3)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));

