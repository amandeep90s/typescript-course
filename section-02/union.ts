// Union types are used to combine multiple types into one type.
function combine(value1: number | string, value2: number | string) {
  let result: string | number;
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    result = value1 + value2;
  } else {
    result = value1.toString() + value2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);
