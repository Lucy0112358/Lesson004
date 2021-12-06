// Task 9 . Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
let num = 33;
let res = true;
if (num % 2 === 0) {
  res = false;
}
if (num % 3 === 0) {
  res = false;
}
if (num % 5 === 0) {
  res = false;
}
for (let j = 2; j <= Math.sqrt(num); j++) {
  if (Math.sqrt(num) % j === 0) {
    res = false;
    break;
  }
}
if (num === 3 || num === 5 || num === 2) {
  res = true;
}
res === true ? console.log("yes") : console.log("no");
