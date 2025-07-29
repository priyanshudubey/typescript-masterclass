/**
 * Array and Tuples
 */

// ! Array Declaration using type[] syntax
let score: number[] = [90, 95, 40, 10];
let fruits: string[] = ["apple", "banana"];

score.push(100);

//! Array Declaration using Array<Type>
let flags: Array<string> = ["hey", "what?"];

// Readonly Array
const days: readonly string[] = ["Mon", "Tues", "Wed"];
console.log(days);

// Multi type array
let names: (string | number | boolean)[] = [123, "jhahgh", true, "akbadd"];

export {};
