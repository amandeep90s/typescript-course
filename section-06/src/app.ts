// Type guards

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
// Intersection types are used to combine multiple types into one
// It is called inheritance of types and interfaces

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name", emp.name);
  // Type guard with object
  if ("privileges" in emp) {
    console.log("Privileges", emp.privileges);
  }
  // Type guard with object
  if ("startDate" in emp) {
    console.log("Start Date", emp.startDate);
  }
}

printEmployeeInfo(e1);
printEmployeeInfo({ name: "Aman", startDate: new Date() });

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// From both types it took common types
const a: Universal = 11; // number

// Function overloads example
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // Type guard with typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Aman", "Kumar");
result.split(" ");

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // Type guard with instanceof
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Union Pattern
// It is a pattern where each object has a property which is a literal type
// which is common in all objects
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving speed at " + speed);
}

moveAnimal({ type: "horse", runningSpeed: 12 });

// Type casting with "as" keyword and ! operator
// const userInput = document.getElementById("user-input")! as HTMLInputElement; // First Example
// const userInput = <HTMLInputElement>document.getElementById("user-input")!; // Second Example
const userInput = document.getElementById("user-input");
if (userInput) {
  (userInput as HTMLInputElement).value = "Hi there!"; // Third Example
}

// Index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
};

// Optional chaining
const fetchedUserData = {
  id: "u1",
  name: "Aman",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

// Nullish coalescing
// It is used to check null or undefined values
const userInputNull = null;
const storedData = userInputNull ?? "DEFAULT";
console.log(storedData);
