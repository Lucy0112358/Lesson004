// Task 6
let paragraph = "1, 1, -9";
let k = 0;

for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === "-") {
    k++;
  }
}
if (k % 2 === 0) {
  console.log("+");
} else {
  console.log("-");
}

// Task 7
let diqit = "4";
let number = 1235679;
let n = String(number);
let bol = false;
for (let i = 0; i < n.length; i++) {
  if (n[i] == diqit) {
    bol = true;
  }
}
bol === true ? console.log("yes") : console.log("no");

// Task 8 . Enter a number. Reverse its first and last digits. Print the new number.
let product = 12345679;
let str = String(product);
let first = str[0];
let last = str.length - 1;
let lust = str[last];
let res = lust + str.slice(1, str.length - 1) + first;
console.log(res);


