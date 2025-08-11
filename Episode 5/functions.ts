// Normal function is TS which returns string
function add1(a: number, b: number): string {
  return "a + b";
}
console.log(add1(5, 10));

// A function dosen't return anything
function logMessage(message: string): void {
  console.log("message: ", message);
}

// Implict and Explicit typing
function subtracts(a: number, b: number): number {
  return a - b;
}
subtracts(5, 10);
// ! Always use explicit type

// Optional parameter
function greet(name: string, age?: number): void {
  if (age) {
    console.log(`Hello ${name}, you are ${age} years old!`);
  } else {
    console.log(`Hello ${name}`);
  }
}
greet("Toaster Code", 25); //✅
//greet("Toaster Code"); ✅

// Default Parameter
function countdown(start: number = 5): void {
  while (start > 0) {
    console.log(start);
    start--;
  }
  console.log("Done");
}
countdown(); //✅
//countdown(5); ✅

// Arrow function
const multiply = (a: number, b: number, c: number): number => {
  return a * b * c;
};
console.log(multiply(5, 5, 5));

// single expression
const multiplyAgain = (a: number, b: number, c: number): number => a * b * c;

// Mixing optionla + default
const greetUser = (name: string, age: number = 18, country?: string): void => {
  console.log(
    `Hello ${name}, age: ${age} and ${country ? `from ${country}` : ""}`
  );
};

greetUser("Toaster Code here");
greetUser("Toaster", 25, "UK");

// Callback function
let add: (a: number, b: number) => number;

add = function (x: number, y: number): number {
  return x + y;
};
console.log(add(3, 7));

function processInput(callback: (input: string) => void) {
  const name = "Toaster Head";
  callback(name);
}
processInput((username: string) => {
  console.log(`Hello ${username}`);
});

// function as types in interfaces
interface Greeter {
  (name: string): void;
}

const sayHello: Greeter = (name: string) => {
  console.log(`Hello ${name}`);
};

sayHello("Priyanshu");

export {};
