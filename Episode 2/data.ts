let username = "toaster";
const pi = 3.14;

// Core premitive types:
/**
 * 1. string
 * 2. number
 * 3. boolean
 */

let fullName: string = "Toaster Code";
let age: number = 25;
let isSubscribed: boolean = true;

//Type inference
let country = "UK";
let points = 100;
let isOnline = true;

// ! type any
let mood;
mood = "happy";
mood = 42;

let value: any = "Hello";
value = 123;
value = true;
value = { name: "toaster" };

let result: any = "I am a string";
console.log(result.toUpperCase());
result = 42;
console.log(result.toUpperCase());

// type unknown
let something: unknown = "Hello World";
something = 42;
something = false;

// console.log(something.toUpperCase())
if (typeof something === "string") {
  console.log(something.toUpperCase());
}

// when to use any vs unknown
/**
 * ! any: no clue about the data or don't care about type safety
 * ! unknown: when you want to force yourself to check the type of data before using
 */

// Void, Null, Undefined

// ! Void - when you don't have to return any value

function logMessage(message: string): void {
  console.log("LOg: " + message);
}
logMessage("Hello from toaster code");

// ! Null and Undefined
let user;
console.log(user);

let account = null;
console.log(null);

let someValue: null = null;
let anotherValue: undefined = undefined;

// Interview Questions
/**
 * 1. Difference between any and unknown
 * 2. if you write let username = "toaster"; without an anootation, what will be the type of username?
 * 3. What does void means when used as a return type for a function?
 */

export {};
