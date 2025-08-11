"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Normal function is TS which returns string
function add1(a, b) {
    return "a + b";
}
console.log(add1(5, 10));
// A function dosen't return anything
function logMessage(message) {
    console.log("message: ", message);
}
// Implict and Explicit typing
function subtracts(a, b) {
    return a - b;
}
subtracts(5, 10);
// ! Always use explicit type
// Optional parameter
function greet(name, age) {
    if (age) {
        console.log("Hello ".concat(name, ", you are ").concat(age, " years old!"));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greet("Toaster Code", 25); //✅
//greet("Toaster Code"); ✅
// Default Parameter
function countdown(start) {
    if (start === void 0) { start = 5; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Done");
}
countdown(); //✅
//countdown(5); ✅
// Arrow function
var multiply = function (a, b, c) {
    return a * b * c;
};
console.log(multiply(5, 5, 5));
// single expression
var multiplyAgain = function (a, b, c) { return a * b * c; };
// Mixing optionla + default
var greetUser = function (name, age, country) {
    if (age === void 0) { age = 18; }
    console.log("Hello ".concat(name, ", age: ").concat(age, " and ").concat(country ? "from ".concat(country) : ""));
};
greetUser("Toaster Code here");
greetUser("Toaster", 25, "UK");
// Callback function
var add;
add = function (x, y) {
    return x + y;
};
console.log(add(3, 7));
function processInput(callback) {
    var name = "Toaster Head";
    callback(name);
}
processInput(function (username) {
    console.log("Hello ".concat(username));
});
var sayHello = function (name) {
    console.log("Hello ".concat(name));
};
sayHello("Priyanshu");
