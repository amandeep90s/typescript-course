function printSum(a: number, b: number) {
  return a + b;
}

function printText(text: string) {
  return text;
}

let output: (a: number, b: number) => number;
output = printSum;
// Error: Type 'string' is not assignable to type 'number'
// output = printText;
console.log(output(10, 5));
