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

// Multiple decorators run from bottom to top.
@Logger("Logging - Person Class")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Amandeep";

  constructor() {
    console.log("Person class object created");
  }
}

const person = new Person();
console.log(person);
// ----------------------------
function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}
// Accessor Decorator & Method Decorator & Parameter Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor,
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set setPrice(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getProductPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
