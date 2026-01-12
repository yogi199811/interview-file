 const myobj = {
    name : "yogesh",
    city : "bhopal",
    age : 25,
    isLiving : true,
     location : ()=>{
        console.log("currently in indore")

    },

    blood : function(){console.log(`${this.name} your blood group is A- and your age is ${this.age}`)}
 }

// two way to get access of object

myobj.age = 63
console.log(myobj);
// first one 
 console.log(myobj.age)
 const obj = myobj
 console.log(obj);

//  second one
//  console.log(myobj['city'])

//  console.log(myobj.location());
//  console.log(myobj.blood());

//  myobj.age = 26
// //  object ki property baad mai bhi dii ja sakti hai
//  myobj.greeting = "welcome yogi"
//  console.log(myobj);

// // another way of declearing object
//  const obj = new Object();

//  obj.fullName = "yogesh kushwaha"

//  console.log(obj);

//    axios.get("https://github.com/images")




//  const a = {
//    name : "yogi",
//    city : "bhopal",
//    family : {
//       mother : " mrs beena",
//       father : "mr ravghindra singh",
      
//    },

//    data : {
//       api : "htpps:github",
//       images : "profile ",
//       acc : "land"
//    },
//  }


// const { data} = a;
// const { family} = a;
// console.log(data.api);
// console.log(a.data.acc);
// console.log(family.mother);




