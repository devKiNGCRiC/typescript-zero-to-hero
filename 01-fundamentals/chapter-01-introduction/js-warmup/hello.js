// hello.js (hand-written JavaScript)
let message = "Hello, JavaScript!";
console.log(message);

message = 42;               // JavaScript allows this
console.log(message);

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(add(5, 3));
console.log(add("5", 3));
console.log(multiply(5, 3));
console.log(multiply("5", 3));
console.log(multiply("five", 3));
console.log(multiply(undefined, 3));