// const slime = {
//   name: "슬라임",
// };

// const cuteSlime = {
//   ...slime,
//   attribute: "cute",
// };

// const purpleCuteSlime = {
//   ...cuteSlime,
//   color: "purple",
// };

// console.log(slime);
// console.log(cuteSlime);
// console.log(purpleCuteSlime);

// const animals = ["개", "고양이", "참새"];
// const anotherAnimals = [...animals, "비둘기"];

// console.log(animals);
// console.log(anotherAnimals);

// const purpleCuteSlime = {
//   name: "슬라임",
//   attribute: "cute",
//   color: "purple",
// };

// const { color, ...cuteSlime } = purpleCuteSlime;
// console.log(color);
// console.log(cuteSlime);

// const { attribute, ...slime } = cuteSlime;
// console.log(attribute);
// console.log(slime);

// const numbers = [0, 1, 2, 3, 4, 5, 6];

// const [zero, ...rest] = numbers;

// console.log(zero);
// console.log(rest);

// const numsum = (...rest) => {
//   return rest.reduce((acc, current) => acc + current, 0);
// };

// const result = numsum(1, 2, 3, 4, 5, 6);
// console.log(result);

const max = (...numbers) => {
  return numbers.reduce((acc, current) => (current > acc ? current : acc), numbers[0]);
};

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
