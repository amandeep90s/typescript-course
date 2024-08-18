// Generics - Its a way to create reusable components that can work with any data type and not just one data type.
// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("This is done"), 2000);
// });

function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Aman', hobbies: ['Sports'] }, { age: 34 });
// mergeObj.name; // This will not work because merge function is returning object type and not the object with name property.
console.log(mergeObj);
