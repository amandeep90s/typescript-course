// Interface described the structure of an object.
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

const user: Person = {
  name: "Aman",
  age: 34,
  greet(phrase: string) {
    console.log(phrase + this.name);
  },
};

user.greet("Hello, I am ");
