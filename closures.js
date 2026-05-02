// function parent(){
//     let  a = 10
//     function child(){
//         console.log(a*10);
//     }

//     console.log(a);
    
//     child()
// }

// parent()



// function multiply(a){
//     return function(b){
//         return function(){
//             console.log(a,b);
            
//             // return a*b*c
//         }
//     }
// }

// console.log(multiply(5)(6)());



// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     return count;
//   };
// }

// const counter = outer();
// counter(); //1
// counter(); //2
// counter(); //3





function substract (){
  let total = 25

  return function(){
    return --total
  }
}


 let a =  substract()

 a()
 a()
 a()
 a()
 a()

 console.log(a());
 


