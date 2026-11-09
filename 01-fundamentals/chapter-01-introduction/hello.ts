// hello.ts
let message: string = "Hello, TypeScript!";     //": String" = only text allowed
console.log(message);

// @ts-expect-error: intentional, a string cannot be assigned to a number
message = 42;

function add(a: number, b: number): number {    // inputs and output must be numbers
    return a + b;
}

console.log(add(5,3));      //OK
// @ts-expect-error: intentional, argument string cannot be assigned as parameter to number
console.log(add("5", 3));   //ERROR shown in VS Code with a red underline

function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(5, 3));
// @ts-expect-error: intentional, argument string cannot be assigned as parameter to number
console.log(multiply("5", 3));
// @ts-expect-error: intentional, argument string cannot be assigned as parameter to number
console.log(multiply("five", 3));
// @ts-expect-error: intentional, argument undefined cannot be assigned as parameter to number
console.log(multiply(undefined, 3));