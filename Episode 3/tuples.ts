/**
 * Tuples
 */
let user: [string, number] = ["Toaster", 25];

// Coordinates
let coordinates: [number, number] = [12.34, 56.78];

// Api status pair
let response: [boolean, string] = [false, "server error"];

// RGB color values
// let rgb: [number, number, number] = [255, 255, 0];

// Push element in tuples
user.push("Developer");
console.log(user);

// Define longer tuple
let classes: [string, number, string?] = ["Toaster", 25, "New name"];
console.log(classes[2]);

// Destructuring of tuples
let rgb: [number, number, number] = [255, 255, 0];
const [r, g, b] = rgb;

// Tuples vs Array usage
let users: string[] = ["Riya", "Sarah", "Morgan"];

let currUser: [string, boolean] = ["Sarah", true];

/**
 *! Feature                 Array                       Tuples
 *  Lenght                  Can be any                  Fixed/ Known
 *  Value Types             All same                    Can be Different(per position)
 *  Usage                   Lists, Collections          Structured unites(rows, records)
 *  Flexibility             Dynamic                     Rigid
 */

export {};
