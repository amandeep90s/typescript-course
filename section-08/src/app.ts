// Decorators are used to add metadata to the class, method, property, or parameter.
// Decorators are declared just before the class, method, property, or parameter declaration.
// Decorators are prefixed with @ symbol.
// Decorators are just a function that can be used to extend the behavior of the class, method, property, or parameter.
// Decorators are executed when the class is defined, not when the class is instantiated.

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Amandeep";

  constructor() {
    console.log("Person class object created");
  }
}

const person = new Person();
console.log(person);
