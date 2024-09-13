

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

console.log(logInUserMessage());