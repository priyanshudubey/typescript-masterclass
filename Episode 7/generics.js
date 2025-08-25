"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ! Generics
 * Generics allow creating 'type variables' which can be used to create classes, functions & type
 * aliases that don't need to explicitly define the types that they use.
 *
 * Generics makes it easier to write reusable code.
 */
function identityString(value) {
    return value;
}
// console.log(identityString("Hello"));
// console.log(identityString(42));
// let result = identityString(42);
// result.toUpperCase();
//! Generics
function identity(value) {
    return value;
}
console.log(identity("Hello From generics"));
console.log(identity(42));
function getFirstElement(arr) {
    return arr[0];
}
var number = [10, 20, 30];
var names = ["Sarah", "Morgan", "Riya"];
console.log(getFirstElement(number));
console.log(getFirstElement(names));
