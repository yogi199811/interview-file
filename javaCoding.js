//  ++++++++++++++++++++++++++ Palindrome string  ++++++++++++++++

// let word = "madam"

//   for converting numbers

// let num = 123456
// let reversenum = num.toString()
// console.log(reversenum,typeof(reversenum));

// Given an array of size n-1 containing unique numbers from 1 to n, find the missing number.Ex1:Input: [1, 2, 4, 5]Output: 3

let uniquearr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function missingNumber(arr) {
  let n = arr.length + 1;

  let sum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return sum - actualSum;
}

console.log(missingNumber(uniquearr));

function palindrome(word) {
  let reverse = word.split("").reverse().join("");

  if (word.toLowerCase() === reverse.toLowerCase()) {
    console.log("its palindrome");
  } else {
    console.log("its not palindrome");
  }
}

// palindrome("laval")

// +++++++++++++++++++++reverse String +++++++++++++++++

function reverseString(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

// console.log(reverseString("yogi"));

// +++++++++++++++++++ longest word in function ++++++++++++++++++++++

function longestWord(word) {
  let words = word.split(" ");
  let longword = "";

  for (let word of words) {
    if (word.length > longword.length) {
      longword = word;
    }
  }

  return longword;
}

// console.log(longestWord("i am yogesh rajawat"));

// +++++++++++++++++++++++ remove duplicate number in array ++++++++++++++++++

const arr = [1, 2, 3, 4, 4, 5, 8, 6, 6, 8, 7, 1, 56, 9];
// console.log(arr.indexOf(99));

// methode one

// function duplicate(arr){
//     return [ ...new Set(arr)]
// }

console.log(duplicate(arr));

function duplicate(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (copy.indexOf(arr[i]) === -1) {
      copy.push(arr[i]);
    }
  }

  return copy;
}

// console.log(duplicate(arr));

// +++++++++++++++++++++++++ anagrams  +++++++++++++++

function anagrams(str1, str2) {
  const sort1 = str1.split("").sort().join("");
  const sort2 = str2.split("").sort().join("");

  if (sort1 === sort2) {
    console.log("anagram", str1, str2);
  }
}

// anagrams("silent", "listen");

// ++++++++++++++++++++++++ Factoriyal or num ++++++++++++++++

//  factoriyal ka matlab jitnaa number hai usko 1 tk minus krna  ex [4 = 4*3*2*1]

