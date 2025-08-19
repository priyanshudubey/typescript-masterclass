/**
 * ! ENUMS - enumerations
 * List of named constants
 *
 */

// JS without enums
function checkRoles(role) {
  if (role === "admin") {
    console.log("access granted");
  } else if (role === "user") {
    console.log("Limited Access");
  } else if (role === "guest") {
    console.log("View Only Access");
  }
}
checkRoles("admin");
checkRoles("admim");

// 0 = success, 1 = Failure
function processOrder(status) {
  if (status === 0) {
    console.log("Order Completed");
  }
  if (status === 1) {
    console.log("Order Failed");
  }
}
processOrder(1);
processOrder(3);
