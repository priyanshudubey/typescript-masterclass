/**
 * Interface
 */

interface Address {
  street: string;
  city: string;
}

interface User {
  readonly id: number;
  name: string;
  age?: number;
  isActive: boolean;
  address: Address;
}

const user1: User = {
  id: 123,
  name: "Toaster Head",
  age: 25,
  isActive: true,
  address: {
    street: "Anything",
    city: "Something",
  },
};

interface Student {
  email: string;
  password: string;
}
interface Admin extends Student {
  isAdmin: boolean;
}

const admin1: Admin = {
  email: "any@mail.com",
  password: "12345678",
  isAdmin: true,
};

console.log("Admin: ", admin1);
console.log("User: ", user1);

//type alias
type Users = {
  name: string;
  age: number;
};

type HasName = { name: string };
type HasAge = { age: number };

type NewUser = HasAge & HasName;

const new_user_1: NewUser = {
  name: "Toaster again",
  age: 25,
};

type Base = { id: number };

interface Teacher extends Base {
  name: string;
}

const t1: Teacher = {
  name: "Any name hjere",
  id: 123,
};

/**
 * --------------------------------------------
 * Interface vs Type in TypeScript – Final Verdict
 * --------------------------------------------
 *
 * Feature                          | Interface   | Type
 * --------------------------------------------------------
 * Object Shape Definition          | ✅          | ✅
 * Extends / Implements (OOP)       | ✅          | ❌ (limited via `&`)
 * Union & Intersection             | ❌          | ✅
 * Index Signatures                 | ✅          | ✅
 * Readability                      | ✅          | ✅
 *
 *  TL;DR:
 * - Use `interface` for:
 *     - Defining object/class contracts
 *     - Extending or implementing structures
 * - Use `type` for:
 *     - Union types: 'admin' | 'user'
 *     - Intersections: type A & type B
 *     - Complex composition
 *
 *  Both are great. Pick based on your use case.
 *  ! Just don’t blindly use `any` — that’s how bugs win.
 */

export {};
