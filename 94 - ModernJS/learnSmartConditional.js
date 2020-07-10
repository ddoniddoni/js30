const inAnimal = (name) => {
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(name);
};

console.log(inAnimal("개"));
console.log(inAnimal("노트북"));

const getSound = (animal) => {
  const sounds = {
    개: "멍멍!",
    고양이: "야옹~",
    참새: "짹짹",
    비둘기: "구구 구 구",
  };
  return sounds[animal] || "...?";
};

console.log(getSound("개"));
console.log(getSound("바보"));
