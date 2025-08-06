/**
 * Episode - 4
 * Object and Interfaces
 */
// let cars = {
//   name: "BMW",
//   model: "akbsd",
//   speed: 200,
// };

// inline object type
let user: {
  readonly id: number;
  name: string;
  age: number;
  isActive: boolean;
  bio?: string;
} = {
  id: 1234,
  name: "Toaster Code",
  age: 25,
  isActive: true,
  bio: "Hey whatsup!",
};

//nested object

let exList: {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    country: string;
    flat: number;
  };
} = {
  name: "Sarah",
  age: 24,
  address: {
    street: "1234 Typescript Lane",
    city: "CheatVilla",
    country: "Cheatsitan",
    flat: 404,
  },
};

exList.address.street = "404 TS Lane";
exList.age = 25;

console.log("EX List: ", exList);
console.log("Users: ", user);

export {};
