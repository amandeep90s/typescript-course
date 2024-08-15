function printSum(a: number, b: number) {
  return a + b;
}

function printResult(text: number) {
  console.log(text);
}

let output: (a: number, b: number) => number;
output = printSum;
// Error: Type 'string' is not assignable to type 'number'
// output = printText;
console.log(output(10, 5));

function addAndhandle(a: number, b: number, cb: (n: number) => void) {
  const result = a + b;
  cb(result);
}
addAndhandle(10, 20, printResult);
