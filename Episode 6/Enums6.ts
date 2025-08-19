enum Role {
  Admin,
  User,
  Guest,
}

function checkRole(role: Role) {
  if (role === Role.Admin) {
    console.log("Access Granted");
  }
}

// checkRole(Role.Admin);

// ! 1. Numeric Enums
enum Cars {
  BMW, //0
  Audi, //1
  Mustang, //2
}

// console.log("Enums 1: ", Cars.BMW);
// console.log("Enums 2: ", Cars.Audi);
// console.log(Cars.Mustang);

// custom starting index
// enum Status {
//   Success = 1,
//   Failure,
//   Pending,
// }

// console.log("Sucess: ", Status.Success);
// console.log("Failure: ", Status.Failure);

// Reverse Mapping
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log("Direction UP: ", Direction.Up);
console.log("Direction Down: ", Direction[1]);
console.log("Direction Right: ", Direction[3]);

//! String Enums
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}
console.log("Status is: ", Status.Success);

function handleStatus(status: Status) {
  if (status === Status.Failure) {
    console.log("You are a Failure");
  }
}
handleStatus(Status.Failure);

export {};
