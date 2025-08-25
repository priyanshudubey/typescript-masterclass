/**
 * ! Generics
 * Generics allow creating 'type variables' which can be used to create classes, functions & type
 * aliases that don't need to explicitly define the types that they use.
 *
 * Generics makes it easier to write reusable code.
 */
function identityString(value: any): string {
  return value;
}

// console.log(identityString("Hello"));
// console.log(identityString(42));

// let result = identityString(42);
// result.toUpperCase();

//! Generics
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("Hello From generics"));
console.log(identity<number>(42));

// Reusable utility function
function getFirstElement<T = string>(arr: T[]): T {
  return arr[0];
}
const number = [10, 20, 30];
const names = ["Sarah", "Morgan", "Riya"];
console.log(getFirstElement(number));
console.log(getFirstElement(names));

// generics with interface
interface ApiResponse<T> {
  data: T;
  error?: string;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Toaster Code" },
};

const productResponse: ApiResponse<{ id: number; price: number }> = {
  data: { id: 101, price: 499 },
};

export {};
