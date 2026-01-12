// example of currying

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// jab tak 3 parameter nahi aa jate tb tak function execute nahi hoga

// console.log(add(8)(8)(8));


function multiply(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

const stp1 = multiply(10)
const stp2 = stp1(10)
const stp3 = stp2(10)
console.log(stp3);




