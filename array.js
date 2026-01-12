let arr =  [1,2,3,4,5,25,29,18,15,35,39,45]


console.log(arr.pop())
console.log(arr.reverse())
console.log(arr.push(22))
console.log(arr.shift(69))
console.log(arr.unshift(12))
console.log(arr.slice(2,4))
console.log(arr.splice(1,3))
console.log(arr)
console.log(arr.indexOf(4))
console.log(arr.length)
console.log(arr.fill("oggy"))
console.log(arr.join())
console.log(arr.forEach((e)=>{
  console.log(e+1)
}))
console.log(arr.map((elem)=>{
let event = elem*5;
console.log(event)

}))

console.log(arr.filter((a)=>{
if (a >18) {
    console.log(`i found num ${a}`)
}

}))

console.log(arr)





// const myArr = [{name:"yogi",dob : '11/06/1998'}, {name:"akku",dob : '03/03/1997'}]


// myArr.map((value)=>{
//     console.log(`the name in this object is ${value.name} and there dob are ${value.dob}`)

// })

// // +++++++++++++++++++++++++++ reduse+++++++++

// const arre = [1,2,5,14,20]

//  const arr2 =   arre.reduce((acc,crr)=>{
//     return acc + crr
//  },10)

//  console.log(arr2);