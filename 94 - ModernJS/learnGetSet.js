const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("cal");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  },
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
