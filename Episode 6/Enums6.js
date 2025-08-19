"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function checkRole(role) {
    if (role === Role.Admin) {
        console.log("Access Granted");
    }
}
// checkRole(Role.Admin);
// ! 1. Numeric Enums
var Cars;
(function (Cars) {
    Cars[Cars["BMW"] = 0] = "BMW";
    Cars[Cars["Audi"] = 1] = "Audi";
    Cars[Cars["Mustang"] = 2] = "Mustang";
})(Cars || (Cars = {}));
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log("Direction UP: ", Direction.Up);
console.log("Direction Down: ", Direction[1]);
console.log("Direction Right: ", Direction[3]);
//! String Enums
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
console.log("Status is: ", Status.Success);
function handleStatus(status) {
    if (status === Status.Failure) {
        console.log("You are a Failure");
    }
}
handleStatus(Status.Failure);
