function concatenation(
  value1: number | string,
  value2: number | string,
  resultConverion: 'as-number' | 'as-text' = 'as-text' // Literal types are used to specify the exact value a variable can have.
) {
  let result: string | number;
  if (
    (typeof value1 === 'number' && typeof value2 === 'number') ||
    resultConverion === 'as-number'
  ) {
    result = +value1 + +value2;
  } else {
    result = value1.toString() + value2.toString();
  }
  return result;
}

const combinedAge = concatenation(30, 26, 'as-number');
console.log(combinedAge);

const combineName = concatenation('Max', 'Anna');
console.log(combineName);
