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

function add(a: Combinable, b: Combinable) {
  // Type guard with typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

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
