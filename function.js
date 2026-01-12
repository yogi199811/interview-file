// normal perameter function

//  function callBack(username,city){
//     console.log(`hello ${username} to the city of lake ${city}`)
// }

// callBack("yogi","Bhopal")

// ********************* more then one argument ***********************

// function priceCount(n1,n2,...val){
//     console.log(n1,n2,val)
// }

// priceCount(2,5,6,45,5,2,6)

// ________________________ passing object as perameter _____________

// const obj = {
//     name : "yogi",
//     city : 'bhopal',
//     age : 25
// }
// console.log(obj);
// function callObject(anyobj){
//     anyobj.age = 29
//     anyobj.name = "akku"
//     anyobj.city = "indore"
//     return

// }

// callObject(obj)
// console.log(obj);

// function passingObj(get){
//     return console.log(`${get.user} is this you ? ${get.islogged}...`)

// }

// passingObj({
//     user : "yogesh",
//     islogged : true
// })

// ++++++++++++++++++++++++++++++++++++++++++++ Passing Array ++++++++++++++++++

// const oneArr = [1,2,3,4,"yogi"]

// function myArr (getelm){

//   return   getelm[3]*5

// }

// // myArr(oneArr)
// console.log(oneArr);
// console.log(oneArr[3])
// console.log(myArr(oneArr))

// ++++++++++++++++++++++ CALLBACK +++++++++++++++++++


function  Adding(n1,n2) {
    let sum = n1 + n2
    return sum
    
}
function Multiple(ans) {

    return ans * 2
    
}

let result = Adding(10,10)


console.log(Multiple(result));
