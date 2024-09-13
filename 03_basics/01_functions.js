

function saymyname(){

console.log('k');
console.log('a');
console.log('p');
console.log('i');
console.log('l');

}

// saymyname()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    
   let result = number1 + number2

   return result
    
}


const result = addTwoNumbers(3,5)

// console.log(result)

function logInUserMessage(username){
    if (username === undefined){
     console.log("please enter a username")
     return
    }else{
    return `${username} just logged in`
    }
}

// console.log(logInUserMessage());

function calculateCartPrice(...num1){

    return num1

}

// console.log(calculateCartPrice(200,400,500))

const user = {
    username: "kapil",
    price: 199
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handelObject(user)

// handelObject({
//     username: "Gabbar",
//     price: "thakur"
// })

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))