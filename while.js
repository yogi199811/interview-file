// let i = 10

// while (i>=0) {

//     console.log(`value of i is ${i}`)
//     i--

// }

// let num = 20;
// do {
//     console.log(num)
//     num = num - 2
// } while (num>=0);

// var a = prompt("enter your number");
// var b = prompt("enter your number ");

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(a, b));

// let size = 4
// let arr = [1,2,3,4,5,6,7,8,9,2,4,6,3,6,6,6,54,89,15,136,1365,32,25,65,30,12,15]

// function chunksarr(arr,size){
//   let result = []
//   for(let i =0;i<arr.length; i+=size){
//    result.push( arr.slice(i,i+size))

//   }

//   return result

// }


//  const ans = chunksarr(arr,size)
//  console.log(ans);

// same letter in array
 
// const  arr = ["flower","flop","floes","flood"]

// function findSameLetter(arr){
//   let result = []
//   for (const element of arr[0]) {
//     if(arr.every((word)=>word.includes(element))){
//       result.push(element)
//     }
//     arr.map(e=>e.replace(element,''))
    
//   }
//   return result.join("")
  
// }
// console.log(findSameLetter(arr));

const arr = [1,2,3,4,5,6,2,4,1]
function duplicate(arr){
  const newarr = new Set()
  const duplicate = new Set()

  for(const i of arr){
    if(newarr.has(i)){
      duplicate.add(i)
    }else{
      newarr.add(i)
    }
  }
  console.log(arr);

  console.log(newarr);
  console.log(duplicate);
  

}
duplicate(arr)




