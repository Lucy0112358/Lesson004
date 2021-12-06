// Task 10 Fibonacci
let arr = [0, 1];
let indexx = 20;
let k = 0;
for (let i = 2; i < indexx + 1; i++) {
  k = arr[i - 2] + arr[i - 1];
  arr.push(k);
}
console.log(arr[indexx]);

// Task 12 Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
// words from the array.

let str = "_, we have a _.";
let array = ["Houston", "problem"];
for (let i = 0; i < 2; i++) {
  if (str.indexOf("_") >= 0) {
    str = str.replace("_", array[0]);
    array.shift();
  }
}
console.log(str);

// Task 13 Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
// numbers in a separate array. Arrange them such as from the beginning are the odds and from the
// ending the evens.
let numbers = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let even = [];
let owe = [];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    if (numbers[i] % 2 === 1) {
      even.push(numbers[i]);
    } else {
      owe.push(numbers[i]);
    }
  }
}
console.log(even + " " + owe);

// Task 14 Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.
let numb = [1, 4, "i am a string", "456"];
let strin = 0;
let nume = 0;
for (let i = 0; i < numb.length; i++) {
  if (typeof numb[i] === "number") {
    nume++;
  } else {
    strin++;
  }
}
console.log(nume);
console.log(strin);

// Task 15 . Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
// of their lengths.

let words = ["wish", "slightly", "understand", "longer", "unexpected", "heart"]
let leng = []
let maxValue = 0
for (let i = 0; i < words.length; i++) {
    leng.push(words[i].length)
  minValue = leng[0]
    if(leng[i]>maxValue){
        maxValue = leng[i]
    }
}
let min = Math.min(...leng);
console.log(maxValue+min);

// Task 16
