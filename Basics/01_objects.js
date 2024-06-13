const mySymbol = Symbol("key2");

const JsUser = {
    FirstName: "Gaurav",
    LastName : "Katiyar",
    FullName : "Gaurav Katiyar",
    "Full Name" :  "Gaurav Katiyar",
    age: 18,
    email: "gaurav@gmail.com",
    mysymbol: "key1",
    [mySymbol]: "key2",
    location: "kanpur",
    isLoggedIn: false,
    LastLoggedIn: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.mysymbol)
console.log(JsUser.mySymbol)
console.log(JsUser[mySymbol])
console.log(JsUser.FullName)
console.log(JsUser["Full Name"])