// Decorators are used to add metadata to the class, method, property, or parameter.
// Decorators are declared just before the class, method, property, or parameter declaration.
// Decorators are prefixed with @ symbol.
// Decorators are just a function that can be used to extend the behavior of the class, method, property, or parameter.
// Decorators are executed when the class is defined, not when the class is instantiated.

function Logger(logString: string = "LOGGING") {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookElement = document.getElementById(hookId);
    const p = new constructor();

    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Logging - Person Class")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Amandeep";

  constructor() {
    console.log("Person class object created");
  }
}

const person = new Person();
console.log(person);
