// Interface described the structure of an object.
interface Named {
  readonly name: string; // readonly: can't be changed after object initialization (default)
  outputName?: string; // optional property with a question mark
}

// We can extend an interface to inherit its properties
// We can extend multiple interfaces using a comma
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

// We can use interface as a type to define a variable or a parameter
const user: Greetable = new Person("Aman", 25);
// user.name = "Babbu"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(user);

user.greet("Hello, I am ");

// We can use interface to define a function type
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (a: number, b: number) => a + b;
console.log(add(5, 10));