function factoriyal(n) {
  let result = 1;

  for (i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// console.log(factoriyal(5));

// +++++++++++++++++++++ divisible ++++++++++++++++

const arr1 = [11, 1, 10];
function divisible(arr) {
  let lastDigit = arr[arr.length - 1] % 10;

  if (lastDigit === 0) {
    console.log("divisible");
  } else {
    console.log("not divisible");
  }
}
// divisible(arr1)

// +++++++++++++++++Armstrong+++++++++++++++++

function Armstrong(number) {
  const numString = number.toString();
  const numDigit = numString.length;

  let sum = 0;

  for (let i = 0; i < numDigit; i++) {
    const Digit = parseInt(numString[i]);
    sum += Math.pow(Digit, numDigit);
  }

  return sum === number;
}

const number = 153;

if (Armstrong(number)) {
  console.log(`is armstrong number  ${number}`);
} else {
  console.log(`is not armstrong number  ${number}`);
}

// +++++++++++++++++++++ Pyramid +++++++++++++++++++

function Star(height) {
  for (let i = 1; i <= height - 1; i++) {
    let row = "";

    for (let j = 1; j <= height - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

const height = 5;

Star(height);

// ++++++++++++++++++++ duplicate

// const akku = [1,2,3,5,5,7,8,6,69,9,9,2]

// const dupli =  new Set(akku)
// console.log(dupli);

// +++++++++++++++++ new date formet

const date = new Date().toISOString().split("T");

// console.log(date);

// +++++++++ cumulative sum of an array

const newArr = [22, 23, 9, 46, 100];

const createNewArr = newArr.reduce((acc, num) => acc + num, 20);
// console.log(createNewArr);

//++++++++++++++++++= small chunks

function chunksArrayValue(array, size) {
  let myResult = [];
  let index = 0;

  while (index < array.length) {
    myResult.push(array.slice(index, index + size));
    index += size;
  }

  return myResult;
}

const arr9 = [1, 3, 6, 8, 5, 8, 3, 4, 6, 8];
const mySize = 3;
//++++++++++++++++

const size = 4;
function chunks() {
  const res = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));
  }
  return res;
}
//  console.log(chunksArrayValue(arr9, mySize));

//+++++++++++ camel Case

// let myValue = 'my_name_is_akku' ;

// let resultVal =myValue.replace(/[-_](.)/g,(val,e)=>e.toUpperCase())

// console.log(resultVal);

//  ++++++++++++++++++++ swaping two variable
let i = 4;
let j = 8;

// console.log(i);
// console.log(j);

i = i + j;

j = i - j;

i = i - j;

// console.log(i);
// console.log(j);

//  +++++++++++++++++++ countdown ++++++

function countDown(count) {
  let startCount = count;

  const clear = setInterval(() => {
    if (startCount >= 0) {
      console.log(startCount);
      startCount--;
    } else {
      clearInterval(clear);
      console.log("countDown end");
    }
  }, 1000);
}

// console.log(countDown(10));

//  ++++++++++++++++  string into  number +++++++++++++

let s = "123";
let k = "abc";

function convert(s) {
  if (+s === +s) {
    console.log(+s);
  } else {
    console.log(0);
  }
}
// convert(k)

// find min and max value

function values(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let num = Math.random();

  //  console.log(num);
  return Math.floor(num * (max - min + 1)) + min;

  // 6*(30-15+1)=96+15=111
}

// console.log(values(15,30));

//++++++++++++++ repeating elements in array

let numArr = [1, 2, 5, 7, 9, 7, 6, 43, 21, 4, 6, 8, 3, 2, 1, 4, 6, 8, 9];
let resArr = {};

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] in resArr) {
    resArr[numArr[i]] += 1;
  } else {
    resArr[numArr[i]] = 1;
  }
}

// console.log(resArr);

// +++++++++++++++++++++++ first letter to uppercase

let namee = "hello world akku is the developer of the year";

let ansss = namee
  .split(" ")
  .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
  .join(" ");

// console.log(ansss);

// ++++++++++++++++++++++++++++ longest word

let n = "i m the devil of my world ";

const ans = (str) => {
  let word = str.split(" ");
  let long = "";

  for (let val of word) {
    if (val.length >= long.length) {
      long = val;
    }
  }

  return long;
};

// console.log(ans(n));

// +++++++++++++++++ Can you write a function in JavaScript to rename a specific property in an object?  ++++++++++++++

const obj = { name: "yogi", age: 25, city: "BHopal" };
// console.log(obj["age"]);

function property(object, oldpro, newpro) {
  object[newpro] = object[oldpro];
  delete object[oldpro];
  return object;
}
const rename = property(obj, "age", "umar");
// console.log(obj);

// Can you write a function in JavaScript to find the second-largest element in an array

const l = [5, 2, 45, 3, 74, 33, 9, 42, 4, 63, 3, 69, 1, 48, 85, 0, 25, 44, 5];

const a = [...new Set(l)].sort(
  (a, b) => a - b,
); /* ese sort karo gay toh galat aayega isliye function use karo sort ke andar */

// console.log(a);

// console.log(a[a.length-2]);

// Question 25: Can you write a JavaScript function to reverse the key-value pairs of an object

const obj5 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

function reverseObj(obj) {
  let reverse = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      reverse[obj[key]] = key;
    }
  }

  return reverse;
}
console.log(reverseObj(obj5));

