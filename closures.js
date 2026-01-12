// function parent(){
//     let  a = 10
//     function child(){
//         console.log(a*10);
//     }

//     console.log(a);
    
//     child()
// }

// parent()



function multiply(a){
    return function(b){
        return function(){
            console.log(a,b);
            
            // return a*b*c
        }
    }
}

console.log(multiply(5)(6)());

