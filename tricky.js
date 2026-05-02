// swipe number without variable 0r function

//   var a = 25;
//   var b = 20;

//   a = a + b;

//   b = a-b;

//   a = a-b

//   console.log(a);
//   console.log(b);

// var anss
// function swap(a,b){

//     var c;

//     c = a
//     a = b

//     b = c

//     anss = (a,b)

//     return

// }

//  const ans =   swap(100,50)
//  console.log(ans);

// var a = 10;

// var b = 15;

// a = b

// a = 20

// console.log(b);
// console.log(a);

// const obj = {
//     name : " yogi",
//     age : 25
// }

// obj.name = "yogesh"

// console.log(obj);

// const myPromise = ()=> Promise.resolve("i have resolved")

// function first(){
//   myPromise().then((res)=> console.log(res))
//   console.log("second")
// }

// async function second(){
//   console.log( await myPromise())
//   console.log("second")

// }

// function langda() {
//   setTimeout(() => {
//     console.log("1");
//   }, 0);

//   console.log("3");

//   setTimeout(() => {
//     console.log("2");
//   }, 1000);

// }

langda()


// first()
// second();

// const arr1 = [1,2,3]
// const arr2 = [4,5,6,7]

// const arr3 = [...arr1 , ...arr2]
// console.log(arr3);



const obj = {
  name: "Yogesh",
  getName() {
    console.log(this.name);
  }
};

obj.getName();
