// ***************** map ***************

// let a = [1,4,5,8,9]

// let b = a.map((e)=>e*2)

// console.log(b);

// ?????????????????????????????   filter

// const a = [1,2,3,4,5,6,7]

// const b = a.filter((e)=> e>4)

// console.log(b);

//    reduce  ????????????????

// const a = [1,2,3,4,5,6,7]

// const b = a.reduce((acc,curr)=> {
//     return acc+curr
// },0)

// console.log(b);

// ++++++++++++++++++   reverse  string or arry

// let a = "yogesh"

// let b = a.split("").reverse().join("")

// console.log(b);

// let a = "aakanksha"

//    let element ;
//    for (let i = a.length-1; i >=0 ; i--) {
//      element += a[i];

//     }

//     console.log(element);

// +++++++++++++++++ promises

//  const proone =  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let user = true
//         if(user){
//             console.log('working1');
//             resolve("done")

//         }else{
//             reject("not done")
//         }

//     },1000);

// })

// proone.then(()=>{
//     console.log("chala");
// })

//    calling fetch

// let a = fetch("https://randomuser.me/api/").then((res) => res.json())
// .then((data)=> data)

// console.log(a);

class Name {
  constructor(name, age, city) {
    this.name = name;
    this.city = city;
    this.age = age;
    

  }

  callMethode() {
    console.log(
      `${this.name} and lives in ${this.city} and age is ${this.age}`
    );
  }
}

let a = new Name("yogi",25,"bhopal")


 let b =  a.callMethode()


 console.log(b);
