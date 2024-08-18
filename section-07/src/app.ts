// Generics - Its a way to create reusable components that can work with any data type and not just one data type.
// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("This is done"), 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Aman', hobbies: ['Sports'] }, { age: 34 });
// mergeObj.name; // This will not work because merge function is returning object type and not the object with name property.
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
