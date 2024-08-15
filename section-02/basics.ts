function add(
  number1: number,
  number2: number,
  showResult: boolean,
  phrase: string
) {
  const result = number1 + number2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 22;
const number2 = 5;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
