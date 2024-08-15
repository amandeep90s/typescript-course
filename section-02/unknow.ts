let userInput: unknown;
let userName: string = '';

userInput = 5;
userInput = 'Aman';
// Error: Type 'unknown' is not assignable to type 'string'.
// userName = userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}
console.log(userName);
