// for (let index = 0; index <5; index++) {
//   let value = index    
//   console.log(value)
// }




// for (let i = 1; i<=5; i++) {
//     console.log(`the value of i is ${i}`);

//     for (let j = 1; j <=5; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
    
// }


// ++++++++++++++++++++++++ Reverse Array ++++++++++++++

// let arr = [1,2,3,4,5]
// let element = [];

// for (let i = arr.length ; i>0; i--) {

//     element.push(i)

    
// }
// console.log(arr);
// console.log(element)



// const arr = [1,2,3,4,5]
// let element = []

// for (let index = 1; index <= arr.length; index++) {
//     // element = arr[index]
//      element.push(index*2);
//     // console.log(element);
    
// }
// console.log(arr);
// console.log(element);



// ++++++++++++++++++++++++ reverse string +++++++++++++++++++



// let a = "yogesh"
// let b = ""

// for(let i = a.length-1; i>=0 ; i--){
//     b += a[i]
//     // console.log(b);
// }

// console.log(b);


// function reverse(str){
//     let b = ""

//     for (let i = str.length-1; i >=0 ; i--) {
//         b += str[i]

       
        
//     }

//     return b

// }


// console.log(reverse("akku"));
// console.log(reverse("yogi"));
// console.log(reverse("vikas"));

// reverse methode only work on array

// let b = [1,2,3]
// b.reverse()
// console.log(b);


// +++++++++++++++++++++++++++  reverse string using split or join ++++++++++++

// let a = "akku"
// console.log(a);


//  let b =   a.split("")
//  console.log(b);


//  let c  = b.reverse()
//  console.log(c);

//  let d = c.join("")
//  console.log(d);


// let a  = "yogi"
// let b =  a.split("").reverse().join("")

// console.log(b);



// function reverseStr (e){
//   let b =  e.split("").reverse().join("")
//    return  b
// }

// let myStr = reverseStr("12345")
// let myStr1 = reverseStr("fancy")
// let myStr2 = reverseStr("monu")
// console.log(myStr)
// console.log(myStr1)
// console.log(myStr2)



const arr = [1,2,3,4,5]
const reverse = []

for(let i = arr.length;i>0;i--){
    reverse.push(i)

}
console.log(reverse);

const str = "yogesh"
let revStr = ""
for(let i = str.length-1;i>=0;i--){
    revStr += str[i]


}
console.log(revStr);










