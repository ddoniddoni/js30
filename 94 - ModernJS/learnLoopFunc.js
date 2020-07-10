const superheros = ["아이언맨", "캡틴 아메리카", "토르", "블랙팬서"];

superheros.forEach((hero) => {
  //   console.log(hero);
});

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = (n) => n * n;
const squared = array.map(square);
// console.log(squared);

const index = superheros.indexOf("토르");
// console.log(index);

const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const i = todos.find((todo) => todo.id === 3);
// console.log(i);

const tasksNotDone = todos.filter((todo) => todo.done);
// console.log(tasksNotDone);

const testnums = [10, 20, 30, 40];
const o = testnums.indexOf(30);
testnums.splice(o, 1);
console.log(testnums);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);

const a = [10, 20, 30, 40, 50];
let sum = a.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 200);

console.log(sum);
