// Interface described the structure of an object.
interface Greetable {
  name: string;
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
console.log(user);

user.greet("Hello, I am ");
