const player = [
  {
    india: true,
    name: "virat",
    century: 80,
    playing: "yes",
  },
  {
    austrilia: "warner",
    century: 40,
    playing: "yes",
  },
  {
    southAfrica: " ab de ",
    century: 40,
    playing: "no",
  },

  {
    eng: " morgan",
    century: 20,
    playing: "no",
  },
  {
    india: false,
    name: "Rohit",
    century: 32,
    playing: "yes",
  },
];

const ans = player.map((det) => {
  return det.india;
});

const ans2 = player.filter((det) => {
  return det.playing === "no";
});

const ans3 = player.filter((event) => {
  return event.india === true && event.playing === "yes";
});

console.log(ans);
console.log(ans2);
console.log(ans3);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr =  arr.map((y)=> y+10)

// console.log(newArr);
// console.log(arr);

//     const myans = arr.map((v)=>v*5).map((v)=> {return v*10}).map((v)=> v+10).filter((a)=> a>100)

//  console.log(myans);

// const newRed  = [1,2,3,4,5,6]

// const Ans = arr.reduce((acc,crr)=> acc*crr,2 )

// let initivalue = 4

// const Ans = arr.reduce((acc,crr)=> acc*crr,initivalue )

// console.log(Ans);

let a = [1, 2, 3, 4, 5];
let element = []

for (let i = a.length; i > 0; i--) {
  element.push(i);
}
console.log(element);

console.log(a);
