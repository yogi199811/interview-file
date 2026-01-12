function* generate() {
  yield "hello";
  yield "world";
  yield "how";
  yield "are";
  yield "you";




  return 'done'
}


const result = generate()

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());


for(const val of generate()){
    console.log(val);
    
}