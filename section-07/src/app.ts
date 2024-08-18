// Generics - Its a way to create reusable components that can work with any data type and not just one data type.
const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve("This is done"), 2000);
});
