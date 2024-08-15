const car = {
  name: 'Audi',
  model: 2022,
  color: ['red', 'white', 'black'],
};
console.log(car);

let favoriteCar: string[];
favoriteCar = ['Audi', 'BMW', 'Mercedes'];
console.log(favoriteCar);

for (const color of car.color) {
  console.log(color.toUpperCase());
}
