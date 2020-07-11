const animal = {
  name: "멍멍이",
  type: "개",
};

const { name: nickname } = animal;
console.log(nickname);

const array = [1, 2];
const [one, two, three = 3] = array;

console.log(one);
console.log(two);
console.log(three);

const deepObject = {
  state: {
    information: {
      name: "ddoni",
      languages: ["java", "html", "css"],
    },
  },
  value: 5,
};

const {
  state: {
    information: { name, languages },
  },
  value,
} = deepObject;

const extracted = {
  name,
  languages,
  value,
};

console.log(extracted);
