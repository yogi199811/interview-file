// // Armstrong

// function armstrong(number) {
//   let num = number.toString();
//   let num2 = num.length;
//   let sum = 0;

//   for (let digit of num) {
//     sum += Math.pow(parseInt(digit), num2);
//   }

//   return sum === number;
// }
// // console.log(armstrong(153));

// // reverse obj

// const obj = { a: 1, b: 2, c: 3, d: 4 };

// function change(obj,objold,objnew){
//     obj[objnew] = obj[objold]
//     delete obj[objold]

//     console.log(obj);
    
// }

// let chg = change(obj,"a","A")
// console.log(chg);





// function reverse(obj) {
//   let reverse = {};

//   for (let key in obj) {
//     if(obj.hasOwnProperty(key)){
        
//         reverse[obj[key]] = key;
//     }
//   }

// //   console.log(reverse);

// }



// // reverse(obj)


let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = 4

function chunks(arr,size){
  for(let i = 0 ;i<arr.length;i+=size){
    
    console.log(arr.slice(i,i+size))}
}
chunks(arr,size);