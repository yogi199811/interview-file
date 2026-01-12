// const user = {
//   name: "yogi",
//   city: "bhopal",
//   age: 25,
//   getUser: function () {
//     // console.log(`user name is ${this.name} and city is ${this.city}`);
//     // console.log(this);
//   },

//   // this will not work

//   // getDetail : ()=>{
//   //     console.log(`${this.name}`);

//   // }
// };
// console.log(user.getUser());

// console.log(user);
// console.log(user.getUser());

// const {age}  = user;
// console.log(age);

function Practise(username, city, age) {

  this.username = username,
  this.city = city,
  this.age = age
 
  return this;
}

// function sum(a, b) {
//   (this.a = a), (this.b = b);

//   return this;
// }

const ans1 =  new Practise("yogi",'bhopal',22)
const ans2 = new Practise("akku",'indoer',26)

//+++++++++++++++++++++ ans2 nai ans1 ko overright kiya isliye hum New keyword use karte hai jisse new instance bane matlab copy bane wahi bapas naa aaye.

console.log(ans1);
console.log(ans2);



const a1 = [1,2,55,6,9,666,7,3,65,7,62,25,1,646,4,87,3,18,5,225,,3,5,5,44,4]
const a2 = [1,5,8,9,4,6,3,2,7]

let b = a1.sort((a,b)=>a-b)
console.log(b);



  