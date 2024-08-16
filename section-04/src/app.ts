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
// Default Parameters
const multiply = (a: number, b: number = 2) => a * b;
console.log(multiply(4)); // 4

// Spread Operator
const hobbies = ["Cooking", "Sports"];
const extraHobby = ["Reading"];
hobbies.push(...extraHobby);

const person = { name: "Aman", age: 30 };
const copiedPerson = { ...person };

// Rest Parameters
// Rest parameters allow you to represent an indefinite number of arguments as an array.
// With rest parameters, you can create functions that take a variable number of arguments.
const addNumbers = (...numbers: number[]) =>
  numbers.reduce((prev: number, current: number) => prev + current, 0);
console.log(addNumbers(3, 5, 6, 6, 7));

// Destructuring
// Array Destructuring
const [firstHobby, secondHobby, ...restHobbies] = hobbies;
console.log(firstHobby, secondHobby, restHobbies); // Cooking Sports
// Object Destructuring
const { name: fullName, age: myAge } = person;
console.log(fullName, myAge); // Aman 30
