class Yogesh {
    constructor(username,age){
        this.username  = username ,
        this.age = age
        
        // return this
    }
    
    
    
    callMethode(){
        
        // console.log(`this is ${this.username}`);
        
    }
    
    
    changeName(){
        console.log(this);
        // console.log(`Username :: ${this.username.toUpperCase()}`);
    }

}


const ans  =  new Yogesh("yogi",'bhopal')
const ans2  =  new Yogesh("yogita",'bangal')

// console.log(ans);
// console.log(ans.callMethode());
// console.log(ans2.changeName());

// const obj = {
//     name : 'yogi',
//     age : 25
// }

// const obj2 =   obj

// obj2.age = 36
// console.log(obj);



class  Employee {

    bucket = "nothing"
    constructor(name,age,city,salary){
        this.name = name,
        this.age = age,
        this.city = city
        this.salary = salary



    }

    getName(){
        console.log(`your name is ${this.name}`);
    }


    practise(){
        console.log('busket is ',this.bucket);
    }


    total(){
        this.salary = this.salary * 30
         
        console.log(`your CTC is total ${this.salary}`);
    }


}


const yogi = new Employee("Yogesh",25,'bhopal',700)

console.log(yogi.total());
console.log(yogi.practise());


class Manager extends Employee{

    constructor(name ,profile){
        super(name),
        this.profile = profile}

    methode(){
        console.log(`name is ${this.name}`);
    }
}

const chai = new Manager('yogi','bhopal',25,'manager')

console.log( chai.methode());



function anna(num){
    let sum = 0
    let numstr = num.toString()
    let numdigit  = numstr.length

    for(let i = 0 ; i<numdigit ; i ++){
        let digit = parseInt(numstr[i])
        sum += Math.pow(digit,numdigit)
    }

    return sum === num

}
let number = 153
if (anna(number)) {
    console.log(`is armstrong number  ${number}`);
  } else {
    console.log(`is not armstrong number  ${number}`);
  }