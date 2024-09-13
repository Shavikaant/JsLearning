// object decleration meth

// singleton

// object literals

// const JsUser = {} // this is how we declear a object

// Object.create // this is known as constructor method to create a object

const mySym = Symbol("key1")


const JsUser = {
    name: "Kapil",
    [mySym]: "mykey1",
    age: 18,
    location: "bikaner",
    email: "rawat@123.com",
    isLoggedIn: false,
    LastLoggedIn: ["monday","sunday"]
}

// console.log(JsUser.email)

// console.log( JsUser[mySym])

// JsUser.email = 'Kaps@123.com'

// // Object.freeze(JsUser) // no changes will apply after freeze function

// JsUser.email = 'Kapil@isKing.com'

// console.log(JsUser)

JsUser.greeting = function(){
    console.log('Hello Js user');
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greetingTwo())
console.log(JsUser.greeting())