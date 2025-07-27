"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username = "toaster";
var pi = 3.14;
// Core premitive types:
/**
 * 1. string
 * 2. number
 * 3. boolean
 */
var fullName = "Toaster Code";
var age = 25;
var isSubscribed = true;
//Type inference
var country = "UK";
var points = 100;
var isOnline = true;
// type any
var mood;
mood = "happy";
mood = 42;
var value = "Hello";
value = 123;
value = true;
value = { name: "toaster" };
var result = "I am a string";
console.log(result.toUpperCase());
// result = 42;
// console.log(result.toUpperCase());
// type unknown
var something = "Hello World";
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
function logMessage(message) {
  console.log("LOg: " + message);
}
logMessage("Hello from toaster code");
// ! Null and Undefined
var user;
console.log(user);
