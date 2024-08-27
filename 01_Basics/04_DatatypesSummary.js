 // Primitive

 // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

 // refernce (Non primitive)

 // Array, Objects, functions

 const bignum = 1234567890123451232094123213n

 console.log(typeof bignum)

 // Stack (primitive),Heap (Non-primitive)

 let myview = "kapil"
 let anotherview = myview

 anotherview = 'bhai'

 console.log(anotherview)

 console.log(myview)


 let user = {
    email: 'kapil,gogo',
    upi: 'huhuj@susa'
 }

 let usertwo = user

 usertwo.email = 'khokho@123'

 console.log(usertwo)
 console.log(user)

