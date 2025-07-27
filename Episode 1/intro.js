"use strict";
// function greet(name: String): number {
//   return 123;
// }
// greet("toaster");
Object.defineProperty(exports, "__esModule", { value: true });
function calculateDiscount(price, discount) {
    return price - price * discount;
}
console.log(calculateDiscount(100, 10));
