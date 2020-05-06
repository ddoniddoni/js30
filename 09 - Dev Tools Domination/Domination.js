const p = document.querySelector("p");

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

p.addEventListener("click", makeGreen);

// Regular
console.log("Hello^^");

//Interpolated
console.log("I'm a %s", "ironMan");

//styled
console.log("%c I am some great text", "font-size:50px; color:red");

//warning
console.warn("Oh Noob!");

//error
console.error("Shit!");

//info
console.info("this is info");

//Testing
console.assert(1 === 2, "That is wrong!!");

//Clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("ddoni");
console.count("ddoni");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("ddoni");
console.count("Wes");
console.count("Wes");
console.count("omg");
console.count("omg");
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/ddoniddoni")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
