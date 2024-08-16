const myName = "Amandeep Singh";
// myName = "Aman"; // Error: Cannot assign to 'myName' because it is a read-only property.
let age = 30;
if (age > 50) {
  const myFavSport = "Cricket"; // Block-scoped variable
  age = 50;
}
console.log(myName, age); // Amandeep Singh 30
// console.log(myFavSport); // Error: Cannot find name 'myFavSport'.

// Arrow Functions
const add = (a: number, b: number) => a + b;
console.log(add(2, 3)); // 5
