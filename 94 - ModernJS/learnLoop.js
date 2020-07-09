const names = ["멍멍이", "야옹이", "멍뭉이"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let i = 0;
while (i < 10) {
  //   console.log(i);
  i++;
}

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  //   console.log(number);
}

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

// console.log(Object.entries(doggy));
// console.log(Object.keys(doggy));
// console.log(Object.values(doggy));

let a = 0;
for (let i = 0; i < 11; i++) {
  if (i === 5) continue;
  a += i;
}
// console.log(a);

const sumOf = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);
