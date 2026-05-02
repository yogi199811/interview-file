const obj = {
  name: "yogesh",
  age: 28,

  getname(city) {
    console.log(`my name is ${this.name} and i am ${this.age} year old and i am from ${city}`);
  },
};

const obj2 = {
  name: "akku",
  age: 29,
};

let a = obj.getname.apply(obj2,["delhi"]);
console.log(a);
