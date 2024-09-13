// const tinderUser = new Object() // singleton object

const tinderUser = {} // non singleton object 

tinderUser.id = "1234abc";
tinderUser.name = 'kapil';
tinderUser.isLoggedIn = 'false';

// console.log(tinderUser);

const regularUser = {
    email: 'huu@gamil.com',
    fullname:{
        username: {
            firstname: 'kapil',
            lastname: 'rawat'
        }
    }
}

// console.log(regularUser.fullname.username.lastname);
const obj1 = {1:'a', 2: 'b'}
const obj2 = {3:'a', 4: 'b'}

// const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);

const users = [
    {
        id: 1,
        email: 'rawat@1234.com'
    },
    {
        id: 1,
        email: 'rawat@1234.com'
    },
    {
        id: 1,
        email: 'rawat@1234.com'
    }
]
 
//  console.log(users[1].email);
  

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// # object d-structuring

const course = {
    coursename: "kapil ka course",
    price: "999.9",
    courseInstructor: 'Kapil'
}

const {courseInstructor: instructor} = course

console.log(instructor)

// {
//     name: "kapil",
//     coursename: 'huu haa ha',
//     price: 'free'
// }

[
    {},
    {},
    {}
]