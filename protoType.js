function greet(name) {
  this.name = name;
}

greet.prototype.sayHello = function () {
  console.log("hii" + " " + this.name);
};

let yogi = new greet("yogi")

yogi.sayHello()