// Question 28: Can you write a JavaScript function to truncate a given string to a specified length and append “…” if it exceeds that length?

const st = "this is very long string to turncate";
const len = 11;

const f = st.length > len ? st.slice(0, len) : st;
// console.log(f);

// Question 30: Can you write a JavaScript function to check if a given string has all unique characters?

const stri = "yogeshhdo";

function unique(str) {
  return new Set(str).size === str.length;
}

//console.log(unique(stri));

// Question 31: Can you write a function in JavaScript to convert each string in an array of strings to uppercase?

const a5 = ["apple", "banana", "kiwi", "pineapple", "pomigrante"];

console.log(a5.map((elm) => elm.toUpperCase()));

// Question 35: Can you write a JavaScript function to rotate the elements of an array to the right by a specified number of positions?

const a6 = [1, 2, 3, 4, 5];

function two(arr, pos) {
  return arr.slice(-pos).concat(arr.slice(0, -pos));
}
console.log(two(a6, 2));

// Question 36: Can you write a JavaScript function to convert a given number of minutes into hours and minutes?

let time = 125;
const h = Math.floor(time / 60);
const m = time % 60;

// console.log(`${h}h ${m}m`);

// Question 37: Can you write a JavaScript function to generate a random password of a specified length?

function password(length) {
  let char = "abcdefghijklmnopqrst1234567890!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const reandom = Math.floor(Math.random() * char.length);
    // console.log(reandom);

    password += char[reandom];
    // console.log(password);
  }
  return password;
}
console.log(password(5));

let d = new Array(5);
d.fill(Math.floor(Math.random() * 100));
console.log(d);

// find how many times  elements repeating  in array
const fruit = [
  "apple",
  "mango",
  "papaya",
  "kiwi",
  "grapes",
  "papaya",
  "kiwi",
  "lichi",
  "mango",
  "grapes",
  "papaya",
  "kiwi",
  "lichi",
  "guave",
  "lichi",
  "mango",
  "papaya",
];

function find(fruit) {
  return fruit.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}
console.log(find(fruit));

// +++++++++++++++ find common letters in string og array

const letters = ["flop", "flower", "floor", "flat"];

function common(letters) {
  let res = [];

  for (let char of letters[0]) {
    if (letters.every((word) => word.includes(char))) {
      res.push(char);

      letters.map((i) => i.replace(char, ""));
    }
  }
  return res;
}
console.log(common(letters));

//  find duplicate in array

const array = [1, 2, 3, 4, 5, 1, 2, 3];

function duplicate(array) {
  let seen = new Set();
  let duplicate = new Set();

  array.forEach((item) => {
    if (seen.has(item)) {
      duplicate.add(item);
    } else {
      seen.add(item);
    }
  });

  return [...duplicate];
}

console.log(duplicate(array));

//++++++++++++  techValense +++++++++++++=

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

// Filter out elements that are not present in the other array
const uniqueArray1 = array1.filter((item) => !array2.includes(item));
const uniqueArray2 = array2.filter((item) => !array1.includes(item));

// Combine the two unique arrays
const array3 = [...uniqueArray1, ...uniqueArray2];

console.log(array3); // Output: [1, 2, 5, 6]

const uniques = [
  { id: 1, title: "yogi" },
  { id: 2, title: "raju" },
  { id: 1, title: "kala" },
  { id: 3, title: "golu" },
  { id: 4, title: "annu" },
  { id: 2, title: "akku" },
];

// Step 1: Create a map to track the count of each id
const idCounts = uniques.reduce((acc, elem) => {
  acc[elem.id] = (acc[elem.id] || 0) + 1;
  return acc;
}, {});

// Step 2: Filter elements with duplicate ids
const duplicates = uniques.filter((elem) => idCounts[elem.id] > 1);

console.log("Duplicate elements:", duplicates);


// Find two numbers in array whose sum = target.

Input: [2, 7, 11, 15], target = 9  
Output: [0, 1]  // indexes


function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}



